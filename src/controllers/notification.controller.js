import notificationService from "../services/notification.service.js";

// 알림 조회
const getMyNotifications = async (req, res, next) => {
  try {
    let { page = 1, limit = 10 } = req.query;
    page = parseInt(page);
    limit = parseInt(limit);

    const userId = req.user.id;
    const notifications = await notificationService.getMyNotifications(
      userId,
      page,
      limit
    );
    return res.status(200).json(notifications);
  } catch (error) {
    next(error);
  }
};

// 하나의 알림 읽음 처리
const readNotification = async (req, res, next) => {
  try {
    const { notificationId } = req.params;
    const userId = req.user.id;
    await notificationService.readNotification(
      userId,
      notificationId
    );
    return res.status(200).json({ messag: "알림이 읽음 처리되었습니다." });
  } catch (error) {
    next(error);
  }
};

// 전체 알림 읽음 처리 -> 당장 필요 없지만 확장성 고려.
const readAllNotifications = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const result = await notificationService.readAllNotifications(userId);
    return res
      .status(200)
      .json({ message: `${result.count}개의 알림이 읽음 처리되었습니다.` });
  } catch (error) {
    next(error);
  }
};

export default { 
  getMyNotifications, 
  readNotification, 
  readAllNotifications, 
};