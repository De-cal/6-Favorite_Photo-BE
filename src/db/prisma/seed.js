import bcrypt from "bcrypt";
import { UserMocks } from "./mocks/userMocks.js";
import { PhotoCardMocks } from "./mocks/photoCardMocks.js";
import { PrismaClient } from "../generated/prisma/index.js";

const prisma = new PrismaClient();

const exchangeTextTemplates = {
  LANDSCAPE: [
    "자연이 담긴 풍경 사진과 교환하고 싶어요.",
    "감성적인 배경이 있는 풍경 카드 환영입니다.",
  ],
  PORTRAIT: [
    "개성 넘치는 인물 카드와 교환을 원해요.",
    "표정이 살아있는 인물 사진으로 바꾸고 싶어요.",
  ],
  ANIMAL: [
    "귀여운 동물 카드로 교환 희망합니다.",
    "동물 친구들이 담긴 포토카드 기다려요!",
  ],
  OBJECT: [
    "소품이나 장비 사진과 교환하고 싶어요.",
    "감성 있는 오브제 카드 환영해요.",
  ],
  FOOD: [
    "맛있는 음식 카드로 교환 원해요.",
    "컬러감 좋은 음식 사진 환영합니다.",
  ],
  ETC: [
    "독특한 느낌의 카드와 교환 희망해요.",
    "이모티콘이나 일러스트 카드로 바꾸고 싶어요.",
  ],
};

function getRandomExchangeInfo(currentGenre) {
  const genres = Object.keys(exchangeTextTemplates).filter(
    (g) => g !== currentGenre,
  );
  const genre = genres[Math.floor(Math.random() * genres.length)];
  const texts = exchangeTextTemplates[genre];
  const text = `${texts[0]}\n${texts[1]}`;
  return { genre, text };
}

// 주어진 배열에서 n개의 무작위 요소를 반환하는 함수
function getRandomElements(arr, n) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n);
}

// 1부터 max(포함)까지의 무작위 정수를 반환하는 함수
function getRandomQuantity(max) {
  return Math.floor(Math.random() * max) + 1;
}

async function main() {
  console.log("🧹 Clearing old data...");
  await prisma.exchange.deleteMany();
  await prisma.cardArticle.deleteMany();
  await prisma.userPhotoCard.deleteMany();
  await prisma.userNotification.deleteMany();
  await prisma.notification.deleteMany();
  await prisma.photoCard.deleteMany();
  await prisma.user.deleteMany();

  // 이후 시드 데이터 생성...

  console.log("👤 Creating users...");
  const createdUsers = [];
  for (const user of UserMocks) {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    const created = await prisma.user.create({
      data: {
        email: user.email,
        password: hashedPassword,
        nickname: user.nickname,
        pointAmount: user.pointAmount,
      },
    });
    createdUsers.push(created);
  }

  console.log("🖼️ Creating photo cards...");
  const createdPhotoCards = [];
  for (const card of PhotoCardMocks) {
    const creator = createdUsers[card.creatorId - 1];
    const created = await prisma.photoCard.create({
      data: {
        title: card.title,
        description: card.description,
        rank: card.rank,
        genre: card.genre,
        price: card.price,
        imgUrl: card.imgUrl,
        creatorId: creator.id,
      },
    });
    createdPhotoCards.push(created);
  }

  console.log("📦 Creating user cards...");
  const allUserPhotoCards = [];
  for (const user of createdUsers) {
    const randomCards = getRandomElements(createdPhotoCards, 5);

    for (const card of randomCards) {
      // 50% 확률로 판매용(SELLING) 또는 보유용(OWNED)으로 설정
      const isSelling = Math.random() < 0.5;
      const quantity = getRandomQuantity(10); // 1~10 사이의 무작위 수량 할당

      const userPhotoCard = await prisma.userPhotoCard.create({
        data: {
          userId: user.id,
          photoCardId: card.id,
          quantity: quantity,
          price: card.price,
          status: isSelling ? "SELLING" : "OWNED",
        },
      });
      if (isSelling) {
        allUserPhotoCards.push(userPhotoCard);
      }
    }
  }

  console.log("📝 Creating card articles from a random subset...");
  const uniqueSellingCards = Array.from(
    new Set(allUserPhotoCards.map((card) => card.photoCardId)),
  ).map((id) => allUserPhotoCards.find((card) => card.photoCardId === id));

  const articlesToCreate = getRandomElements(uniqueSellingCards, 20);

  const createdArticles = [];
  for (const articleCard of articlesToCreate) {
    const photoCard = createdPhotoCards.find(
      (pc) => pc.id === articleCard.photoCardId,
    );
    const { genre: exchangeGenre, text: exchangeText } = getRandomExchangeInfo(
      photoCard.genre,
    );

    const createdArticle = await prisma.cardArticle.create({
      data: {
        price: articleCard.price,
        totalQuantity: articleCard.quantity,
        remainingQuantity: articleCard.quantity,
        exchangeText,
        exchangeRank: photoCard.rank,
        exchangeGenre,
        userPhotoCardId: articleCard.id,
      },
    });
    createdArticles.push(createdArticle);
  }

  console.log("💤 Marking random articles as sold out...");
  const soldOutArticles = getRandomElements(createdArticles, 5);
  for (const article of soldOutArticles) {
    await prisma.cardArticle.update({
      where: { id: article.id },
      data: {
        remainingQuantity: 0,
      },
    });

    await prisma.userPhotoCard.update({
      where: { id: article.userPhotoCardId },
      data: {
        quantity: 0,
        status: "SOLDOUT",
      },
    });
  }

  console.log("✅ Seed complete!");
}

main().catch((e) => {
  console.error("❌ Seed failed:", e);
  process.exit(1);
});
