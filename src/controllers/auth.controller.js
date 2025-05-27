import authService from "../services/auth.service.js";

// 쿠키 설정 함수
const setAuthCookies = (res, { accessToken, refreshToken }) => {
  res.cookie("accessToken", accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 60 * 60 * 1000, // 1시간
  });

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7일
  });
};

const signupController = async (req, res, next) => {
  try {
    const { email, nickname, password, passwordConfirmation } = req.body;

    const result = await authService.signup({
      email,
      nickname,
      password,
      passwordConfirmation,
    });

    setAuthCookies(res, {
      accessToken: result.accessToken,
      refreshToken: result.refreshToken,
    });

    const { accessToken, refreshToken, ...userData } = result;

    res.status(201).json({
      success: true,
      data: userData,
    });
  } catch (error) {
    next(error);
  }
};

const loginController = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // authService.login 으로 변경
    const result = await authService.login({
      email,
      password,
    });

    setAuthCookies(res, {
      accessToken: result.accessToken,
      refreshToken: result.refreshToken,
    });

    const { accessToken, refreshToken, ...userData } = result;

    res.status(200).json({
      success: true,
      data: userData,
    });
  } catch (error) {
    next(error);
  }
};

const logoutController = async (req, res) => {
  res.clearCookie("accessToken");
  res.clearCookie("refreshToken");
  res.status(200).json({ success: true });
};

export default {
  signupController,
  loginController,
  logoutController,
};
