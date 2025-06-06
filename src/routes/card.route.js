import express from "express";
import cardController from "../controllers/card.controller.js";
import upload from "../middlewares/upload.js";
import { validateAccessToken } from "../middlewares/auth.middleware.js";

const cardRouter = express.Router();

cardRouter.get("/:id", cardController.getCardById);

cardRouter.get("/", validateAccessToken, cardController.getMyGallery);

// 사용자 생성 상태 조회
cardRouter.get("/user/create-status", validateAccessToken, cardController.getUserCreateStatus);

// 카드 생성
cardRouter.post("/", validateAccessToken, upload.single("file"), cardController.createCard);

export default cardRouter;
