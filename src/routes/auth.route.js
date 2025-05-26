import express from "express";
import { signupController, loginController } from "../controllers/auth.controller.js";
import { validateRequest } from "../middlewares/validateRequest.js";
import { LoginRequestStruct, SignupRequestStruct } from "../structs/auth/index.js";

const router = express.Router();

router.post("/signup", validateRequest(SignupRequestStruct), signupController);

router.post("/login", validateRequest(LoginRequestStruct), loginController);

export default router;
