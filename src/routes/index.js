import express from "express";
import pointRouter from "./point.route.js";
import notificationRouter from "./notification.route.js";
import cardRouter from "./card.route.js";
import articleRouter from "./article.route.js";
import authRouter from "./auth.route.js";
import uploadRouter from "./upload.js";

const router = express.Router();

router.use("/auth", authRouter);
router.use("/points", pointRouter);
router.use("/notifications", notificationRouter);
router.use("/cards", cardRouter);
router.use("/articles", articleRouter);
router.use("/upload", uploadRouter);

export default router;
