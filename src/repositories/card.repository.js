async function getById(tx, id) {
  return await tx.userPhotoCard.findUnique({ where: { id } });
}

async function getByUser(tx, userId) {
  return await tx.userPhotoCard.findMany({
    where: { userId },
  });
}

async function decreaseCard(tx, id, quantity) {
  return await tx.userPhotoCard.update({
    where: { id },
    data: { quantity: { decrement: quantity } },
  });
}

async function create(tx, data) {
  return await tx.userPhotoCard.create({ data });
}
export default {
  getById,
  getByUser,
  decreaseCard,
  create,
};
