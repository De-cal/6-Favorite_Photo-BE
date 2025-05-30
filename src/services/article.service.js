import prisma from "../db/prisma/prisma.js";
import articleRepository from "../repositories/article.repository.js";
import cardRepository from "../repositories/card.repository.js";
import authRepository from "../repositories/auth.repository.js";

async function getByIdWithDetails(id) {
  return await articleRepository.getByIdWithDetails(id);
}

async function getById(id) {
  return await articleRepository.getById(id);
}

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
    const newCard = await cardRepository.create(
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

// 아티클 삭제 (판매 내리기)
async function deleteArticle(articleId) {
  return await prisma.$transaction(async (tx) => {
    // 1. 아티클 정보 조회 (userPhotoCardId 필요)
    const article = await tx.cardArticle.findUnique({
      where: { id: articleId },
      select: {
        userPhotoCardId: true,
        totalQuantity: true
      }
    });

    if (!article) {
      throw new Error('아티클을 찾을 수 없습니다');
    }

    // 2. 진행 중인 교환이 있는지 확인
    // repository에서 import한 함수 사용
    const activeExchanges = await articleRepository.getActiveExchanges(articleId, { tx });
    if (activeExchanges.length > 0) {
      throw new Error('진행 중인 교환이 있어 삭제할 수 없습니다');
    }

    // 3. 먼저 CardArticle 삭제
    await tx.cardArticle.delete({
      where: { id: articleId }
    });

    // 4. UserPhotoCard 수량 복원 (삭제하지 않고 수량만 증가)
    await tx.userPhotoCard.update({
      where: { id: article.userPhotoCardId },
      data: {
        quantity: {
          increment: article.totalQuantity
        },
        status: 'OWNED' // 상태를 OWNED로 복원
      }
    });

    return { 
      success: true,
      message: '아티클이 성공적으로 삭제되었습니다'
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
  const article = await articleRepository.getByIdWithRelations(articleId);

  // 유효성 검사 1 : 보유 포토카드 부족
  if (article.remainingQuantity < purchaseQuantity) {
    const error = new Error("포토카드 수량이 부족합니다.");
    error.code = 400;

    throw error;
  }

  const buyer = await authRepository.findById(buyerId);

  // 유효성 검사 2 : 구매자 포인트 부족
  if (buyer.pointAmount < totalPrice) {
    const error = new Error("보유하고 있는 포인트가 부족합니다.");
    error.code = 400;

    throw error;
  }

  /**
   * @De-cal TODO:
   * 1. 이미 UserPhotoCard가 있으면 생성하지 못하도록 예외처리
   * 2. 이미 UserPhotoCard가 있을 때는 update만 되도록 하기(이미 산 사람이 똑같은 카드를 또 샀을 수도 있으니까)
   */
  return await prisma.$transaction(async (tx) => {
    // 1. 새로운 UserPhotoCard 생성
    const data = {
      userId: buyerId,
      photoCardId: article.userPhotoCard.photoCardId,
      quantity: purchaseQuantity,
      price: totalPrice,
    };

    const newArticle = await articleRepository.createUserPhotoCard(data, {
      tx,
    });

    // 2. CardArticle에서 수량 감소
    const remainingQuantity = article.remainingQuantity - purchaseQuantity;

    await articleRepository.decreaseCardArticleQuantity(
      articleId,
      remainingQuantity,
      { tx },
    );

    // 3. 구매자 Point 차감
    const buyerPointAmount = buyer.pointAmount - totalPrice;

    await articleRepository.decreaseBuyerPoints(buyerId, buyerPointAmount, {
      tx,
    });

    // 4. 판매자 Point 증가
    const sellerId = article.userPhotoCard.userId;
    const sellerPointAmount =
      article.userPhotoCard.user.pointAmount + totalPrice;

    await articleRepository.increaseSellerPoints(sellerId, sellerPointAmount, {
      tx,
    });

    return newArticle;
  });
};

// 포토카드 교환 요청
const exchangeArticle = async ({ articleId, requesterCardId, description }) => {
  return await prisma.$transaction(async (tx) => {
    // 1. Exchange 생성
    const article = await articleRepository.getByIdWithRelations(articleId);
    const data = {
      requesterCardId,
      recipientCardId: article.userPhotoCardId,
      description,
    };

    const exchange = await articleRepository.createExchange(data, { tx });

    // 2. requester의 UserPhotoCard에서 수량 1개 차감
    const requesterUserPhotoCard = await articleRepository.decreaseQuantity(
      requesterCardId,
      { tx },
    );

    // 3. requester의 UserPhotoCard에서 "수량: 1, status: EXCHANGE_REQUSET"인 UserPhotoCard 생성
    const { userId, photoCardId, price } = requesterUserPhotoCard;
    const forExchangeData = {
      userId,
      photoCardId,
      quantity: 1,
      price,
      status: "EXCHANGE_REQUESTED",
    };

    const userPhotoCard = await articleRepository.createUserPhotoCard(
      forExchangeData,
      { tx },
    );

    return {
      exchangeInfo: exchange,
      userPhotoCardForExchange: userPhotoCard,
    };
  });
};

// 포토카드 교환 요청 취소
const cancelExchange = async ({ exchangeId, requesterCardId }) => {
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

    // 포토카드 교환 요청 취소 2 - requester의 UserPhotoCard에서 수량 1개 증가
    await articleRepository.increaseQuantity(requesterCardId, { tx });
  });
};

export const putExchangeCard = async (articleId, exchangeId, approve) => {
  return await prisma.$transaction(async (tx) => {
    const exchange = await exchangeRepo.getExchangeById(exchangeId, { tx });
    if (!exchange) throw new Error("존재하지 않는 교환 요청입니다.");
    // 요청자 카드 수량 감소, 요청자 카드 상태 변경, 수신자 카드 상태 변경, 교환 요청 삭제
    if (approve) {
      await exchangeRepo.decreaseUserPhotoCardQuantity(
        exchange.requesterCardId,
        1,
        { tx },
      );
      await exchangeRepo.updateUserPhotoCardStatus(
        exchange.requesterCardId,
        "SOLDOUT",
        { tx },
      );
      await exchangeRepo.updateUserPhotoCardStatus(
        exchange.recipientCardId,
        "SOLDOUT",
        { tx },
      );
      await exchangeRepo.deleteExchange(exchangeId, { tx });
    } else {
      await exchangeRepo.deleteExchange(exchangeId, { tx });
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
    if (userId !== article.userId) {
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
      photoCard.Id,
      photoCard.quantity + article.remainingQuantity - data.quantity,
      { tx },
    );
    //기존 userPhotocard(selling)에 수량 변화 반영
    await cardRepository.updateQuantity(article.photoCardId, data.quantity, {
      tx,
    });

    //article 업데이트
    return await articleRepository.updateArticle(article.id, data, { tx });
  });
};

export default {
  getById,
  getByIdWithDetails,
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
