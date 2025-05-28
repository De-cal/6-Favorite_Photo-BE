import articleService from "../services/article.service.js";
//d
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
      const userId = req.user.id;
      console.log("넘어온 유저아이디 컨트롤러에서 출력", userId);
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

  /**
   * @De-cal TODO:
   * 1. 인증/인가 완료되면, buyerId, req.body 주석 해제
   */
  // 포토카드 구매
  purchaseArticle: async (req, res, next) => {
    try {
      // const buyerId = req.auth.id;
      const articleId = req.params.id;
      // const { purchaseQuantity, totalPrice } = req.body;
      const buyerId = "c1c8c599-7770-495d-8820-f400f6a0466e";
      const purchaseQuantity = 2;
      const totalPrice = 2;

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
      const articleId = req.params.id;
      // const { requesterCardId, description } = req.body;
      const requesterCardId = "8e9fd526-5158-4afe-97d2-e9a257cf0945";
      const description =
        "교환하고 싶어서 요청 드립니다. 사진이 너무 이쁘네요.";

      const exchange = await articleService.exchangeArticle({
        articleId,
        requesterCardId,
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
      // const { requesterCardId } = req.body;
      const requesterCardId = "8e9fd526-5158-4afe-97d2-e9a257cf0945";

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
};

export default articleController;
