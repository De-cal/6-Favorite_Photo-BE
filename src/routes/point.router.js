import express from "express";
import pointController from "../controllers/point.controller.js";

const pointRouter = express.Router();

// 포인트 추가.
pointRouter.post("/", auth.verifyAccessToken, pointController.addPoint);

export default pointRouter;
