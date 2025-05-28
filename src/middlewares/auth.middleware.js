import jwt from "jsonwebtoken";
import authRepository from "../repositories/auth.repository.js";

export const validateAccessToken = async (req, res, next) => {
  console.log("✅ validateAccessToken 미들웨어 실행됨"); //
  try {
    const token = req.cookies?.accessToken; // ✅ 쿠키에서 꺼냄

    if (!token) {
      throw new Error("엑세스 토큰이 존재하지 않습니다.");
    }

    try {
      const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
      const user = await authRepository.findById(decoded.userId);

      if (!user) {
        throw new Error("사용자를 찾지 못했습니다.");
      }

      req.user = user; // req.user로 컨트롤러에서 접근 가능
      next();
    } catch (error) {
      if (error.name === "TokenExpiredError") {
        throw new Error("엑세스 토큰이 만료되었습니다.");
      }
      throw new Error("유효하지 않은 엑세스 토큰입니다");
    }
  } catch (error) {
    next(error);
  }
};
