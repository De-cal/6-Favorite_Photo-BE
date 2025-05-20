import cardRepository from "../repositories/card.repository.js";

async function getById(id) {
  return await cardRepository.getById(id);
}

async function getByUser(userId) {
  return await cardRepository.getByUser(userId);
}

export default {
  getById,
  getByUser,
};
