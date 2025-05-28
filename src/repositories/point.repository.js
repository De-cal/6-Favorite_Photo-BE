import prisma from "../db/prisma/prisma.js";

const pointRepository = {
  async addPoint(userId, rewardPoints) {
    return prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        pointAmount: {
          increment: rewardPoints,
        },
      },
    });
  },
};

export default pointRepository;
