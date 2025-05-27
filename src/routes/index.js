import express from "express";
import pointRouter from "./point.route.js";
import notificationRouter from "./notification.route.js";
import cardRouter from "./card.route.js";
import articleRouter from "./article.route.js";

const router = express.Router();

router.use("/point", pointRouter);
router.use("/notification", notificationRouter);
router.use("/cards", cardRouter);
router.use("/articles", articleRouter);

export default router;
