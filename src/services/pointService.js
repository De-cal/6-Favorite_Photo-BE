import pointRepository from "../repositories/pointRepository";


const pointService = {
  addPoint: async (userId, pointsToAdd) => {
    return pointRepository.addPoint(userId, pointsToAdd)  
  }  
};

export default pointService;