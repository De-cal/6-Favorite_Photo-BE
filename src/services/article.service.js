import articleRepository from "../repositories/article.repository.js";

async function getByFilter() {
  return await articleRepository.getByFilter();
}

async function getById(id) {
  return await articleRepository.getById(id);
}

async function postArticle() {}

export default {
  getByFilter,
  getById,
  postArticle,
};
