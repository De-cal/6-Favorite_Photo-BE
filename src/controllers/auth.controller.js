import authService from "../services/auth.service.js";
import authUtils from "../utils/auth.utils.js";
const signupController = async (req, res, next) => {
  try {
    const { email, nickname, password, passwordConfirmation } = req.body;

    const result = await authService.signup({
      email,
      nickname,
      password,
      passwordConfirmation,
    });

    // res 에 authService에서 리턴해준 result.accessToken & refreshToken 값을 넘겨줌으로서 클라이언트 쿠키에 토큰들을 저장
    authUtils.setAuthCookies(res, {
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

    const result = await authService.login({
      email,
      password,
    });

    authUtils.setAuthCookies(res, {
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
  authUtils.clearAuthCookies(res);
  res.status(200).json({ success: true });
};

const meController = async (req, res) => {
  const { id, email, nickname, pointAmount, createCount } = req.user;

  res.status(200).json({
    success: true,
    data: {
      id,
      email,
      nickname,
      pointAmount,
      createCount,
    },
  });
};

const refreshTokenController = async (req, res, next) => {
  try {
    const { refreshToken } = req.cookies;

    if (!refreshToken) {
      return res.status(401).json({
        success: false,
        message: "Refresh token이 존재하지 않습니다",
      });
    }

    const result = await authService.refreshTokenService(refreshToken);

    // 새 토큰을 쿠키에 다시 설정
    authUtils.setAuthCookies(res, {
      accessToken: result.accessToken,
      refreshToken: result.refreshToken,
    });
    console.log(result.accessToken);
    res.status(200).json({
      success: true,
      message: "Access token이 재발급되었습니다",
    });
  } catch (error) {
    next(error);
  }
};

export default {
  signupController,
  loginController,
  logoutController,
  meController,
  refreshTokenController,
};
