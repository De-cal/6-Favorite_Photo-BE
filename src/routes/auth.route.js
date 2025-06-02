import express from "express";
import authController from "../controllers/auth.controller.js";
import { validateRequest } from "../middlewares/validateRequest.js";
import { LoginRequestStruct } from "../structs/auth/loginRequest.struct.js";
import { SignupRequestStruct } from "../structs/auth/signupRequest.struct.js";
import { validateAccessToken } from "../middlewares/auth.middleware.js";

const authRouter = express.Router();

// 로그인 회원가입
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

// 구글 인증
authRouter.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    session: false,
  }),
);

// 구글 인증 성공시 리다이렉트
authRouter.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login",
    session: false,
  }),
  authController.googleLoginCallbackController, // 인증 성공 시 컨트롤러 호출
);

// 로그아웃 -> 쿠키삭제
authRouter.post(
  "/logout",
  validateAccessToken,
  authController.logoutController,
);

// 현재 로그인한 유저 정보확인 -> validateAccessToken 미들웨어 거쳐서 토큰 유효성 검사 이후 컨트롤러로 넘어감
authRouter.get("/me", validateAccessToken, authController.meController);

// 리프레시 토큰으로 새로운 엑세스 토큰 발급
authRouter.post("/refresh-token", authController.refreshTokenController);

export default authRouter;
