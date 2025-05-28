import express from "express";
import authController from "../controllers/auth.controller.js";
import { validateRequest } from "../middlewares/validateRequest.js";
import { LoginRequestStruct } from "../structs/auth/loginRequest.struct.js";
import { SignupRequestStruct } from "../structs/auth/signupRequest.struct.js";

const authRouter = express.Router();

authRouter.post(
  "/signup",
  validateRequest(SignupRequestStruct),
  authController.signupController,
);
authRouter.post(
  "/login",
  validateRequest(LoginRequestStruct),
  authController.loginController,
);

export default authRouter;
