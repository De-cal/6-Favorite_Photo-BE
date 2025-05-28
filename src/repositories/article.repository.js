import prisma from "../db/prisma/prisma.js";
//마켓플레이스에서 SELLING과 SOLDOUT 다 가져오기
//d
export const getSellingCardsAll = async ({ keyword }) => {
  const whereClause = {
    status: {
      in: ["SELLING", "SOLDOUT"],
    },
  };

  if (keyword) {
    whereClause.photoCard = {
      title: {
        contains: keyword,
        mode: "insensitive",
      },
    };
  }

  const result = await prisma.userPhotoCard.findMany({
    where: whereClause,
    include: {
      photoCard: true,
      user: {
        select: {
          id: true,
          nickname: true,
        },
      },
    },
  });

  return result;
};

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

  const whereClause = {
    userPhotoCard: {
      user: { id: userId },
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

  const [list, rankCountsRaw, articleCount] = await Promise.all([
    // 1. 현재 페이지 데이터
    prisma.cardArticle.findMany({
      where: whereClause,
      skip,
      take: pageSize,
      orderBy: { createdAt: "desc" },
      include: {
        userPhotoCard: {
          include: {
            photoCard: {
              include: { creator: true },
            },
            user: {
              select: { id: true, nickname: true },
            },
          },
        },
      },
    }),

    // 2. 등급별 remainingQuantity 집계용 전체 목록
    prisma.cardArticle.findMany({
      where: whereClause,
      include: {
        userPhotoCard: {
          include: {
            photoCard: {
              select: { rank: true },
            },
          },
        },
      },
    }),

    // 3. 총 게시글 수
    prisma.cardArticle.count({
      where: whereClause,
    }),
  ]);

  // 4. remainingQuantity 총합
  const totalRemainingQuantity = rankCountsRaw.reduce(
    (sum, article) => sum + article.remainingQuantity,
    0,
  );

  // 5. 등급별 remainingQuantity 합
  const rankCounts = {};
  for (const article of rankCountsRaw) {
    const rank = article.userPhotoCard.photoCard.rank;
    rankCounts[rank] = (rankCounts[rank] || 0) + article.remainingQuantity;
  }

  return {
    totalCount: {
      total: totalRemainingQuantity,
      articleCount, // 아티클 개수
    },
    list,
    rankCounts,
  };
};

async function getById(id, options = {}) {
  const { tx } = options;
  const client = tx || prisma;
  return await client.cardArticle.findUnique({ where: { id } });
}

const getByIdWithRelations = async (id) => {
  return await prisma.cardArticle.findUnique({
    where: { id },
    include: { userPhotoCard: { include: { user: true } } },
  });
};

async function getByCard(cardId, options = {}) {
  const { tx } = options;
  const client = tx || prisma;
  return await client.cardArticle.findFirst({
    where: { userPhotoCardId: cardId },
  });
}

async function create(data, options = {}) {
  const { tx } = options;
  const client = tx || prisma;
  return await client.cardArticle.create({ data });
}

// 포토카드 구매 1 or 포토카드 교환 요청 3 - UserPhotoCard 생성
const createUserPhotoCard = async (data, options = {}) => {
  const { tx } = options;
  const client = tx || prisma;

  return await client.userPhotoCard.create({ data });
};

// 포토카드 구매 2 - CardArticle 잔여수량 감소
const decreaseCardArticleQuantity = async (
  articleId,
  remainingQuantity,
  options = {},
) => {
  const { tx } = options;
  const client = tx || prisma;

  return await client.cardArticle.update({
    where: { id: articleId },
    data: { remainingQuantity },
  });
};

// 포토카드 구매 3 - 구매자 point 차감
const decreaseBuyerPoints = async (buyerId, pointAmount, options = {}) => {
  const { tx } = options;
  const client = tx || prisma;

  return await client.user.update({
    where: { id: buyerId },
    data: { pointAmount },
  });
};

// 포토카드 구매 4 - 판매자 point 증가
const increaseSellerPoints = async (sellerId, pointAmount, options = {}) => {
  const { tx } = options;
  const client = tx || prisma;

  return await client.user.update({
    where: { id: sellerId },
    data: { pointAmount },
  });
};

// 포토카드 교환 요청 1 - Exchange 생성
const createExchange = async (data, options = {}) => {
  const { tx } = options;
  const client = tx || prisma;

  return await client.exchange.create({ data });
};

// 포토카드 교환 요청 2 - requester의 UserPhotoCard에서 수량 1개 차감
const decreaseQuantity = async (requesterCardId, options = {}) => {
  const { tx } = options;
  const client = tx || prisma;

  return await client.userPhotoCard.update({
    where: { id: requesterCardId },
    data: { quantity: { decrement: 1 } },
  });
};

// 포토카드 교환 요청 취소 유효성 검사 1 - Exchange 존재 여부
const getExchangeById = async (exchangeId, options = {}) => {
  const { tx } = options;
  const client = tx || prisma;

  return await client.exchange.findUnique({ where: { id: exchangeId } });
};

// 포토카드 교환 요청 취소 1 - Exchange 삭제
const deleteExchange = async (exchangeId, options = {}) => {
  const { tx } = options;
  const client = tx || prisma;

  return await client.exchange.delete({ where: { id: exchangeId } });
};

// 포토카드 교환 요청 취소 2 - requester의 UserPhotoCard에서 수량 1개 증가
const increaseQuantity = async (requesterCardId, options = {}) => {
  const { tx } = options;
  const client = tx || prisma;

  return await client.userPhotoCard.update({
    where: { id: requesterCardId },
    data: { quantity: { increment: 1 } },
  });
};

export default {
  getById,
  getByIdWithRelations,
  getSellingCardsAll,
  getByCard,
  create,
  findMyCardArticles,
  createUserPhotoCard,
  decreaseCardArticleQuantity,
  decreaseBuyerPoints,
  increaseSellerPoints,
  createExchange,
  decreaseQuantity,
  getExchangeById,
  deleteExchange,
  increaseQuantity,
};
