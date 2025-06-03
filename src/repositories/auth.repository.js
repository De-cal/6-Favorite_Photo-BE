import prisma from "../db/prisma/prisma.js";

const findByEmail = async (email) => {
  return await prisma.user.findUnique({
    where: { email },
  });
};

const findByNickname = async (nickname) => {
  return await prisma.user.findUnique({
    where: { nickname },
  });
};

const create = async ({ email, nickname, password }) => {
  return await prisma.user.create({
    data: {
      email,
      nickname,
      password,
      pointAmount: 100,
      createCount: 3,
    },
  });
};

const findById = async (id) => {
  return await prisma.user.findUnique({
    where: { id },
  });
};

const findByGoogleId = async (googleId) => {
  return await prisma.user.findUnique({
    where: {
      googleId,
    },
  });
};

const createWithGoogle = async ({ email, nickname, googleId }) => {
  return await prisma.user.create({
    data: {
      email,
      nickname,
      password: "",
      googleId,
      pointAmount: 0,
      createCount: 0,
    },
  });
};

export default {
  findByEmail,
  findByNickname,
  create,
  findById,
  createWithGoogle,
  findByGoogleId,
};
