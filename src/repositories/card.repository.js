import prisma from "../db/prisma/prisma.js";

async function getById(id) {
  return await prisma.userPhotoCard.findUnique({ where: { id } });
}

async function getByUser(userId) {
  return await prisma.userPhotoCard.findMany({
    where: { userId },
  });
}

async function decreaseCard(id, quantity) {
  return await prisma.userPhotoCard.update({
    where: { id },
    data: { quantity: { decrement: quantity } },
  });
}

async function create(data) {
  return await prisma.userPhotoCard.create({ data });
}
export default {
  getById,
  getByUser,
  decreaseCard,
  create,
};
