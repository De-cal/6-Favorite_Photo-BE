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
      const userId = "01fe8f03-ab92-4616-a8ba-4cd9f5655112"; //req.auth.userId
      const { page, pageSize, rank, genre, keyword, status, includeZero } =
        req.query;

      const result = await cardService.findManyAtMygallery({
        page,
        pageSize,
        rank,
        genre,
        keyword,
        status,
        userId,
        includeZero: includeZero === "false" ? false : true,
      });

      return res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  },
};

export default cardController;
