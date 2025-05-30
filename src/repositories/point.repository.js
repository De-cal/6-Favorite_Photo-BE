import prisma from "../db/prisma/prisma.js";

const addPoint = async (userId, rewardPoints) => {
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
};

export default { addPoint };
