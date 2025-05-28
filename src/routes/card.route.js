import express from "express";
import cardController from "../controllers/card.controller.js";
import upload from "../middlewares/upload.js";
import { validateAccessToken } from "../middlewares/auth.middleware.js";

const cardRouter = express.Router();

cardRouter.get("/:id", cardController.getCardById);

cardRouter.get("/", validateAccessToken, cardController.getMyGallery);

// 카드 생성
cardRouter.post("/", upload.single("file"), cardController.createCard);

export default cardRouter;
