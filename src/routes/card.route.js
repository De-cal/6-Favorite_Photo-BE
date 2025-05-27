import express from "express";
import cardController from "../controllers/card.controller.js";

const cardRouter = express.Router();

cardRouter.get("/:id", cardController.getCardById);

cardRouter.get("/", cardController.getMyGallery);

export default cardRouter;
