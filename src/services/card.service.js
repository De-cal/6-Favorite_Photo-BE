import cardRepository from "../repositories/card.repository.js";

async function getById(id) {
  return await cardRepository.getById(id);
}

async function getByUser(userId) {
  return await cardRepository.getByUser(userId);
}

async function createCard(data) {
  return await cardRepository.create(data);
}

async function findManyAtMygallery({
  userId,
  page = 1,
  pageSize = 15,
  rank,
  genre,
  keyword,
  status = "SELLING",
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
    status,
  });
}

export default {
  getById,
  getByUser,
  findManyAtMygallery,
  createCard,
};
