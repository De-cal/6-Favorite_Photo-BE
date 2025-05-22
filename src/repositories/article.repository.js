import prisma from "../db/prisma/prisma.js";

// 나의판매목록페이지에서 쓸 API - 목록 가져오기
export const findMyCardArticles = async ({
  userId,
  page,
  pageSize,
  rank,
  genre,
  sellingType,
  soldOut,
  keyword,
}) => {
  const skip = (page - 1) * pageSize;

  // 공통 조건
  const whereClause = {
    userPhotoCard: {
      userId,
      ...(sellingType && { status: sellingType }),
      photoCard: {
        ...(rank && { rank }),
        ...(genre && { genre }),
        ...(keyword && {
          title: {
            contains: keyword,
            mode: "insensitive",
          },
        }),
      },
    },
    ...(soldOut === true && { remainingQuantity: 0 }),
    ...(soldOut === false && { remainingQuantity: { gt: 0 } }),
  };

  const [totalCount, list, rankCounts] = await Promise.all([
    // 1. 전체 개수
    prisma.cardArticle.count({
      where: whereClause,
    }),

    // 2. 현재 페이지 데이터
    prisma.cardArticle.findMany({
      where: whereClause,
      skip,
      take: pageSize,
      orderBy: {
        createdAt: "desc",
      },
      include: {
        userPhotoCard: {
          include: {
            photoCard: true,
            user: {
              select: {
                id: true,
                nickname: true,
              },
            },
          },
        },
      },
    }),

    // 3. 등급별 개수 집계
    prisma.cardArticle
      .groupBy({
        by: ["userPhotoCardId"], // 중복 방지
        where: {
          userPhotoCard: {
            userId,
            ...(sellingType && { status: sellingType }),
            photoCard: {
              ...(genre && { genre }),
              ...(keyword && {
                title: {
                  contains: keyword,
                  mode: "insensitive",
                },
              }),
            },
          },
          ...(soldOut === true && { remainingQuantity: 0 }),
          ...(soldOut === false && { remainingQuantity: { gt: 0 } }),
        },
      })
      .then(async (grouped) => {
        const userPhotoCardIds = grouped.map((g) => g.userPhotoCardId);
        const cards = await prisma.userPhotoCard.findMany({
          where: {
            id: { in: userPhotoCardIds },
          },
          include: {
            photoCard: {
              select: { rank: true },
            },
          },
        });

        const counts = {};
        for (const item of cards) {
          const rank = item.photoCard.rank;
          counts[rank] = (counts[rank] || 0) + 1;
        }

        return counts;
      }),
  ]);

  return {
    totalCount,
    list,
    rankCounts,
  };
};

async function getByFilter(tx = prisma) {
  return await tx.cardArticle.findMany({});
}

async function getByFilter(tx = prisma) {
  return await tx.cardArticle.findMany({});
}

async function getById(id, tx = prisma) {
  return await tx.cardArticle.findUnique({ where: { id } });
}

async function getByCard(cardId, tx = prisma) {
  return await tx.cardArticle.findFirst({
    where: { userPhotoCardId: cardId },
  });
}

async function create(data, tx = prisma) {
  return await tx.cardArticle.create({ data });
}

export default {
  getByFilter,
  getById,
  getByCard,
  create,
  findMyCardArticles,
};
