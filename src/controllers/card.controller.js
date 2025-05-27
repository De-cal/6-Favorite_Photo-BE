import cardService from "../services/card.service.js";


const cardController = {
  getCardById: async (req, res, next) => {
    try {
      const { id } = req.params;
      console.log('id', id)
      const photocard = await cardService.getById(id);
      return res.status(200).json(photocard);
    } catch (error) {
      next(error);
    }
  },

  getMyGallery: async (req, res, next) => {
    try {
      const userId = "01fe8f03-ab92-4616-a8ba-4cd9f5655112"; //req.auth.userId
      const { page, pageSize, rank, genre, keyword, status } = req.query;

      const result = await cardService.findManyAtMygallery({
        page,
        pageSize,
        rank,
        genre,
        keyword,
        status,
        userId,
      });

      return res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  },
  
  createCard: async (req, res, next) => {
    try {
      const userId = "01fe8f03-ab92-4616-a8ba-4cd9f5655112"; // 실제 프로젝트에서는 req.auth.userId 사용
      console.log('req.body::', req.body)
      const { title, rank, genre, price, totalQuantity, description } = req.body;
      const imagePath = req.file?.filename;

      if (!imagePath) {
        return res.status(400).json({ message: "이미지 파일이 필요합니다." });
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
