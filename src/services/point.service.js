import pointRepository from "../repositories/point.repository.js";

const pointService = {
  addPoint: async (userId, pointsToAdd) => {
    return pointRepository.addPoint(userId, pointsToAdd);
  },
};

export default pointService;
