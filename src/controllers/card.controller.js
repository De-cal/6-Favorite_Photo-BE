import cardService from "../services/card.service.js";

const cardController = {
  getCardById: async (req, res, next) => {
    try {
      const { id } = req.params;
      const photocard = await cardService.getById(id);
      return res.status(200).json(photocard);
    } catch (error) {
      next(error);
    }
  },

  getMyGallery: async (req, res, next) => {
    try {
      const userId = req.user.id;

      const { page, pageSize, rank, genre, keyword, status } = req.query;

      const result = await cardService.findManyAtMygallery({
        page,
        pageSize,
        rank,
        genre,
        keyword,
        userId,
      });

      return res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  },

  // 사용자 생성 상태 조회 API
  getUserCreateStatus: async (req, res, next) => {
    try {
      const userId = req.user.id;
      const result = await cardService.getUserCreateStatus(userId);
      
      return res.status(200).json({
        success: true,
        data: result
      });
    } catch (error) {
      console.error("생성 상태 조회 에러:", error);
      next(error);
    }
  },

  createCard: async (req, res, next) => {
    try {
      const userId = req.user.id;
      const { title, rank, genre, price, totalQuantity, description } =
        req.body;
      const imagePath = req.file?.filename;

      if (!userId) {
        return res.status(401).json({ message: "로그인이 필요합니다." });
      }

      const result = await cardService.createCardWithTransaction({
        title,
        rank,
        genre,
        description: description || "",
        price: parseInt(price),
        totalQuantity: parseInt(totalQuantity),
        creatorId: userId,
        imgUrl: imagePath,
      });

      return res.status(201).json({
        success: true,
        data: result,
        message: "포토카드가 성공적으로 생성되었습니다.",
      });
    } catch (error) {
      console.error("카드 생성 에러:", error);

      if (error.statusCode) {
        return res.status(error.statusCode).json({
          success: false,
          message: error.message,
        });
      }

      return res.status(500).json({
        success: false,
        message: "카드 생성 중 서버 오류가 발생했습니다.",
      });
    }
  },
};

export default cardController;
