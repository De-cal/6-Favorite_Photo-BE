import prisma from "../db/prisma/prisma.js";

async function getByFilter(tx = prisma) {
  return await tx.cardArticle.findMany({});
}

async function getById(id, tx = prisma) {
  return await tx.cardArticle.findUnique({ where: { id } });
}

async function getByCard(cardId, tx = prisma) {
  return await tx.cardArticle.findFirst({
    where: { userPhotoCardId: cardId },
  });
}

async function getAll() {
  return await prisma.cardArticle.findMany();
}

async function create(data, tx = prisma) {
  return await tx.cardArticle.create({ data });
}

export default {
  getByFilter,
  getById,
  getAll,
  getByCard,
  create,
};
