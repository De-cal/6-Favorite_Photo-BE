import express from "express";
import articleService from "../services/article.service.js";

const articleController = express.Router();

articleController.get("/", async (req, res, next) => {
  try {
    const articles = await articleService.getByFilter();
    res.status(200).json(articles);
  } catch (error) {
    next(error);
  }
});

articleController.get("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const articles = await articleService.getById(id);
    res.status(200).json(articles);
  } catch (error) {
    next(error);
  }
});

articleController.post("/", async (req, res, next) => {
  try {
    const userId = req.auth.userId;
    const {
      title,
      price,
      totalQuantity,
      exchangeText,
      exchangeRank,
      exchangeGenre,
      userPhotoCardId,
    } = req.body;
    const article = await articleService.postArticle({
      title,
      price,
      totalQuantity,
      exchangeText,
      exchangeRank,
      exchangeGenre,
      userPhotoCardId,
      userId,
    });
    res.status(201).json(article);
  } catch (error) {
    next(error);
  }
});

export default articleController;
