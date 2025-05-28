import pointRepository from "../repositories/point.repository.js";

const pointService = {
  addPoint: async (userId, rewardPoints) => {
    return pointRepository.addPoint(userId, rewardPoints);
  },
};

export default pointService;
