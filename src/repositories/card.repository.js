import prisma from "../db/prisma/prisma.js";

export const findMyGallerySellingCards = async ({
  userId,
  page,
  pageSize,
  rank,
  genre,
  keyword,
  status,
  includeZero,
}) => {
  const skip = (page - 1) * pageSize;

  // 🔍 현재 페이지 및 필터 적용된 목록용 where
  const whereClause = {
    userId,
    ...(status && { status }),
    ...(includeZero ? {} : { quantity: { gt: 0 } }),
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

  // ✅ 총합 및 등급별 집계용 where: userId + status: "OWNED"
  const ownedClause = {
    userId,
    status: "OWNED",
  };

  const [filteredList, list, ownedList] = await Promise.all([
    // 1. 조건에 맞는 전체 리스트 (quantity 합산용)
    prisma.userPhotoCard.findMany({
      where: whereClause,
      select: { quantity: true },
    }),

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

    // 3. 전체 등급별 집계용 리스트 (status: OWNED만 사용)
    prisma.userPhotoCard.findMany({
      where: ownedClause,
      include: {
        photoCard: { select: { rank: true } },
      },
    }),
  ]);

  //  현재 필터 조건에 해당하는 quantity 총합
  const cardCount = filteredList.length;

  //  등급별 quantity 집계 (status: OWNED 기준)
  const rankCounts = {};
  let totalRemainingQuantity = 0;
  for (const card of ownedList) {
    const rank = card.photoCard.rank;
    const qty = card.quantity;
    rankCounts[rank] = (rankCounts[rank] || 0) + qty;
    totalRemainingQuantity += qty;
  }

  return {
    totalCount: {
      totalCount: totalRemainingQuantity, // 🔢 전체 owned 수량 합계
      cardCount, // 📦 현재 필터에 해당하는 수량 합계
    },
    list,
    rankCounts,
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
