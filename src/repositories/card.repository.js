import prisma from "../db/prisma/prisma.js";

// 마이페이지에서 쓸 API - 목록 가져오기
export const findMyGallerySellingCards = async ({
  userId,
  page,
  pageSize,
  rank,
  genre,
  keyword,
}) => {
  const skip = (page - 1) * pageSize;

  const whereClause = {
    userId,
    status: "SELLING",
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

  const [totalCount, list, rankCounts] = await Promise.all([
    // 1. 전체 개수
    prisma.userPhotoCard.count({
      where: whereClause,
    }),

    // 2. 현재 페이지 데이터
    prisma.userPhotoCard.findMany({
      where: whereClause,
      skip,
      take: pageSize,
      orderBy: {
        createdAt: "desc",
      },
      include: {
        photoCard: true,
        user: {
          select: {
            id: true,
            nickname: true,
          },
        },
      },
    }),

    // 3. 등급별 개수 집계
    prisma.userPhotoCard
      .groupBy({
        by: ["photoCardId"], // 중복 방지
        where: whereClause,
      })
      .then(async (grouped) => {
        // 각 photoCardId에 대해 rank 조회
        const cards = await prisma.photoCard.findMany({
          where: {
            id: { in: grouped.map((g) => g.photoCardId) },
          },
          select: {
            id: true,
            rank: true,
          },
        });

        // rank 기준으로 개수 세기
        const counts = {};
        for (const card of cards) {
          counts[card.rank] = (counts[card.rank] || 0) + 1;
        }
        return counts;
      }),
  ]);

  return {
    totalCount,
    list,
    rankCounts, // { COMMON: 4, RARE: 6, LEGENDARY: 2, ... }
  };
};

async function getById(id, tx = prisma) {
  return await tx.userPhotoCard.findUnique({ where: { id } });
}

async function getByUser(userId, tx = prisma) {
  return await tx.userPhotoCard.findMany({
    where: { userId },
  });
}

async function decreaseCard(id, quantity, tx = prisma) {
  return await tx.userPhotoCard.update({
    where: { id },
    data: { quantity: { decrement: quantity } },
  });
}

async function create(data, tx = prisma) {
  return await tx.userPhotoCard.create({ data });
}
export default {
  getById,
  getByUser,
  decreaseCard,
  create,
  findMyGallerySellingCards,
};
