import articleService from "../services/article.service.js";

const articleController = {
  getById: async (req, res, next) => {
    try {
      const { id } = req.params;
      const article = await articleService.getByIdWithDetails(id);
      return res.status(200).json(article);
    } catch (error) {
      next(error);
    }
  },

  // 포토카드 상세 불러오기
  getByIdWithRelations: async (req, res, next) => {
    try {
      // const userId = req.user.id;
      const userId = "4ad8ed1c-dc54-4375-9ac7-fa5bf2d1c18c";
      const articleId = req.params.id;
      const article = await articleService.getByIdWithRelations(
        articleId,
        userId,
      );

      res.status(200).json(article);
    } catch (error) {
      next(error);
    }
  },

  // articleController.js
  getAllSelling: async (req, res, next) => {
    try {
      const { keyword = "", page = 1, limit = 12 } = req.query;
      const parsedPage = parseInt(page, 10); //정수로 세팅
      const parsedLimit = parseInt(limit, 10); //정수로 세팅

      const data = await articleService.getSellingCardsAll({
        keyword,
        page: parsedPage,
        limit: parsedLimit,
      });

      return res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  },

  //판매 글 업로드
  postArticle: async (req, res, next) => {
    try {
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
      const userId = req.user.id;
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

  deleteArticle: async (req, res, next) => {
    try {
      const userId = req.user.id;
      const { id: articleId } = req.params;

      await articleService.deleteArticle(articleId, userId);

      return res.status(200).json({
        message: "판매글이 성공적으로 삭제되었습니다.",
      });
    } catch (error) {
      next(error);
    }
  },

  patchExchangePhotoCard: async (req, res, next) => {
    try {
      const userId = req.user.id;
      const { articleId, exchangeId } = req.params;
      const { exchangeText, exchangeGenre, exchangeRank } = req.body;
      const result = await articleService.updateExchangePhotoCard({
        userId,
        articleId,
        exchangeId,
        exchangeText,
        exchangeGenre,
        exchangeRank,
      });
      return res.status(200).json(result);
    } catch (error) {
      next(e);
    }
  },

  // 포토카드 구매
  purchaseArticle: async (req, res, next) => {
    try {
      const buyerId = req.user.id;
      const articleId = req.params.id;
      const { purchaseQuantity, totalPrice } = req.body;

      const article = await articleService.purchaseArticle({
        buyerId,
        articleId,
        purchaseQuantity,
        totalPrice,
      });

      res.status(201).json(article);
    } catch (error) {
      next(error);
    }
  },

  // 포토카드 교환 요청
  exchangeArticle: async (req, res, next) => {
    try {
      const requesterUserId = req.user.id;
      const articleId = req.params.id;
      const { requesterCardId, description } = req.body;

      const exchange = await articleService.exchangeArticle({
        requesterUserId,
        requesterCardId,
        articleId,
        description,
      });

      res.status(201).json(exchange);
    } catch (e) {
      next(e);
    }
  },

  // 포토카드 교환 요청 취소
  cancelExchange: async (req, res, next) => {
    try {
      const exchangeId = req.params.exchangeId;
      const requesterCardId = req.params.requesterCardId;

      await articleService.cancelExchange({
        exchangeId,
        requesterCardId,
      });

      res.status(200).json({
        message: "교환 요청이 정상적으로 취소되었습니다.",
      });
    } catch (e) {
      next(e);
    }
  },

  // 포토카드 승인, 거절
  putExchangeCard: async (req, res, next) => {
    try {
      const userId = req.user.id;
      const { id: articleId, exchangeId } = req.params;
      const { isApproved } = req.body; // true: 승인, false: 거절

      const result = await articleService.processExchangeDecision({
        userId,
        articleId,
        exchangeId,
        isApproved,
      });

      res.status(200).json(result);
    } catch (e) {
      next(e);
    }
  },

  patchArticle: async (req, res, next) => {
    try {
      const userId = req.user.id;
      const { id: articleId } = req.params;
      const {
        price,
        totalQuantity,
        exchangeText,
        exchangeRank,
        exchangeGenre,
      } = req.body;
      const article = await articleService.patchArticle(articleId, userId, {
        price,
        totalQuantity,
        exchangeText,
        exchangeRank,
        exchangeGenre,
      });
    } catch (e) {
      next(e);
    }
  },
};
export default articleController;
