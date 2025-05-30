import express from "express";
import articleController from "../controllers/article.controller.js";
import { validateAccessToken } from "../middlewares/auth.middleware.js";

const articleRouter = express.Router();

articleRouter.get("/", articleController.getAllSelling);
articleRouter.get("/:id", articleController.getById);
articleRouter.get(
  "/user",
  validateAccessToken,
  articleController.getMyArticles,
);

//포토카드 판매 글 업로드
articleRouter.post("/", validateAccessToken, articleController.postArticle);

articleRouter.get("/user", articleController.getMyArticles);

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

// 포토카드 교환 요청 취소
articleRouter.delete(
  "/:id/exchange/:exchangeId/:requesterCardId",
  articleController.cancelExchange,
);

// 포토카드 상세 불러오기
articleRouter.get("/:id", articleController.getByIdWithRelations);

// 포토카드 교환 승인, 거절
articleRouter.put(
  "/:id/exchange/:exchangeId",
  articleController.putExchangeCard,
);

export default articleRouter;
