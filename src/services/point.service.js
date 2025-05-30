import pointRepository from "../repositories/point.repository.js";

const addPoint = async (userId, rewardPoints) => {
  return pointRepository.addPoint(userId, rewardPoints);
};

export default { addPoint };
