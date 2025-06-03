import prisma from "../db/prisma/prisma.js";

const getNotificationsByUserId = async (userId, page = 1, limit = 10) => {
  const skip = (page) * limit;

  const userNotifications = await prisma.userNotification.findMany({
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

  const formattedNotifications = userNotifications.map(item => ({
    id: item.notification.id,
    message: item.notification.message,
    createdAt: item.createdAt,
    isRead: item.isRead,
  }));

  return formattedNotifications;
};

const getUnReadCountByUserId = async (userId) => {
  return prisma.userNotification.count({
    where: {
      userId,
      isRead: false,
    },
  });
};

const readNotificationByUserId = async (userId, notificationId) => {
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
};

  // 시안에는 없지만 모두 읽음 처리 필요할까 싶어서.
const readAllNotificationsByUserId = async (userId) => {
  return await prisma.userNotification.updateMany({
    where: {
      userId: userId,
      isRead: false,
    },
    data: {
      isRead: true,
    },
  });
};

export const createNotification = async (message, userIds, options = {}) => {
  const client = options.tx || prisma;

  const newNotification = await client.notification.create({
    data: { message },
  });

  const userNotificationData = userIds.map((userId) => ({
    userId,
    notificationId: newNotification.id,
  }));

  await client.userNotification.createMany({
    data: userNotificationData,
  });

  return newNotification;
};

export default { getNotificationsByUserId, getUnReadCountByUserId, readNotificationByUserId, readAllNotificationsByUserId, createNotification };
