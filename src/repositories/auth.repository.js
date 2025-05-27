import prisma from "../db/prisma/prisma.js";

export const authRepository = {
  async findByEmail(email) {
    return await prisma.user.findUnique({
      where: { email },
    });
  },

  async findByNickname(nickname) {
    return await prisma.user.findFirst({
      where: { nickname },
    });
  },

  async create({ email, nickname, password }) {
    return await prisma.user.create({
      data: {
        email,
        nickname,
        password,
        pointAmount: 0,
        createCount: 0,
      },
    });
  },

  async findById(id) {
    return await prisma.user.findUnique({
      where: { id },
    });
  },
};
