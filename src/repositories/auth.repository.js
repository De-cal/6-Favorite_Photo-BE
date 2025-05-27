import { User } from "../models/User.js";
import prisma from "../db/prisma/prisma.js";

export const authRepository = {
  async findByEmail(email) {
    const user = await prisma.user.findUnique({
      where: { email },
    });
    return user ? new User(user) : null;
  },

  async findByNickname(nickname) {
    const user = await prisma.user.findUnique({
      where: { nickname },
    });
    return user ? new User(user) : null;
  },

  async create({ email, nickname, password }) {
    const user = await prisma.user.create({
      data: {
        email,
        nickname,
        password,
        pointAmount: 0,
        createCount: 0,
      },
    });
    return new User(user);
  },

  async findById(id) {
    const user = await prisma.user.findUnique({
      where: { id },
    });
    return user ? new User(user) : null;
  },
};
