async function getByFilter(tx) {
  return await tx.cardArticle.findMany({});
}

async function getById(tx, id) {
  return await tx.cardArticle.findUnique({ where: { id } });
}

async function getByCard(tx, cardId) {
  return await tx.cardArticle.findFirst({
    where: { userPhotoCardId: cardId },
  });
}

async function create(tx, data) {
  return await tx.cardArticle.create({ data });
}

export default {
  getByFilter,
  getById,
  getByCard,
  create,
};
