import express from "express";
import pointRouter from "./pointRouter";

const router = express.Router();

router.use("/point", pointRouter)

export default router;
