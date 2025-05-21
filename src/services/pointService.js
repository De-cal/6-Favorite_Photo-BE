import pointRepository from "../repositories/pointRepository.js";

const pointService = {
  addPoint: async (userId, pointsToAdd) => {
    return pointRepository.addPoint(userId, pointsToAdd);
  },
};

export default pointService;
