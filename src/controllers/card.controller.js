import cardService from "../services/card.service.js";

const cardController = {
  getCardById: async (req, res, next) => {
    try {
      const { id } = req.params;
      console.log("id", id);
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

  createCard: async (req, res, next) => {
    try {
      const userId = req.user.id;
      const { title, rank, genre, price, totalQuantity, description } = req.body;

      const imagePath = req.file?.filename;

      // 사용자 인증 확인
      if (!userId) {
        return res.status(401).json({ message: "로그인이 필요합니다." });
      }

      const newCard = await cardService.createCard({
        title,
        rank,
        genre,
        description,
        price: parseInt(price),
        totalQuantity: parseInt(totalQuantity),
        creatorId: userId,
        imgUrl: imagePath, // PhotoCard 모델의 imgUrl 필드에 저장
      });
      return res.status(201).json(newCard);
    } catch (error) {
      next(error);
    }
  },
};

export default cardController;
