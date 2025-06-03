import prisma from "../db/prisma/prisma.js";
import articleRepository from "../repositories/article.repository.js";
import cardRepository from "../repositories/card.repository.js";
import authRepository from "../repositories/auth.repository.js";

// 포토카드 판매자 상세 불러오기
async function getByIdWithDetails(id) {
  return await articleRepository.getByIdWithDetails(id);
}

async function getById(id) {
  return await articleRepository.getById(id);
}

// 포토카드 구매자 상세 불러오기
const getByIdWithRelations = async (articleId, userId) => {
  return await articleRepository.getByIdWithRelations(articleId, userId);
};

async function getSellingCardsAll({ keyword, page, limit }) {
  return await articleRepository.getSellingCardsAll({ keyword, page, limit });
}

async function postArticle(data) {
  return await prisma.$transaction(async (tx) => {
    const card = await cardRepository.getById(data.userPhotoCardId, { tx });
    //유효성 검사 1: 포토카드 있는지 확인
    if (!card) {
      const error = new Error("해당 포토카드가 존재하지 않습니다.");
      error.code = 404;
      throw error;
    }
    //유효성 검사 2: 포토카드 수량 확인
    if (card.quantity < data.totalQuantity) {
      const error = new Error("포토카드 수량이 부족합니다.");
      error.code = 409;
      throw error;
    }
    // const article = await articleRepository.getByCard(data.userPhotoCardId, {
    //   tx,
    // });
    // if (article) {
    //   const error = new Error("이미 등록된 판매 글이 존재합니다.");
    //   error.code = 409;
    //   throw error;
    // }

    //판매할 카드 수량만큼 OWNED 카드 수량 감소
    const updatedCard = await cardRepository.decreaseCard(
      data.userPhotoCardId,
      data.totalQuantity,
      { tx },
    );
    // if (updatedCard.quantity === 0) {
    //   //삭제할지말지 (OR where quantity !== 0)
    //   await cardRepository.remove(updatedCard.id);
    // }

    //판매용 USERPHOTOCARD 생성
    const newCard = await cardRepository.createUserPhotocard(
      {
        photoCardId: card.photoCardId,
        userId: card.userId,
        status: "SELLING",
        quantity: data.totalQuantity,
        price: data.price,
      },
      { tx },
    );
    // CardArticle 생성
    return await articleRepository.create(
      {
        ...data,
        userPhotoCardId: newCard.id,
        remainingQuantity: data.totalQuantity,
      },
      { tx },
    );
  });
}

async function deleteArticle(articleId, userId) {
  return await prisma.$transaction(async (tx) => {
    // 1. 아티클 상세 정보 조회 (userPhotoCard 포함)
    const article = await articleRepository.getByIdWithDetails(articleId, { tx });

    if (!article) {
      throw new Error('아티클을 찾을 수 없습니다');
    }

    // 권한 확인 - 본인의 아티클인지 확인
    if (article.userPhotoCard.userId !== userId) {
      throw new Error('삭제 권한이 없습니다');
    }

    // 2. 진행 중인 교환 확인
    const activeExchanges = await articleRepository.getActiveExchanges(articleId, { tx });
    if (activeExchanges.length > 0) {
      throw new Error('진행 중인 교환이 있어 삭제할 수 없습니다');
    }

    const { userPhotoCard } = article;
    const { photoCardId, userId: sellerId } = userPhotoCard;
    const sellingQuantity = article.totalQuantity;

    // 3. OWNED 상태의 동일 포토카드 찾기
    const ownedCard = await articleRepository.getByUserIdAndPhotoCardId(
      sellerId, 
      photoCardId, 
      { tx }
    );

    // 4. 먼저 CardArticle 삭제 (외래키 참조 해제)
    await articleRepository.remove(articleId, { tx });

    if (ownedCard) {
      // 5-1. OWNED 카드가 이미 있다면 수량 합치기
      await articleRepository.increaseUserPhotoCardQuantity(
        ownedCard.id, 
        sellingQuantity, 
        { tx }
      );
      
      // 5-2. SELLING 상태의 userPhotoCard 삭제 (이제 외래키 참조가 없으므로 안전)
      await articleRepository.deleteUserPhotoCard(userPhotoCard.id, { tx });
    } else {
      // 5-3. OWNED 카드가 없다면 기존 카드를 OWNED로 변경하고 수량 복원
      await articleRepository.updateUserPhotoCardStatus(
        userPhotoCard.id, 
        'OWNED', 
        { tx }
      );
      await articleRepository.increaseUserPhotoCardQuantity(
        userPhotoCard.id, 
        sellingQuantity, 
        { tx }
      );
    }

    return {
      success: true,
      message: '아티클이 성공적으로 삭제되었습니다',
    };
  });
}

