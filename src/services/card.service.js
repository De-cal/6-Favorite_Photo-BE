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

// 트랜잭션과 함께 카드 생성
async function createCardWithTransaction(data) {
  const { creatorId } = data;
  
  // 1. 생성 횟수 체크
  const user = await authRepository.findById(creatorId);
  
  if (!user || user.createCount <= 0) {
    const error = new Error("이번달 모든 생성 기회를 소진했어요.");
    error.statusCode = 400;
    throw error;
  }

  // 2. Repository에서 트랜잭션 처리
  return await cardRepository.createWithUserUpdate(data);
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
};
