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
          photoCard: {
            include: {
              creator: {
                select: {
                  id: true,
                  nickname: true,
                },
              },
            },
          },
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
              creator: true,
            },
          },
          user: {
            select: {
              id: true,
              nickname: true,
              pointAmount: true,
            },
          },
        },
      },
    },
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

  // 📌 1. 필터 포함된 쿼리 (list, articleCount용)
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

  // 📌 2. 집계용 쿼리 (userId만 반영)
  const countClause = {
    userPhotoCard: {
      userId,
    },
  };

  const [list, rankCountsRaw, articleCount, fullCountsRaw] = await Promise.all([
    // 필터된 리스트
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

    // 필터된 등급/장르/remainingQuantity 분석용
    prisma.cardArticle.findMany({
      where: whereClause,
      include: {
        userPhotoCard: {
          select: {
            status: true,
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

    // 필터된 아티클 수
    prisma.cardArticle.count({
      where: whereClause,
    }),

    // 🔥 전체 집계용 (필터 미포함!)
    prisma.cardArticle.findMany({
      where: countClause,
      include: {
        userPhotoCard: {
          select: {
            status: true,
            quantity: true,
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
  ]);

  // 필터된 수량 총합
  const filteredRemainingQuantity = rankCountsRaw.reduce(
    (sum, article) => sum + article.remainingQuantity,
    0,
  );

  // 🔥 필터 미적용된 전체 데이터 기반 집계
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

  for (const article of fullCountsRaw) {
    const rank = article.userPhotoCard.photoCard.rank;
    const genre = article.userPhotoCard.photoCard.genre;
    const status = article.userPhotoCard.status;
    const quantity = article.userPhotoCard.quantity ?? 0;

    rankCounts[rank] = (rankCounts[rank] || 0) + quantity;
    genreCounts[genre] = (genreCounts[genre] || 0) + quantity;

    if (status === "SELLING") {
      sellingTypeCounts.SELLING += quantity;
    } else if (status === "EXCHANGE_REQUESTED") {
      sellingTypeCounts.EXCHANGE_REQUESTED += quantity;
    }

    if (article.remainingQuantity === 0) {
      soldOutCounts.SOLDOUT += 1;
    } else {
      soldOutCounts.NOT_SOLDOUT += article.remainingQuantity;
    }
  }

  return {
    totalCount: {
      totalCount: Object.values(rankCounts).reduce((a, b) => a + b, 0), // 🔥 필터 제외 전체 quantity 합
      articleCount, // ✅ 필터 적용된 게시글 수
    },
    list, // ✅ 필터 적용된 현재 페이지 목록
    rankCounts,
    genreCounts,
    soldOutCounts,
    sellingTypeCounts,
  };
};

async function getById(id, options = {}) {
  const { tx } = options;
  const client = tx || prisma;
  return await client.cardArticle.findUnique({
    where: { id },
    include: {
      userPhotoCard: true,
    },
  });
}

// 포토카드 상세 불러오기
const getByIdWithRelations = async (articleId, userId = null, options = {}) => {
  const { tx } = options;
  const client = tx || prisma;

  return await client.cardArticle.findUnique({
    where: { id: articleId },
    include: {
      userPhotoCard: {
        include: {
          user: { select: { nickname: true, pointAmount: true } },
          photoCard: true,
        },
      },
      exchange: {
        where: { requesterUserId: userId },
        select: {
          id: true,
          description: true,
          requesterCard: {
            select: {
              id: true,
              price: true,
              user: { select: { nickname: true } },
              photoCard: {
                select: { title: true, rank: true, genre: true, imgUrl: true },
              },
            },
          },
        },
      },
    },
  });
};

// 구매하기 유효성 검사 3 - 보유중인 UserPhotoCard가 있는지 확인
const getByUserIdAndPhotoCardId = async (userId, photoCardId, options = {}) => {
  const { tx } = options;
  const client = tx || prisma;

  return await client.userPhotoCard.findFirst({
    where: { userId, photoCardId, status: "OWNED" },
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

// 포토카드 구매 1-1 - UserPhotoCard 업데이트
const updateUserPhotoCard = async (
  userPhotoCardId,
  quantity,
  price,
  options = {},
) => {
  const { tx } = options;
  const client = tx || prisma;

  return await client.userPhotoCard.update({
    where: { id: userPhotoCardId },
    data: { quantity, price },
  });
};

// 포토카드 구매 1-2 or 포토카드 교환 요청 3 - UserPhotoCard 생성
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

// 포토카드 교환 요청 유효성 검사 1 - Exchange 존재 여부
const getExchangeByUniqueConstraint = async (
  requesterUserId,
  recipientArticleId,
  options = {},
) => {
  const { tx } = options;
  const client = tx || prisma;

  return await client.exchange.findUnique({
    where: {
      requesterUserId_recipientArticleId: {
        requesterUserId,
        recipientArticleId,
      },
    },
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
    select: { userPhotoCardId: true },
  });

  if (!article) {
    return [];
  }

  // Find exchanges where this card is the recipient
  // Based on your schema, it should be 'recipientArticleId' not 'recipientCardId'
  return await client.exchange.findMany({
    where: {
      recipientArticleId: articleId, // Use articleId directly instead of recipientCardId
    },
  });
}

// Remove article
async function remove(id, options = {}) {
  const { tx } = options;
  const client = tx || prisma;

  return await client.cardArticle.delete({
    where: { id },
  });
}

export default {
  getById,
  getByIdWithDetails,
  getByIdWithRelations,
  getByUserIdAndPhotoCardId,
  getSellingCardsAll,
  getByCard,
  create,
  findMyCardArticles,
  updateUserPhotoCard,
  createUserPhotoCard,
  decreaseCardArticleQuantity,
  decreaseBuyerPoints,
  increaseSellerPoints,
  createExchange,
  decreaseQuantity,
  getExchangeByUniqueConstraint,
  getExchangeById,
  deleteExchange,
  increaseQuantity,
  updateArticle,
  getActiveExchanges,
  remove,
};
