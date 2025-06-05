import cardRepository from "../repositories/card.repository.js";
import authRepository from "../repositories/auth.repository.js";

async function getById(id) {
  return await cardRepository.getById(id);
}

async function getByUser(userId) {
  return await cardRepository.getByUser(userId);
}

async function createCard(data) {
  return await cardRepository.create(data);
}

// 개선된 트랜잭션과 함께 카드 생성
async function createCardWithTransaction(data) {
  const { creatorId } = data;
  
  try {
    // 1. 생성 횟수 체크
    const user = await authRepository.findById(creatorId);
    
    // 사용자 존재 여부 확인
    if (!user) {
      const error = new Error("사용자를 찾을 수 없습니다.");
      error.statusCode = 404;
      error.code = 'USER_NOT_FOUND';
      throw error;
    }

    // 생성 가능 횟수 확인
    if (user.createCount <= 0) {
      const currentMonth = new Date().toLocaleDateString('ko-KR', { 
        year: 'numeric', 
        month: 'long' 
      });
      
      const error = new Error(`${currentMonth} 모든 생성 기회를 소진했어요. 다음 달을 기다려주세요!`);
      error.statusCode = 400;
      error.code = 'CREATE_LIMIT_EXCEEDED';
      error.data = {
        createCount: user.createCount,
        maxCount: 3,
        currentMonth
      };
      throw error;
    }

    // 생성 전 로깅
    console.log(`[CARD_CREATE] 사용자 ${user.nickname || user.id}이 카드 생성 시작. 남은 횟수: ${user.createCount}/3`);

    // 2. Repository에서 트랜잭션 처리
    const result = await cardRepository.createWithUserUpdate(data);
    
    // 생성 후 로깅
    const remainingCount = user.createCount - 1;
    console.log(`[CARD_CREATE] 카드 생성 완료. 사용자 ${user.nickname || user.id}의 남은 횟수: ${remainingCount}/3`);
    
    // 성공 시 추가 정보와 함께 반환
    return {
      ...result,
      userInfo: {
        remainingCreateCount: remainingCount,
        maxCreateCount: 3,
        canCreateMore: remainingCount > 0
      }
    };

  } catch (error) {
    // 에러 로깅
    console.error(`[CARD_CREATE] 카드 생성 실패 - 사용자 ${creatorId}:`, {
      message: error.message,
      code: error.code,
      statusCode: error.statusCode
    });
    
    // 에러 재던지기
    throw error;
  }
}

// 사용자의 현재 생성 가능 횟수 조회 함수 추가
async function getUserCreateStatus(userId) {
  try {
    const user = await authRepository.findById(userId);
    
    if (!user) {
      const error = new Error("사용자를 찾을 수 없습니다.");
      error.statusCode = 404;
      throw error;
    }
    
    const currentMonth = new Date().toLocaleDateString('ko-KR', { 
      year: 'numeric', 
      month: 'long' 
    });
    
    return {
      createCount: user.createCount,
      maxCount: 3,
      remainingCount: user.createCount,
      canCreate: user.createCount > 0,
      currentMonth,
      status: user.createCount > 0 ? 'available' : 'exhausted'
    };
    
  } catch (error) {
    console.error(`[CREATE_STATUS] 사용자 ${userId} 생성 상태 조회 실패:`, error.message);
    throw error;
  }
}

async function findManyAtMygallery({
  userId,
  page = 1,
  pageSize = 15,
  rank,
  genre,
  keyword,
}) {
  const pageNum = Number(page);
  const pageSizeNum = Number(pageSize);

  if (isNaN(pageNum) || pageNum < 1) {
    throw new Error("유효하지 않은 page 값입니다.");
  }

  if (isNaN(pageSizeNum) || pageSizeNum < 1 || pageSizeNum > 16) {
    throw new Error("유효하지 않은 pageSize 값입니다.");
  }

  return await cardRepository.findMyGallerySellingCards({
    userId,
    page: pageNum,
    pageSize: pageSizeNum,
    rank,
    genre,
    keyword,
  });
}

export default {
  getById,
  getByUser,
  findManyAtMygallery,
  createCard,
  createCardWithTransaction,
  getUserCreateStatus,
};