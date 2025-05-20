import prisma from "../db/prisma/prisma.js";

async function getByFilter() {
  const photocard = await prisma.cardArticle.findMany({});
  return photocard;
}

async function getById(id) {
  const photocard = await prisma.cardArticle.findUnique({ where: { id } });
  return photocard;
}

export default {
  getByFilter,
  getById,
};
