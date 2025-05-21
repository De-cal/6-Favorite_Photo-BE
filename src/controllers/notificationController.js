import notificationService from "../services/notificationService";

const notificationController = {
  getMyNotifications: async (req, res, next) => {
    try {
      let { page = 1, limit = 10 } = req.query;
      page = parseInt(page)
      limit = parseInt(limit)
      

      const { userId } = req.auth; 
      const notifications = await notificationService.getMyNotifications(userId, page, limit);
      return res.status(200).json(notifications);
    } catch (error) {
      next(error);
    }
  },

  readNotification: async (req, res, next) => {
    try {
      const { notificationId } = req.params;
      const { userId } = req.auth; 
      const updatedNotification = await notificationService.readNotification(userId, notificationId);
      return res.status(200).json(updatedNotification);
    } catch (error) {
      next(error);
    }
  },

  readAllNotifications: async (req, res, next) => {
    try {
      const { userId } = req.auth;
      const result = await notificationService.readAllNotifications(userId);
      return res.status(200).json({ message: `${result.count}개의 알림이 읽음 처리되었습니다.` });
    } catch (error) {
      next(error);
    }
  },

  // 필요에 따라 알림 생성 컨트롤러 메서드를 추가하세요.
  // createSoldOutNotification: async (req, res, next) => {
  //   try {
  //     const { targetUserIds, grade, name } = req.body;
  //     await notificationService.createSoldOutNotification(targetUserIds, grade, name);
  //     return res.status(201).json({ message: '품절 알림이 성공적으로 전송되었습니다.' });
  //   } catch (error) {
  //     next(error);
  //   }
  // },
};

export default notificationController;