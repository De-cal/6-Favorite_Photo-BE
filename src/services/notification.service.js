import notificationRepository from "../repositories/notification.repository.js";

// 알림 조회
const getMyNotifications = async (userId, page, limit) => {
  const notifications = await notificationRepository.getNotificationsByUserId(
    userId,
    page,
    limit
  );
  if (!notifications) {
    throw { status: 404, message: "해당 사용자의 알림을 찾을 수 없습니다." };
  }

  const unreadCount = await notificationRepository.getUnReadCountByUserId(userId);
  if (unreadCount === null || unreadCount === undefined) {
    throw { status: 404, message: "읽지 않은 알림 개수를 찾을 수 없습니다." };
  }
      
  return { notifications, unreadCount };
};

// 하나의 알림 읽음 처리
const readNotification = async (userId, notificationId) => {
  const result = await notificationRepository.readNotificationByUserId(
    userId,
    notificationId
  );
  if (!result || result.affectedRows === 0) {
    throw { status: 404, message: "해당 사용자의 알림을 찾을 수 없거나 이미 읽었습니다." };
  }
  return result;
};

// 전체 알림 읽음 처리 -> 당장 필요 없지만 확장성 고려.
const readAllNotifications = async (userId) => {
  const result = await notificationRepository.readAllNotificationsByUserId(userId);
  if (!result || result.affectedRows === 0) {
    return { status: 200, message: "해당 사용자의 읽지 않은 알림이 없거나 이미 모두 읽었습니다." };
  }
  return result;
};

export default { 
  getMyNotifications, 
  readNotification, 
  readAllNotifications, 
};