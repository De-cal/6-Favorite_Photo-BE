import express from "express";
import cardController from "../controllers/card.controller.js";
import articleController from "../controllers/article.controller.js";

const router = express.Router();

router.use("/cards", cardController);
router.use("/articles", articleController);

export default router;
//수정용
