import prisma from "../db/prisma/prisma.js";

//마켓플레이스에서 SELLING과 SOLDOUT 다 가져오기
export const getSellingCardsAll = async ({ keyword, page = 1, limit = 12 }) => {
  const whereClause = {
    userPhotoCard: {
      status: {
        in: ["SELLING", "SOLDOUT"],
      },
      ...(keyword
        ? {
            photoCard: {
              title: {
                contains: keyword,
                mode: "insensitive",
              },
            },
          }
        : {}),
    },
  };

  const skip = (page - 1) * limit;

  const totalCount = await prisma.cardArticle.count({
    where: whereClause,
  });

  const articles = await prisma.cardArticle.findMany({
    where: whereClause,
    skip,
    take: limit,
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
    orderBy: {
      createdAt: "desc",
    },
  });

  return {
    articles,
    totalPages: Math.ceil(totalCount / limit),
    currentPage: page,
  };
};

async function getByIdWithDetails(id, options = {}) {
  const { tx } = options;
  const client = tx || prisma;
  
  return await client.cardArticle.findUnique({
    where: { id },
    include: {
      userPhotoCard: {
        include: {
          photoCard: {
            include: {
              creator: true
            }
          },
          user: {
            select: {
              id: true,
              nickname: true,
              pointAmount: true
            }
          }
        }
      }
    }
  });
}

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
          select: {
            status: true, //
            photoCard: {
              select: {
                rank: true,
                genre: true,
              },
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
  const genreCounts = {};
  const sellingTypeCounts = {
    SELLING: 0,
    EXCHANGE_REQUESTED: 0,
  };
  const soldOutCounts = {
    SOLDOUT: 0,
    NOT_SOLDOUT: 0,
  };

  for (const article of rankCountsRaw) {
    const rank = article.userPhotoCard.photoCard.rank;
    const genre = article.userPhotoCard.photoCard.genre;
    const status = article.userPhotoCard.status; // ✅ 이 부분 수정
    const remainingQuantity = article.remainingQuantity;

    // ✅ 등급별 remainingQuantity 합산
    rankCounts[rank] = (rankCounts[rank] || 0) + remainingQuantity;

    // ✅ 장르별 게시글 수 카운트
    genreCounts[genre] = (genreCounts[genre] || 0) + 1;

    // ✅ SELLING / SOLDOUT → 판매 상태 카드 수량 합산
    if (status === "SELLING" || status === "SOLDOUT") {
      sellingTypeCounts.SELLING += remainingQuantity; // ← 게시글 수가 아니라 수량 합산
    } else if (status === "EXCHANGE_REQUESTED") {
      sellingTypeCounts.EXCHANGE_REQUESTED += remainingQuantity;
    }

    // ✅ OWNED 제외하고 SOLDOUT / 그 외 상태로 soldOutCounts 누적
    // ✅ SOLDOUT 여부는 remainingQuantity 기준으로 판단
    if (remainingQuantity === 0) {
      soldOutCounts.SOLDOUT += 1;
    } else {
      soldOutCounts.NOT_SOLDOUT += remainingQuantity;
    }
  }
  return {
    totalCount: {
      totalCount: totalRemainingQuantity,
      articleCount, // 아티클 개수
    },
    list,
    rankCounts,
    genreCounts,
    soldOutCounts,
    sellingTypeCounts,
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

export const decreaseUserPhotoCardQuantity = async (
  cardId,
  amount = 1,
  options = {},
) => {
  const client = options.tx || prisma;
  return await client.userPhotoCard.update({
    where: { id: cardId },
    data: { quantity: { decrement: amount } },
  });
};

export const increaseUserPhotoCardQuantity = async (
  cardId,
  amount = 1,
  options = {},
) => {
  const client = options.tx || prisma;
  return await client.userPhotoCard.update({
    where: { id: cardId },
    data: { quantity: { increment: amount } },
  });
};

export const updateUserPhotoCardStatus = async (
  cardId,
  status,
  options = {},
) => {
  const client = options.tx || prisma;
  return await client.userPhotoCard.update({
    where: { id: cardId },
    data: { status },
  });
};

export const updateArticle = async (articleId, data, options = {}) => {
  const { tx } = options;
  const client = tx || prisma;
  return await client.cardArticle.update({ where: { id: articleId }, data });
};

// Get active exchanges for an article (for delete validation)
async function getActiveExchanges(articleId, options = {}) {
  const { tx } = options;
  const client = tx || prisma;
  
  // First get the article to find its userPhotoCardId
  const article = await client.cardArticle.findUnique({
    where: { id: articleId },
    select: { userPhotoCardId: true }
  });
  
  if (!article) {
    return [];
  }
  
  // Find exchanges where this card is the recipient
  // Based on your schema, it should be 'recipientArticleId' not 'recipientCardId'
  return await client.exchange.findMany({
    where: {
      recipientArticleId: articleId  // Use articleId directly instead of recipientCardId
    }
  });
}

// Remove article
async function remove(id, options = {}) {
  const { tx } = options;
  const client = tx || prisma;
  
  return await client.cardArticle.delete({
    where: { id }
  });
}

export default {
  getById,
  getByIdWithDetails,
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
  updateArticle,
  getActiveExchanges,
  remove,
};
