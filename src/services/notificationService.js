import notificationRepository from "../repositories/notificationRepository";

const notificationService = {
  // 포토 카드 교환 성사 알림 생성 (구매자 대상)
  createExchangeSuccessNotification: async (buyerUserId, counterpartNickname, grade, name) => {
    const message = `${counterpartNickname} 님과의 [${grade} | ${name}] 포토카드 교환이 성사되었습니다.`;
    await notificationRepository.createNotification(message, [buyerUserId]);
  },

  // 포토 카드 교환 불발 알림 생성 (구매자 대상)
  createExchangeFailureNotification: async (buyerUserId, counterpartNickname, grade, name) => {
    const message = `${counterpartNickname} 님과의 [${grade} | ${name}] 포토카드 교환이 불발되었습니다.`;
    await notificationRepository.createNotification(message, [buyerUserId]);
  },

  // ?? 포토 카드 구매 성사 알림 생성 (구매자 대상)
  createPurchaseSuccessNotification: async (buyerUserId, grade, name, quantity) => {
    const message = `[${grade} | ${name}] ${quantity}장을 성공적으로 구매했습니다.`;
    await notificationRepository.createNotification(message, [buyerUserId]);
  },

  // 포토 카드 교환 제안 알림 생성 (판매자 대상)
  createExchangeOfferNotification: async (sellerUserId, proposingUserNickname, grade, name) => {
    const message = `${proposingUserNickname} 님이 [${grade} | ${name}] 포토카드 교환을 제안했습니다.`;
    await notificationRepository.createNotification(message, [sellerUserId]);
  },

  // 포토 카드 판매 성사 알림 생성 (판매자 대상)
  createSaleSuccessNotification: async (sellerUserId, grade, name, quantity) => {
    const message = `[${grade} | ${name}] ${quantity}장을 성공적으로 판매했습니다.`;
    await notificationRepository.createNotification(message, [sellerUserId]);
  },

  // 포토 카드 품절 알림 생성 (관심 목록 등록 유저들 또는 판매자 대상). 여러명에게
  createSoldOutNotification: async (targetUserIds, grade, name) => {
    const message = `[${grade} | ${name}] 이/가 품절 되었습니다.`;
    await notificationRepository.createNotification(message, targetUserIds);
  },

  // 알림 조회
  getMyNotifications: async (userId, page, limit) => {
    const notifications = await notificationRepository.getNotificationsByUserId(userId, page, limit);
    const unreadCount = await notificationRepository.countUnreadNotificationsByUserId(userId);
    return { notifications, unreadCount };
  },

  // 하나의 알림 읽음 처리
  readNotification: async (userId, notificationId) => {
    return await notificationRepository.readNotification(userId, notificationId);
  },

  // 전체 알림 읽음 처리 -> 당장 필요 없지만 확장성 고려.
  readAllNotifications: async (userId) => {
    return await notificationRepository.readAllNotificationsByUserId(userId);
  }
};

export default notificationService;