export async function findMyCardArticles({
  userId,
  page = 1,
  pageSize = 15,
  rank,
  genre,
  keyword,
  sellingType,
  soldOut,
}) {
  const pageNum = Number(page);
  const pageSizeNum = Number(pageSize);
  const parsedSoldOut =
    soldOut === "true" ? true : soldOut === "false" ? false : undefined;

  if (isNaN(pageNum) || pageNum < 1) {
    throw new Error("유효하지 않은 page 값입니다.");
  }

  if (isNaN(pageSizeNum) || pageSizeNum < 1 || pageSizeNum > 100) {
    throw new Error("유효하지 않은 pageSize 값입니다.");
  }
  return await articleRepository.findMyCardArticles({
    userId,
    page: pageNum,
    pageSize: pageSizeNum,
    rank,
    genre,
    sellingType,
    soldOut: parsedSoldOut,
    keyword,
  });
}

// 포토카드 구매
const purchaseArticle = async ({
  buyerId,
  articleId,
  purchaseQuantity,
  totalPrice,
}) => {
  // 유효성 검사 1 : 포토카드 잔여 수량 여부
  const article = await articleRepository.getByIdWithRelations(
    articleId,
    buyerId,
  );

  if (article.remainingQuantity < purchaseQuantity) {
    const error = new Error("포토카드 수량이 부족합니다.");
    error.code = 400;

    throw error;
  }

  // 유효성 검사 2 : 구매자 포인트 여부
  const buyer = await authRepository.findById(buyerId);

  if (buyer.pointAmount < totalPrice) {
    const error = new Error("보유하고 있는 포인트가 부족합니다.");
    error.code = 400;

    throw error;
  }

  // 유효성 검사 3 : 이미 보유중인 UserPhotoCard가 있는지 확인
  const userPhotoCard = await articleRepository.getByUserIdAndPhotoCardId(
    buyerId,
    article.userPhotoCard.photoCardId,
  );

  return await prisma.$transaction(async (tx) => {
    let newArticle, updatedArticle;

    // 포토카드 구매 1-1. 이미 UserPhotoCard를 보유 중이라면 업데이트
    if (userPhotoCard) {
      const quantity = userPhotoCard.quantity + purchaseQuantity;
      const price = totalPrice / purchaseQuantity;

      updatedArticle = await articleRepository.updateUserPhotoCard(
        userPhotoCard.id,
        quantity,
        price,
        { tx },
      );
    } else {
      // 포토카드 구매 1-2. 보유 중이지 않는다면 새로운 UserPhotoCard 생성
      const data = {
        userId: buyerId,
        photoCardId: article.userPhotoCard.photoCardId,
        quantity: purchaseQuantity,
        price: totalPrice / purchaseQuantity,
      };

      newArticle = await articleRepository.createUserPhotoCard(data, {
        tx,
      });
    }

    // 포토카드 구매 2. CardArticle에서 수량 감소
    const remainingQuantity = article.remainingQuantity - purchaseQuantity;

    await articleRepository.decreaseCardArticleQuantity(
      articleId,
      remainingQuantity,
      { tx },
    );

    // 포토카드 구매 3. 구매자 Point 차감
    const buyerPointAmount = buyer.pointAmount - totalPrice;

    await articleRepository.decreaseBuyerPoints(buyerId, buyerPointAmount, {
      tx,
    });

    // 포토카드 구매 4. 판매자 Point 증가
    const sellerId = article.userPhotoCard.userId;
    const sellerPointAmount =
      article.userPhotoCard.user.pointAmount + totalPrice;

    await articleRepository.increaseSellerPoints(sellerId, sellerPointAmount, {
      tx,
    });

    // 포토카드 구매 5. 만약 구매 수량과 CardArticle의 잔여 수량이 같을 경우(품절)
    if (article.remainingQuantity === purchaseQuantity) {
      // 유효성 검사 4 : Exchange 존재 여부
      const article = await articleRepository.getByIdWithDetails(articleId);

      if (article.exchange.length !== 0) {
        // 포토카드 구매 6. 교환 신청 들어온 Exchange 전부 삭제
        await articleRepository.deleteExchanges(articleId, { tx });

        await Promise.all(
          article.exchange.map(async (ex) => {
            // 포토카드 구매 7. requester의 UserPhotoCard에서 status가 EXCHANGE_REQUESTED인 UserPhotoCard 전부 삭제
            const userPhotoCardId = ex.requesterCard.id;

            await cardRepository.remove(userPhotoCardId, { tx });

            // 포토카드 구매 8. requester의 UserPhotoCard에서 status가 OWNED인 UserPhotoCard 전부 수량 1개 증가
            const userId = ex.requesterCard.user.id;
            const photoCardId = ex.requesterCard.photoCard.id;

            const userPhotoCard = await cardRepository.findByUserAndCard(
              userId,
              photoCardId,
            );

            await articleRepository.increaseQuantity(userPhotoCard.id, { tx });
          }),
        );
      }
    }

    return newArticle || updatedArticle;
  });
};

