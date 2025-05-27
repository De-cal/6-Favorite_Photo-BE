// src/routes/article.route.js
import express from "express";
import articleController from "../controllers/article.controller.js";

const articleRouter = express.Router();

articleRouter.get("/:id", articleController.getById);

articleRouter.get("/", articleController.getAllSelling);

articleRouter.post("/", articleController.postArticle);

articleRouter.get("/user", articleController.getMyArticles);

export default articleRouter;
