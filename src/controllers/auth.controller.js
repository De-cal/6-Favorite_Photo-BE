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

const logoutController = async (res) => {
  authUtils.clearAuthCookies(res);
  res.status(200).json({ success: true });
};

export default {
  signupController,
  loginController,
  logoutController,
};
