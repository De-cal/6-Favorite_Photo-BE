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



// 포토 카드 교환 성사 알림 생성 (구매자 대상) -> 교환 수락시 발생.(판매자 입장) -> 세빈님
const createExchangeSuccessNotification = async (
  requesterUserId,
  recipientNickname,
  rank,
  title
) => {
  const message = `${recipientNickname} 님과의 [${rank} | ${title}] 포토카드 교환이 성사되었습니다.`;
  try {
    await notificationRepository.createNotification(message, [requesterUserId]);
    return { status: 201, message: "교환 성사 알림이 성공적으로 생성되었습니다." };
  } catch (error) {
    throw { status: 500, message: "교환 성사 알림 생성에 실패했습니다." };
  }
};

// 포토 카드 교환 불발 알림 생성 (구매자 대상) -> 교환 거절시 발생.(판매자 입장) -> 세빈님
const createExchangeFailureNotification = async (
  requesterUserId,
  recipientNickname,
  rank,
  title
) => {
  const message = `${recipientNickname} 님과의 [${rank} | ${title}] 포토카드 교환이 불발되었습니다.`;
  try {
    await notificationRepository.createNotification(message, [requesterUserId]);
    return { status: 201, message: "교환 불발 알림이 성공적으로 생성되었습니다." };
  } catch (error) {
    throw { status: 500, message: "교환 불발 알림 생성에 실패했습니다." };
  }
};

// 포토 카드 교환 제안 알림 생성 (판매자 대상) -> 교환 제안시 발생.(요청자 입장) -> 태빈님
const createExchangeOfferNotification = async (
  recipientUserId,
  requesterNickname,
  rank,
  title
) => {
  const message = `${requesterNickname} 님이 [${rank} | ${title}] 포토카드 교환을 제안했습니다.`;
  try {
    await notificationRepository.createNotification(message, [recipientUserId]);
    return { status: 201, message: "교환 제안 알림이 성공적으로 생성되었습니다." };
  } catch (error) {
    throw { status: 500, message: "교환 제안 알림 생성에 실패했습니다." };
  }
};

// 포토 카드 판매 성사 알림 생성 (판매자 대상) -> 구매 요청시 발생.(구매자 입장.) -> 태빈님
const createSaleSuccessNotification = async (
  sellerUserId,
  rank,
  title,
  quantity
) => {
  const message = `[${rank} | ${title}] ${quantity}장을 성공적으로 판매했습니다.`;
  try {
    await notificationRepository.createNotification(message, [sellerUserId]);
    return { status: 201, message: "판매 성사 알림이 성공적으로 생성되었습니다." };
  } catch (error) {
    throw { status: 500, message: "판매 성사 알림 생성에 실패했습니다." };
  }
};



// 판매 취소시 구매 요청자들에게 가는 알림 +a 사항.



// 포토 카드 품절 알림 생성 (관심 목록 등록 유저들 또는 판매자 대상). 여러명에게
// 수량이 0이 되었을때 발생. 마지막카드 구매, 교환수락, 판매 취소. 
const createSoldOutNotification = async (requesterUserIds, rank, title) => {
  const message = `[${rank} | ${title}] 포토카드가 품절 되었습니다.`;
  try {
    if (!Array.isArray(requesterUserIds) || requesterUserIds.length === 0) {
      throw { status: 400, message: "알림을 보낼 대상 사용자가 지정되지 않았습니다." };
    }
    await notificationRepository.createNotification(message, requesterUserIds);
    return { status: 201, message: "품절 알림이 성공적으로 생성되었습니다." };
  } catch (error) {
    if (error.status) {
      throw error;
    }
    throw { status: 500, message: "품절 알림 생성에 실패했습니다." };
  }
};



export default { getMyNotifications, readNotification, readAllNotifications, createExchangeSuccessNotification, createExchangeFailureNotification, createExchangeOfferNotification, createSaleSuccessNotification, createSoldOutNotification };
