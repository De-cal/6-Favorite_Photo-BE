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
    const card = await cardRepository.getById(data.userPhotoCardId);
    if (!card) {
      throw new Error("해당 포토카드가 존재하지 않습니다.");
    }
    if (card.quantity < data.totalQuantity) {
      throw new Error("포토카드 수량이 부족합니다.");
    }
    const article = await articleRepository.getByCard(data.userPhotoCardId);
    if (article) {
      throw new Error("해당 포토카드를 이미 팔고 있습니다. ");
    }
    await cardRepository.decreaseCard(data.userPhotoCardId, data.totalQuantity);
    const newCard = await cardRepository.create({
      ...updatedCard,
      status: "SELLING",
      quantity: data.totalQuantity,
    });
    const newArticle = await articleRepository.create({
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
