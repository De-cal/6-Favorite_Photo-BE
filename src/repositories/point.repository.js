import prisma from "../db/prisma/prisma.js";

const pointRepository = {
  async addPoint(userId, pointsToAdd) {
    return prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        pointAmount: {
          increment: pointsToAdd,
        },
      },
    });
  },
};

export default pointRepository;
