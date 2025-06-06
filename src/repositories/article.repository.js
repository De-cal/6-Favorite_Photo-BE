import prisma from "../db/prisma/prisma.js";

//마켓플레이스에서 SELLING과 SOLDOUT 다 가져오기
const getSellingCardsAll = async ({ keyword, page = 1, limit = 12 }) => {
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

// 포토카드 판매자 상세 불러오기
const getByIdWithDetails = async (id, options = {}) => {
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
      exchange: {
        where: { recipientArticleId: id },
        select: {
          id: true,
          description: true,
          recipientArticleId: true,
          requesterCard: {
            select: {
              id: true,
              price: true,
              user: { select: { id: true, nickname: true } },
              photoCard: {
                select: {
                  id: true,
                  title: true,
                  rank: true,
                  genre: true,
                  imgUrl: true,
                },
              },
            },
          },
        },
      },
    },
  });
};

// 나의판매목록페이지에서 쓸 API - 목록 가져오기
const findMyCardArticles = async ({
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

  const photoCardFilter = {
    ...(rank && { rank }),
    ...(genre && { genre }),
    ...(keyword && {
      title: {
        contains: keyword,
        mode: "insensitive",
      },
    }),
  };

  const articleSoldOutFilter = {
    ...(soldOut === true && { remainingQuantity: 0 }),
    ...(soldOut === false && { remainingQuantity: { gt: 0 } }),
  };

  let list = [];
  let articleCount = 0;

  // ✅ 1. EXCHANGE_REQUESTED일 경우: userPhotoCard 테이블 기반 조회
  if (sellingType === "EXCHANGE_REQUESTED") {
    list = await prisma.userPhotoCard.findMany({
      where: {
        userId,
        status: "EXCHANGE_REQUESTED",
        photoCard: photoCardFilter,
      },
      skip,
      take: pageSize,
      orderBy: { createdAt: "desc" },
      include: {
        photoCard: { include: { creator: true } },
        user: { select: { id: true, nickname: true } },
      },
    });

    articleCount = await prisma.userPhotoCard.count({
      where: {
        userId,
        status: "EXCHANGE_REQUESTED",
        photoCard: photoCardFilter,
      },
    });

    // list의 형태를 cardArticle와 맞추기 위해 userPhotoCard를 감쌈
    list = list.map((upc) => ({ userPhotoCard: upc }));
  } else {
    // ✅ 2. 기본 또는 SELLING일 경우: cardArticle 기반
    const baseWhereClause = {
      userPhotoCard: {
        userId,
        ...(sellingType && { status: sellingType }),
        photoCard: photoCardFilter,
      },
      ...articleSoldOutFilter,
    };

    const baseList = await prisma.cardArticle.findMany({
      where: baseWhereClause,
      skip,
      take: pageSize,
      orderBy: { createdAt: "desc" },
      include: {
        userPhotoCard: {
          include: {
            photoCard: { include: { creator: true } },
            user: { select: { id: true, nickname: true } },
          },
        },
      },
    });

    articleCount = await prisma.cardArticle.count({ where: baseWhereClause });
    list = baseList;

    // ✅ 3. 추가로 EXCHANGE_REQUESTED 카드도 포함 (only when sellingType is null)
    if (!sellingType) {
      const exchangeCards = await prisma.userPhotoCard.findMany({
        where: {
          userId,
          status: "EXCHANGE_REQUESTED",
          photoCard: photoCardFilter,
        },
        orderBy: { createdAt: "desc" },
        include: {
          photoCard: { include: { creator: true } },
          user: { select: { id: true, nickname: true } },
        },
      });

      // cardArticle와 형식 맞추기 위해 wrapping
      const wrappedExchange = exchangeCards.map((upc) => ({
        userPhotoCard: upc,
      }));

      list = [...baseList, ...wrappedExchange];
    }
  }

  // ✅ 집계용 쿼리 (판매중 카드 기준)
  const countClause = {
    userPhotoCard: {
      userId,
    },
  };

  const [rankCountsRaw, fullCountsRaw] = await Promise.all([
    // 필터된 등급/장르 분석용
    prisma.cardArticle.findMany({
      where: {
        userPhotoCard: {
          userId,
          ...(sellingType && { status: sellingType }),
          photoCard: photoCardFilter,
        },
        ...articleSoldOutFilter,
      },
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

    // 전체 집계 (필터 없음)
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
    const { rank, genre } = article.userPhotoCard.photoCard;
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
      totalCount: Object.values(rankCounts).reduce((a, b) => a + b, 0),
      articleCount,
    },
    list,
    rankCounts,
    genreCounts,
    soldOutCounts,
    sellingTypeCounts,
  };
};

const getById = async (id, options = {}) => {
  const { tx } = options;
  const client = tx || prisma;
  return await client.cardArticle.findUnique({
    where: { id },
    include: {
      userPhotoCard: true,
    },
  });
};

// 포토카드 구매자 상세 불러오기
const getByIdWithRelations = async (articleId, userId = null, options = {}) => {
  const { tx } = options;
  const client = tx || prisma;

  return await client.cardArticle.findUnique({
    where: { id: articleId },
    include: {
      userPhotoCard: {
        include: {
          user: { select: { nickname: true, pointAmount: true } },
          photoCard: {
            include: { creator: { select: { id: true, nickname: true } } },
          },
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

const create = async (data, options = {}) => {
  const { tx } = options;
  const client = tx || prisma;
  return await client.cardArticle.create({ data });
};

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

// 포토카드 구매 6. 교환 신청 들어온 Exchange 전부 삭제
const deleteExchanges = async (articleId, options = {}) => {
  const { tx } = options;
  const client = tx || prisma;

  return await client.exchange.deleteMany({
    where: { recipientArticleId: articleId },
  });
};

// 포토카드 구매 7. requester의 UserPhotoCard에서 status가 EXCHANGE_REQUESTED인 UserPhotoCard 전부 삭제

// 포토카드 구매 8. requester의 UserPhotoCard에서 status가 OWNED인 UserPhotoCard 전부 수량 1개 증가

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
const decreaseQuantity = async (userPhotoCardId, options = {}) => {
  const { tx } = options;
  const client = tx || prisma;

  return await client.userPhotoCard.update({
    where: { id: userPhotoCardId },
    data: { quantity: { decrement: 1 } },
  });
};

// 포토카드 교환 요청 취소 유효성 검사 1 - Exchange 존재 여부
const getExchangeById = async (exchangeId, options = {}) => {
  const { tx } = options;
  const client = tx || prisma;

  return await client.exchange.findUnique({
    where: { id: exchangeId },
    include: {
      requesterUser: true,
      recipientArticle: {
        include: {
          userPhotoCard: true,
        },
      },
      requesterCard: true,
    },
  });
};

// 포토카드 교환 요청 취소 & 거절 1 - Exchange 삭제
const deleteExchange = async (exchangeId, options = {}) => {
  const { tx } = options;
  const client = tx || prisma;

  return await client.exchange.delete({ where: { id: exchangeId } });
};

// 포토카드 교환 요청 취소 & 거절 2 - requester의 UserPhotoCard에서 수량 1개 증가
const increaseQuantity = async (id, options = {}) => {
  const { tx } = options;
  const client = tx || prisma;

  return await client.userPhotoCard.update({
    where: { id, status: "OWNED" },
    data: { quantity: { increment: 1 } },
  });
};

const increaseUserPhotoCardQuantity = async (
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
const decreaseUserPhotoCardQuantity = async (
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

const updateUserPhotoCardStatus = async (cardId, status, options = {}) => {
  const client = options.tx || prisma;
  return await client.userPhotoCard.update({
    where: { id: cardId },
    data: { status },
  });
};

const updateArticle = async (articleId, data, options = {}) => {
  const { tx } = options;
  const client = tx || prisma;
  return await client.cardArticle.update({ where: { id: articleId }, data });
};

// Get active exchanges for an article (for delete validation)
const getActiveExchanges = async (articleId, options = {}) => {
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
};

// Remove article
const remove = async (id, options = {}) => {
  const { tx } = options;
  const client = tx || prisma;

  return await client.cardArticle.delete({
    where: { id },
  });
};

const getExchangeWithPhotocardInfo = async (exchangeId, options = {}) => {
  const client = options.tx || prisma;

  return await client.exchange.findUnique({
    where: { id: exchangeId },
    include: {
      recipientArticle: {
        include: {
          userPhotoCard: {
            include: {
              photoCard: true,
              user: true, // 판매자
            },
          },
        },
      },
    },
  });
};

const getRequesterUserIdsByArticleId = async (articleId, options = {}) => {
  const client = options.tx || prisma;
  const { excludeUserId, includeUserId } = options;

  const exchanges = await client.exchange.findMany({
    where: { recipientArticleId: articleId },
    select: { requesterUserId: true },
  });

  let userIds = exchanges.map((e) => e.requesterUserId);

  // 교환, 거래한 사람 제외.
  if (excludeUserId) {
    userIds = userIds.filter((id) => id !== excludeUserId);
  }

  // 판매자 추가.
  if (includeUserId) {
    userIds.push(includeUserId);
  }

  // 같은 사람이 교환요청 또 안되게 해놨지만. 혹시 모르니니 중복 제거.
  return [...new Set(userIds)];
};

// UserPhotoCard 삭제
const deleteUserPhotoCard = async (cardId, options = {}) => {
  const { tx } = options;
  const client = tx || prisma;

  return await client.userPhotoCard.delete({
    where: { id: cardId },
  });
};

export default {
  getById,
  getByIdWithDetails,
  getByIdWithRelations,
  getByUserIdAndPhotoCardId,
  getSellingCardsAll,
  create,
  findMyCardArticles,
  updateUserPhotoCard,
  decreaseCardArticleQuantity,
  decreaseBuyerPoints,
  increaseSellerPoints,
  deleteExchanges,
  createExchange,
  decreaseQuantity,
  getExchangeByUniqueConstraint,
  getExchangeById,
  deleteExchange,
  increaseQuantity,
  updateArticle,
  getActiveExchanges,
  remove,
  getExchangeWithPhotocardInfo,
  getRequesterUserIdsByArticleId,
  deleteUserPhotoCard,
  decreaseUserPhotoCardQuantity,
  increaseUserPhotoCardQuantity,
  updateUserPhotoCardStatus,
};
