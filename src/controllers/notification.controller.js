import notificationService from "../services/notification.service.js";

const notificationController = {
  getMyNotifications: async (req, res, next) => {
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
  },

  readNotification: async (req, res, next) => {
    try {
      const { notificationId } = req.params;
      const userId = req.user.id;
      await notificationService.readNotification(
        userId,
        notificationId
      );
      return res.status(200).json({ messag :"알림이 읽음 처리되었습니다." });
    } catch (error) {
      next(error);
    }
  },

  readAllNotifications: async (req, res, next) => {
    try {
      const userId = req.user.id;
      const result = await notificationService.readAllNotifications(userId);
      return res
        .status(200)
        .json({ message: `${result.count}개의 알림이 읽음 처리되었습니다.` });
    } catch (error) {
      next(error);
    }
  },

  // 테스트용 생성 함수.
  createExchangeSuccessNotification: async (req, res, next) => {
    try {
      const userId = req.user.id;
      await notificationService.createExchangeSuccessNotification(userId,"테스트용 유저 이름", "COMMON", "테스트용 카드 제목");
      return res.status(201).json({ message: '교환 성사 알림이 성공적으로 전송되었습니다.' });
    } catch (error) {
      next(error);
    }
  },

  createExchangeFailureNotification: async (req, res, next) => {
    try {
      const userId = req.user.id;
      await notificationService.createExchangeSuccessNotification(userId,"테스트용 유저 이름", "LEGENDARY", "테스트용 카드 제목");
      return res.status(201).json({ message: '교환 불발 알림이 성공적으로 전송되었습니다.' });
    } catch (error) {
      next(error);
    }
  },

  createExchangeOfferNotification: async (req, res, next) => {
    try {
      const userId = req.user.id;
      await notificationService.createExchangeOfferNotification(userId,"테스트용 유저 이름", "RARE", "테스트용 카드 제목");
      return res.status(201).json({ message: '교환 제시 알림이 성공적으로 전송되었습니다.' });
    } catch (error) {
      next(error);
    }
  },

  createSaleSuccessNotification: async (req, res, next) => {
    try {
      const userId = req.user.id;
      await notificationService.createSaleSuccessNotification(userId, "SUPER RARE", "테스트용 카드 제목", 3);
      return res.status(201).json({ message: '판매 완료 알림이 성공적으로 전송되었습니다.' });
    } catch (error) {
      next(error);
    }
  },

    createSoldOutNotification: async (req, res, next) => {
    try {
      const userId = req.user.id;
      await notificationService.createSoldOutNotification([userId], "COMMON", "테스트용 카드 제목");
      return res.status(201).json({ message: '품절 알림이 성공적으로 전송되었습니다.' });
    } catch (error) {
      next(error);
    }
  },
};

export default notificationController;
