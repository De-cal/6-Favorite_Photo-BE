import express from "express";
import cardService from "../services/card.service.js";
const cardController = express.Router();

cardController.get("/", async (req, res, next) => {
  try {
    const userId = "6cc2ca4b-d174-4220-b572-56d332da1f13"; //req.auth.userId; 변경해야함
    const photocards = await cardService.getByUser(userId);
    res.status(200).json(photocards);
  } catch (error) {
    next(error);
  }
});

cardController.get("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const photocard = await cardService.getById(id);
    res.status(200).json(photocard);
  } catch (error) {
    next(error);
  }
});

export default cardController;
