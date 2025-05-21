import express from "express";
import pointRouter from "./pointRouter";
import notificationRouter from "./notificationRouter";

const router = express.Router();

router.use("/point", pointRouter)
router.use("/notification", notificationRouter)

export default router;
