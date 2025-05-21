import pointService from "../services/pointService";


const pointController = {
  addPoint: async (req, res, next) => {
    try {
      const { userId } = req.auth;
      const { pointsToAdd } = req.body;
      const updateUser = await pointService.addPoint(userId, pointsToAdd);
      
      return res.status(200).json(updateUser);
    } catch (error) {
      next(error);
    }
 },
}

export default pointController;