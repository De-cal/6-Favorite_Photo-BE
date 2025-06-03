import jwt from "jsonwebtoken";
import authRepository from "../repositories/auth.repository.js";

export const validateAccessToken = async (req, res, next) => {
  try {
    const token = req.cookies?.accessToken; // ✅ 쿠키에서 꺼냄

    // 이 validateAccessToken 미들웨어에서 바로 응답 (토큰 없음과 만료는 정상적 비즈니스 로직임, 프론트에서 cookieFetch 요청시 이 백엔드에서 오는 401 응답을 기반으로 다시 refresh-token 엔드포인트로 요청을 보내야 함)
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "엑세스 토큰이 존재하지 않습니다.",
      });
    }

    try {
      const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
      const user = await authRepository.findById(decoded.userId);
      if (!user) {
        return res.status(401).json({
          success: false,
          message: "사용자를 찾지 못했습니다.",
        });
      }
      const { password, ...safeUser } = user;
      req.user = safeUser; // req.user로 컨트롤러에서 접근 가능
      next();
    } catch (error) {
      let message = "유효하지 않은 엑세스 토큰입니다";
      if (error.name === "TokenExpiredError") {
        message = "엑세스 토큰이 만료되었습니다.";
      }
      return res.status(401).json({
        success: false,
        message: message,
      });
    }
  } catch (error) {
    console.error(
      "미들웨어 validateAccessToken 검증과정에서 오류가 발생했습니다:",
      error,
    );
    next(error);
  }
};
