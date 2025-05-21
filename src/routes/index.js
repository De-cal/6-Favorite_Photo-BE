import express from "express";
import pointRouter from "./pointRouter.js";
import notificationRouter from "./notificationRouter.js";
import cardController from "../controllers/card.controller.js";
import articleController from "../controllers/article.controller.js";

const router = express.Router();

router.use("/point", pointRouter);
router.use("/notification", notificationRouter);
router.use("/cards", cardController);
router.use("/articles", articleController);

export default router;
