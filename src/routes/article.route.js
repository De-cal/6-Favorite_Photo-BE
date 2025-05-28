import express from "express";
import articleController from "../controllers/article.controller.js";
import { validateAccessToken } from "../middlewares/auth.middleware.js";

const articleRouter = express.Router();

articleRouter.get("/", articleController.getAllSelling);
articleRouter.get(
  "/user",
  validateAccessToken,
  articleController.getMyArticles,
);

articleRouter.post("/", articleController.postArticle);

articleRouter.get("/user", articleController.getMyArticles);

// 포토카드 구매
articleRouter.post("/:id", articleController.purchaseArticle);

// 포토카드 교환 요청
articleRouter.post("/:id/exchange", articleController.exchangeArticle);

// 포토카드 교환 요청 취소
articleRouter.delete(
  "/:id/exchange/:exchangeId",
  articleController.cancelExchange,
);

articleRouter.get("/:id", articleController.getById);

export default articleRouter;
