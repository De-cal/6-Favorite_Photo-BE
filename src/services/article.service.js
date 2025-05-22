import prisma from "../db/prisma/prisma.js";
import articleRepository from "../repositories/article.repository.js";
import cardRepository from "../repositories/card.repository.js";

async function getByFilter() {
  return await articleRepository.getByFilter();
}

async function getById(id) {
  return await articleRepository.getById(id);
}

async function getAll() {
  return await articleRepository.getAll();
}
async function postArticle(data) {
  // const userId = "6cc2ca4b-d174-4220-b572-56d332da1f13";
  return await prisma.$transaction(async (tx) => {
    const card = await cardRepository.getById(data.userPhotoCardId, tx);
    if (!card) {
      throw new Error("해당 포토카드가 존재하지 않습니다.");
    }
    if (card.quantity < data.totalQuantity) {
      throw new Error("포토카드 수량이 부족합니다.");
    }
    const article = await articleRepository.getByCard(data.userPhotoCardId, tx);
    if (article) {
      throw new Error("이미 등록된 판매 글이 존재합니다.");
    }
    await cardRepository.decreaseCard(
      data.userPhotoCardId,
      data.totalQuantity,
      tx
    );
    const newCard = await cardRepository.create(
      {
        photoCardId: card.photoCardId,
        userId: card.userId,
        status: "SELLING",
        quantity: data.totalQuantity,
        price: data.price,
      },
      tx
    );
    return await articleRepository.create(
      {
        ...data,
        userPhotoCardId: newCard.id,
        remainingQuantity: data.totalQuantity,
      },
      tx
    );
  });
}

export default {
  getByFilter,
  getById,
  getAll,
  postArticle,
};
