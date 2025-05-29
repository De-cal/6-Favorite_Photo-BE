import express from "express";
import notificationController from "../controllers/notification.controller.js";
import { validateAccessToken } from "../middlewares/auth.middleware.js";

const notificationRouter = express.Router();

// 알림 가져오기.
notificationRouter.get(
  "/",
  validateAccessToken,
  notificationController.getMyNotifications
);

// 알림 읽음 처리.
notificationRouter.patch(
  "/:notificationId/read",
  validateAccessToken,
  notificationController.readNotification
);

// 모든 알림 읽음 처리. -> 현재 요구사항엔 필요 X.
notificationRouter.patch(
  "/read-all",
  validateAccessToken,
  notificationController.readAllNotifications
);

// 테스트용 생성 함수.
notificationRouter.get(
  "/create-1",
  validateAccessToken,
  notificationController.createExchangeSuccessNotification
);
notificationRouter.get(
  "/create-2",
  validateAccessToken,
  notificationController.createExchangeFailureNotification
);
notificationRouter.get(
  "/create-3",
  validateAccessToken,
  notificationController.createExchangeOfferNotification
);
notificationRouter.get(
  "/create-4",
  validateAccessToken,
  notificationController.createSaleSuccessNotification
);
notificationRouter.get(
  "/create-5",
  validateAccessToken,
  notificationController.createSoldOutNotification
);

export default notificationRouter;