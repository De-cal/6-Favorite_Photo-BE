import prisma from "../db/prisma/prisma.js";

const notificationRepository = {
  async getNotificationsByUserId(userId, page = 1, limit = 10) {
    const skip = (page - 1) * limit;

    return await prisma.userNotification.findMany({
      where: {
        userId,
      },
      include: {
        notification: true,
      },
      orderBy: {
        createdAt: "desc",
      },
      skip,
      take: limit,
    });
  },

  async getUnReadCountByUserId(userId) {
    return prisma.userNotification.count({
      where: {
        userId,
      },
    });
  },

  async readNotification(userId, notificationId) {
    return await prisma.userNotification.update({
      where: {
        userId_notificationId: {
          userId: userId,
          notificationId: notificationId,
        },
      },
      data: {
        isRead: true,
      },
    });
  },

  // 시안에는 없지만 모두 읽음 처리 필요할까 싶어서.
  async readAllNotificationsByUserId(userId) {
    return await prisma.userNotification.updateMany({
      where: {
        userId: userId,
        isRead: false,
      },
      data: {
        isRead: true,
      },
    });
  },

  async createNotification(message, userIds) {
    const newNotification = await prisma.notification.create({
      data: {
        message,
      },
    });

    const userNotificationData = userIds.map((userId) => ({
      userId,
      notificationId: newNotification.id,
    }));

    await prisma.userNotification.createMany({
      data: userNotificationData,
    });

    return newNotification;
  },
};

export default notificationRepository;
