import prisma from "../db/prisma/prisma.js";
import articleRepository from "../repositories/article.repository.js";
import cardRepository from "../repositories/card.repository.js";

async function getByFilter() {
  return await articleRepository.getByFilter();
}

async function getById(id) {
  return await articleRepository.getById(id);
}

async function postArticle(data) {
  return await prisma.$transaction(async (tx) => {
    const card = await cardRepository.getById(tx, data.userPhotoCardId);
    if (!card) {
      throw new Error("해당 포토카드가 존재하지 않습니다.");
    }
    if (card.quantity < data.totalQuantity) {
      throw new Error("포토카드 수량이 부족합니다.");
    }
    const article = await articleRepository.getByCard(tx, data.userPhotoCardId);
    if (article) {
      throw new Error("이미 등록된 판매 글이 존재합니다.");
    }
    await cardRepository.decreaseCard(
      tx,
      data.userPhotoCardId,
      data.totalQuantity
    );
    const newCard = await cardRepository.create(tx, {
      photoCardId: card.photoCardId,
      userId: card.userId,
      status: "SELLING",
      quantity: data.totalQuantity,
      price: data.price,
    });
    return await articleRepository.create(tx, {
      ...data,
      userPhotoCardId: newCard.id,
    });
  });
}

export default {
  getByFilter,
  getById,
  postArticle,
};
