import prisma from "../db/prisma/prisma.js";

async function getById(id) {
  const photocard = await prisma.userPhotoCard.findUnique({ where: { id } });
  return photocard;
}

async function getByUser(userId) {
  const photocards = await prisma.userPhotoCard.findMany({
    where: { userId: id },
  });
  return photocards;
}

export default {
  getById,
  getByUser,
};
