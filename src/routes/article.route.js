// src/routes/article.route.js
import express from "express";
import articleController from "../controllers/article.controller.js";
import { validateAccessToken } from "../middlewares/auth.middleware.js";
//d
const articleRouter = express.Router();

articleRouter.get("/", articleController.getAllSelling);
articleRouter.get(
  "/user",
  validateAccessToken,
  articleController.getMyArticles,
);
articleRouter.get("/:id", articleController.getById);
articleRouter.post("/", articleController.postArticle);

export default articleRouter;
