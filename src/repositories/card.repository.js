import prisma from "../db/prisma/prisma.js";

export const findMyGallerySellingCards = async ({
  userId,
  page,
  pageSize,
  rank,
  genre,
  keyword,
  status,
}) => {
  const skip = (page - 1) * pageSize;

  const whereClause = {
    userId,
    status,
    photoCard: {
      ...(keyword && {
        title: {
          contains: keyword,
          mode: "insensitive",
        },
      }),
      ...(rank && { rank }),
      ...(genre && { genre }),
    },
  };

  const [cardCount, list, allForCount] = await Promise.all([
    // 1. 카드 수량 (userPhotoCard 개수)
    prisma.userPhotoCard.count({ where: whereClause }),

    // 2. 현재 페이지 목록
    prisma.userPhotoCard.findMany({
      where: whereClause,
      skip,
      take: pageSize,
      orderBy: { createdAt: "desc" },
      include: {
        photoCard: { include: { creator: true } },
        user: { select: { id: true, nickname: true } },
      },
    }),

    // 3. 전체 리스트 (등급별 집계 및 quantity 합산용)
    prisma.userPhotoCard.findMany({
      where: whereClause,
      include: {
        photoCard: {
          select: { rank: true },
        },
      },
    }),
  ]);

  // 등급별 quantity 합계 계산
  const rankCounts = {};
  let totalRemainingQuantity = 0;

  for (const card of allForCount) {
    const rank = card.photoCard.rank;
    const qty = card.quantity;
    rankCounts[rank] = (rankCounts[rank] || 0) + qty;
    totalRemainingQuantity += qty;
  }

  //무한 스크롤용 다음 페이지
  const totalPages = Math.ceil(cardCount / pageSize);
  const nextPage = page < totalPages ? page + 1 : null;

  return {
    totalCount: {
      totalCount: totalRemainingQuantity, // 🔢 총 수량
      cardCount, // 📦 userPhotoCard 수
    },
    list,
    rankCounts,
    nextPage,
  };
};

async function getById(id, options = {}) {
  const { tx } = options;
  const client = tx || prisma;
  return await client.userPhotoCard.findUnique({ where: { id } });
}

async function getByUser(userId, options = {}) {
  const { tx } = options;
  const client = tx || prisma;
  return await client.userPhotoCard.findMany({
    where: { userId, status: "OWNED", quantity: { not: 0 } },
    include: {
      photoCard: {
        include: {
          creator: true,
        },
      },
    },
  });
}

async function decreaseCard(id, quantity, options = {}) {
  const { tx } = options;
  const client = tx || prisma;
  return await client.userPhotoCard.update({
    where: { id },
    data: { quantity: { decrement: quantity } },
  });
}

async function create(data, options = {}) {
  const { tx } = options;
  const client = tx || prisma;

  const {
    title,
    rank,
    genre,
    description,
    price,
    totalQuantity,
    creatorId,
    imgUrl,
  } = data;

  return await client.$transaction(async (tx) => {
    // 1. 포토카드 생성
    const photoCard = await tx.photoCard.create({
      data: {
        title,
        rank,
        genre,
        description,
        price,
        imgUrl,
        creatorId,
      },
    });

    // 2. 유저포토카드 여러 개 생성
    const userPhotoCards = await tx.userPhotoCard.create({
      data: {
        userId: creatorId,
        photoCardId: photoCard.id,
        price,
        quantity: totalQuantity, // 한 row에 총 수량
        status: "OWNED", // 상태 추가
      },
    });

    return {
      photoCard,
      userPhotoCards,
    };
  });
}

async function remove(id, options = {}) {
  const { tx } = options;
  const client = tx || prisma;
  return await client.userPhotoCard.delete({ where: id });
}
export default {
  getById,
  getByUser,
  decreaseCard,
  create,
  findMyGallerySellingCards,
  remove,
};
