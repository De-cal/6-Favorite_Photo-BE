import express from "express";
import pointRouter from "./point.router.js";
import notificationRouter from "./notification.router.js";
import cardController from "../controllers/card.controller.js";
import articleController from "../controllers/article.controller.js";

const router = express.Router();

router.use("/point", pointRouter);
router.use("/notification", notificationRouter);
router.use("/cards", cardController);
router.use("/articles", articleController);

export default router;
