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

// 포토카드 판매자 상세 불러오기
articleRouter.get(
  "/:id/seller",
  validateAccessToken,
  articleController.getById,
);

//포토카드 판매 글 업로드
articleRouter.post("/", validateAccessToken, articleController.postArticle);

// 포토카드 구매
articleRouter.post(
  "/:id",
  validateAccessToken,
  articleController.purchaseArticle,
);

// 아티클 삭제 (판매 내리기)
articleRouter.delete(
  "/:id",
  validateAccessToken,
  articleController.deleteArticle,
);

// 아티클 수정
articleRouter.patch(
  "/:id",
  validateAccessToken,
  articleController.patchArticle,
);

// 포토카드 교환 요청
articleRouter.post(
  "/:id/exchange",
  validateAccessToken,
  articleController.exchangeArticle,
);

// 포토카드 교환 요청 취소 & 거절
articleRouter.delete(
  "/:id/exchange/:exchangeId",
  validateAccessToken,
  articleController.cancelExchange,
);

// 포토카드 구매자 상세 불러오기
articleRouter.get(
  "/:id/buyer",
  validateAccessToken,
  articleController.getByIdWithRelations,
);

// 포토카드 교환 승인, 거절
articleRouter.put(
  "/:id/exchange/:exchangeId",
  articleController.putExchangeCard,
);

export default articleRouter;
