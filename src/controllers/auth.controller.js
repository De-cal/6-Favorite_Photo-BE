import { signup, login } from "../services/auth.service.js";

const setAuthCookies = (res, { accessToken, refreshToken }) => {
  // response 쿠키에 access token 설정
  res.cookie("accessToken", accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", //프로덕션이 아닌 development 환경일시 secure 설정 false로 정함
    sameSite: "strict",
    maxAge: 60 * 60 * 1000, // 1시간
  });

  // response  쿠키에 refresh token 설정
  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7일
  });
};

export const signupController = async (req, res, next) => {
  try {
    const { email, nickname, password, passwordConfirmation } = req.body;

    const result = await signup({
      email,
      nickname,
      password,
      passwordConfirmation,
    });

    setAuthCookies(res, {
      accessToken: result.accessToken,
      refreshToken: result.refreshToken,
    });

    // 결과값으로부터 토큰값만 제외하고 response에 보내도록 파싱
    const { accessToken, refreshToken, ...userData } = result;

    res.status(201).json({
      success: true,
      data: userData,
    });
  } catch (error) {
    next(error);
  }
};

export const loginController = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const result = await login({
      email,
      password,
    });

    setAuthCookies(res, {
      accessToken: result.accessToken,
      refreshToken: result.refreshToken,
    });

    // 결과값으로부터 토큰값만 제외하고 response에 보내도록 파싱
    const { accessToken, refreshToken, ...userData } = result;

    res.status(200).json({
      success: true,
      data: userData,
    });
  } catch (error) {
    next(error);
  }
};

export const logoutController = async (req, res) => {
  res.clearCookie("accessToken");
  res.clearCookie("refreshToken");
  res.status(200).json({ success: true });
};