// 포토카드 교환 요청
const exchangeArticle = async ({
  requesterUserId,
  userPhotoCardId,
  articleId,
  description,
}) => {
  return await prisma.$transaction(async (tx) => {
    // 유효성 검사 1 - Exchange 존재 여부
    const exchange = await articleRepository.getExchangeByUniqueConstraint(
      requesterUserId,
      articleId,
    );

    if (exchange) {
      const error = new Error("교환 신청 중인 카드가 이미 존재합니다.");
      error.code = 400;

      throw error;
    }

    // 포토카드 교환 요청 1. requester의 UserPhotoCard에서 "수량: 1, status: EXCHANGE_REQUSET"인 UserPhotoCard 생성
    const userPhotoCard = await cardRepository.getById(userPhotoCardId);

    const { photoCardId, price } = userPhotoCard;

    const forExchangeData = {
      userId: requesterUserId,
      photoCardId,
      quantity: 1,
      price,
      status: "EXCHANGE_REQUESTED",
    };

    const requesterCard = await articleRepository.createUserPhotoCard(
      forExchangeData,
      { tx },
    );

    // 포토카드 교환 요청 2. requester의 UserPhotoCard에서 수량 1개 차감
    await articleRepository.decreaseQuantity(userPhotoCardId, { tx });

    // 포토카드 교환 요청 3. Exchange 생성
    const data = {
      requesterUserId,
      requesterCardId: requesterCard.id,
      recipientArticleId: articleId,
      description,
    };

    const newExchange = await articleRepository.createExchange(data, { tx });

    return newExchange;
  });
};

// 포토카드 교환 요청 취소
const cancelExchange = async ({ userId, exchangeId }) => {
  return await prisma.$transaction(async (tx) => {
    // 유효성 검사 1 : Exchange 존재 여부
    const exchange = await articleRepository.getExchangeById(exchangeId);

    if (!exchange) {
      const error = new Error("이미 교환 요청이 취소되었습니다.");
      error.code = 404;

      throw error;
    }

    // 포토카드 교환 요청 취소 1 - Exchange 삭제
    await articleRepository.deleteExchange(exchangeId, { tx });

    // 포토카드 교환 요청 취소 2 - requester의 UserPhotoCard에서 status가 EXCHANGE_REQUESTED인 UserPhotoCard 삭제
    await cardRepository.remove(exchange.requesterCardId, { tx });

    // 포토카드 교환 요청 취소 3 - requester의 UserPhotoCard에서 status가 OWNED인 UserPhotoCard 수량 1개 증가
    const { photoCardId } = exchange.requesterCard;

    const userPhotoCard = await cardRepository.findByUserAndCard(
      userId,
      photoCardId,
    );

    await articleRepository.increaseQuantity(userPhotoCard.id, { tx });
  });
};

//포토카드 승인 거절
export const putExchangeCard = async (articleId, exchangeId, approve) => {
  return await prisma.$transaction(async (tx) => {
    const exchange = await articleRepository.getExchangeById(exchangeId, {
      tx,
    });
    if (!exchange) throw new Error("존재하지 않는 교환 요청입니다.");
    // 요청자 카드 수량 감소, 요청자 카드 상태 변경, 수신자 카드 상태 변경, 교환 요청 삭제
    if (approve) {
      await articleRepository.decreaseUserPhotoCardQuantity(
        exchange.requesterCardId,
        1,
        { tx },
      );
      await articleRepository.updateUserPhotoCardStatus(
        exchange.requesterCardId,
        "SOLDOUT",
        { tx },
      );
      await articleRepository.updateUserPhotoCardStatus(
        exchange.recipientArticleId,
        "SOLDOUT",
        { tx },
      );
      await articleRepository.deleteExchange(exchangeId, { tx });
    } else {
      await articleRepository.deleteExchange(exchangeId, { tx });
    }
    return {
      message: approve ? "교환이 승인되었습니다." : "교환이 거절되었습니다.",
    };
  });
};

export const patchArticle = async (articleId, userId, data) => {
  return await prisma.$transaction(async (tx) => {
    const article = await articleRepository.getById(articleId, { tx });
    //유효성 검사 1: 작성자인지 확인
    if (userId !== article.userPhotoCard.userId) {
      const error = new Error("게시글의 작성자가 아닙니다.");
      error.code = 403;
      throw error;
    }
    // 유효성 검사 2: 수량 충분한지 확인
    if (article.remainingQuantity < data.totalQuantity) {
      const error = new Error("포토카드 수량이 부족합니다.");
      error.code = 400;
      throw error;
    }
    const photoCard = await cardRepository.findByUserAndCard(
      userId,
      article.photoCardId,
      { tx },
    );
    //기존 userPhotocard(owned)에 수량 변화 반영
    await cardRepository.updateQuantity(
      photoCard.id,
      photoCard.quantity + article.remainingQuantity - data.totalQuantity,
      { tx },
    );
    //기존 userPhotocard(selling)에 수량 변화 반영
    await cardRepository.updateQuantity(
      article.userPhotoCardId,
      data.quantity,
      {
        tx,
      },
    );
    //article 업데이트
    return await articleRepository.updateArticle(article.id, data, { tx });
  });
};

export default {
  getById,
  getByIdWithDetails,
  getByIdWithRelations,
  getSellingCardsAll,
  postArticle,
  deleteArticle,
  findMyCardArticles,
  purchaseArticle,
  exchangeArticle,
  cancelExchange,
  putExchangeCard,
  patchArticle,
};
