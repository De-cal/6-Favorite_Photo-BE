import prisma from "../db/prisma/prisma.js";

async function getById(id, tx = prisma) {
  return await tx.userPhotoCard.findUnique({ where: { id } });
}

async function getByUser(userId, tx = prisma) {
  return await tx.userPhotoCard.findMany({
    where: { userId },
  });
}

async function decreaseCard(id, quantity, tx = prisma) {
  return await tx.userPhotoCard.update({
    where: { id },
    data: { quantity: { decrement: quantity } },
  });
}

async function create(data, tx = prisma) {
  return await tx.userPhotoCard.create({ data });
}
export default {
  getById,
  getByUser,
  decreaseCard,
  create,
};
