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

// 로그아웃 -> 쿠키삭제
authRouter.post("/logout", authController.logoutController);

// 현재 로그인한 유저 정보확인 -> validateAccessToken 미들웨어 거쳐서 토큰 유효성 검사 이후 컨트롤러로 넘어감
authRouter.get("/me", validateAccessToken, authController.meController);

// 리프레시 토큰으로 새로운 엑세스 토큰 발급
authRouter.post("/refresh-token", authController.refreshTokenController);

export default authRouter;
