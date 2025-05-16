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
    (g) => g !== currentGenre
  );
  const genre = genres[Math.floor(Math.random() * genres.length)];
  const texts = exchangeTextTemplates[genre];
  const text = `${texts[0]}\n${texts[1]}`;
  return { genre, text };
}

async function main() {
  console.log("🧹 Clearing old data...");
  await prisma.cardArticle.deleteMany();
  await prisma.userPhotoCard.deleteMany();
  await prisma.photoCard.deleteMany();
  await prisma.user.deleteMany();

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
    const creator = createdUsers[card.creatorIndex - 1]; // creatorIndex는 1부터 시작
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

  console.log("📦 Creating user cards & articles...");
  for (let i = 0; i < createdUsers.length; i++) {
    const user = createdUsers[i];
    const selectedCards = [
      createdPhotoCards[i % createdPhotoCards.length],
      createdPhotoCards[(i + 1) % createdPhotoCards.length],
    ];

    for (const card of selectedCards) {
      // 2장 판매 등록
      for (let j = 0; j < 2; j++) {
        const sellingCard = await prisma.userPhotoCard.create({
          data: {
            userId: user.id,
            photoCardId: card.id,
            quantity: 1,
            price: card.price,
            status: "SELLING",
          },
        });

        const { genre: exchangeGenre, text: exchangeText } =
          getRandomExchangeInfo(card.genre);

        await prisma.cardArticle.create({
          data: {
            title: `판매 카드 - ${card.title}`,
            price: sellingCard.price,
            totalQuantity: 2,
            remainingQuantity: 2,
            exchangeText,
            exchangeRank: card.rank,
            exchangeGenre,
            userPhotoCardId: sellingCard.id,
          },
        });
      }

      // 2장 보유 상태
      for (let j = 0; j < 2; j++) {
        await prisma.userPhotoCard.create({
          data: {
            userId: user.id,
            photoCardId: card.id,
            quantity: 1,
            price: card.price,
            status: "OWNED",
          },
        });
      }
    }
  }

  console.log("✅ Seed complete!");
}

main().catch((e) => {
  console.error("❌ Seed failed:", e);
  process.exit(1);
});
