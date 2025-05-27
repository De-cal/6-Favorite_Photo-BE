import articleService from "../services/article.service.js";

const articleController = {
  getById: async (req, res, next) => {
    try {
      const { id } = req.params;
      const article = await articleService.getById(id);
      return res.status(200).json(article);
    } catch (error) {
      next(error);
    }
  },

  getAllSelling: async (req, res, next) => {
    try {
      const { keyword } = req.query;
      const articles = await articleService.getSellingCardsAll(keyword);
      return res.status(200).json(articles);
    } catch (error) {
      next(error);
    }
  },

  postArticle: async (req, res, next) => {
    try {
      // const userId = req.auth.userId;
      const {
        price,
        totalQuantity,
        exchangeText,
        exchangeRank,
        exchangeGenre,
        userPhotoCardId,
      } = req.body;

      const article = await articleService.postArticle({
        price,
        totalQuantity,
        exchangeText,
        exchangeRank,
        exchangeGenre,
        userPhotoCardId,
      });

      return res.status(201).json(article);
    } catch (error) {
      next(error);
    }
  },

  getMyArticles: async (req, res, next) => {
    try {
      const userId = req.user.id; // 로그인 사용자 ID
      const { page, pageSize, rank, genre, keyword, sellingType, soldOut } =
        req.query;

      const result = await articleService.findMyCardArticles({
        userId,
        page,
        pageSize,
        rank,
        genre,
        keyword,
        sellingType,
        soldOut,
      });

      return res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  },
};

export default articleController;
