import prisma from "../db/prisma/prisma.js";

const findByEmail = async (email) => {
  return await prisma.user.findUnique({
    where: { email },
  });
};

const findByNickname = async (nickname) => {
  return await prisma.user.findFirst({
    where: { nickname },
  });
};

const create = async ({ email, nickname, password }) => {
  return await prisma.user.create({
    data: {
      email,
      nickname,
      password,
      pointAmount: 0,
      createCount: 0,
    },
  });
};

const findById = async (id) => {
  return await prisma.user.findUnique({
    where: { id },
  });
};

export default {
  findByEmail,
  findByNickname,
  create,
  findById,
};
