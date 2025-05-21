import prisma from "../db/prisma/prisma.js";

async function getByFilter() {
  return await prisma.cardArticle.findMany({});
}

async function getById(id) {
  return await prisma.cardArticle.findUnique({ where: { id } });
}

async function getByCard(cardId) {
  return await prisma.cardArticle.findFirst({
    where: { userPhotoCardId: cardId },
  });
}

async function create(data) {
  return await prisma.cardArticle.create({ data });
}

export default {
  getByFilter,
  getById,
  getByCard,
  create,
};
