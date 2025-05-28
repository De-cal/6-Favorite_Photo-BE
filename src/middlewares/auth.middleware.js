import jwt from "jsonwebtoken";
import authRepository from "../repositories/auth.repository.js";

export const validateAccessToken = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      throw new Error("No token provided");
    }

    const token = authHeader.split(" ")[1];

    try {
      const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
      const user = await authRepository.findById(decoded.userId);

      if (!user) {
        throw new Error("사용자를 찾지 못했습니다.");
      }

      req.user = user;
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

export const validateRefreshToken = async (req, res, next) => {
  try {
    const { refreshToken } = req.body;
    if (!refreshToken) {
      throw new Error("리프레쉬 토큰이 존재하지 않습니다.");
    }

    try {
      const decoded = jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
      );
      const user = await authRepository.findById(decoded.userId);

      if (!user) {
        throw new Error("사용자를 찾지 못했습니다.");
      }

      req.user = user;
      next();
    } catch (error) {
      if (error.name === "TokenExpiredError") {
        throw new Error("리프레쉬 토큰이 만료되었습니다.");
      }
      throw new Error("유효하지 않은 리프레쉬 토큰입니다.");
    }
  } catch (error) {
    next(error);
  }
};
