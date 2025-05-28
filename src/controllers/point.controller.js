import pointService from "../services/point.service.js";

const pointController = {
  addPoint: async (req, res, next) => {
    try {
      const userId = req.user.id;
      const { rewardPoints } = req.body;
      const updateUser = await pointService.addPoint(userId, rewardPoints);

      return res.status(200).json({ rewardPoints, updateUser});
    } catch (error) {
      next(error);
    }
  },
};

export default pointController;
