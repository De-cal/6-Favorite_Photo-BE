import express from "express";
import notificationController from "../controllers/notification.controller.js";

const notificationRouter = express.Router();

// 알림 가져오기.
notificationRouter.get(
  "/",
  //auth.verifyAccessToken,
  notificationController.getMyNotifications
);

// 알림 읽음 처리.
notificationRouter.patch(
  "/:notificationId/read",
  //auth.verifyAccessToken,
  notificationController.readNotification
);

// 모든 알림 읽음 처리. -> 현재 요구사항엔 필요 X.
notificationRouter.patch(
  "/read-all",
  //auth.verifyAccessToken,
  notificationController.readAllNotifications
);

export default notificationRouter;
