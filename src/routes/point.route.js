import express from "express";
import pointController from "../controllers/point.controller.js";
import { validateAccessToken } from "../middlewares/auth.middleware.js";

const pointRouter = express.Router();

// 포인트 추가.
pointRouter.post("/", validateAccessToken, pointController.addPoint);

export default pointRouter;
