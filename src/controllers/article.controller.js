import express from "express";
import articleService from "../services/article.service.js";

const articleController = express.Router();

// articleController.get("/", async (req, res, next) => {
//   try {
//     const articles = await articleService.getByFilter();
//     console.log("articles", articles);
//     res.status(200).json(articles);
//   } catch (error) {
//     next(error);
//   }
// });

articleController.get("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const articles = await articleService.getById(id);
    res.status(200).json(articles);
  } catch (error) {
    next(error);
  }
});

articleController.get("/", async (req, res, next) => {
  try {
    const { keyword } = req.query;
    const articles = await articleService.getSellingCardsAll(keyword);
    res.status(200).json(articles);
  } catch (error) {
    next(error);
  }
});

articleController.post("/", async (req, res, next) => {
  try {
    // const userId = req.auth.userId;
    const { price, totalQuantity, exchangeText, exchangeRank, exchangeGenre, userPhotoCardId } = req.body;
    const article = await articleService.postArticle({
      price,
      totalQuantity,
      exchangeText,
      exchangeRank,
      exchangeGenre,
      userPhotoCardId,
    });
    res.status(201).json(article);
  } catch (error) {
    next(error);
  }
});

articleController.get("/", async (req, res, next) => {
  try {
    const userId = req.user.id; // 로그인 사용자 ID
    const { page, pageSize, rank, genre, keyword, sellingType, soldOut } = req.query;

    const result = await cardService.findMyCardArticles({
      userId,
      page,
      pageSize,
      rank,
      genre,
      keyword,
      sellingType,
      soldOut,
    });

    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
});

export default articleController;
