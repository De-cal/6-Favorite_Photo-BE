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

const googleLoginCallbackController = async (req, res, next) => {
  try {
    // req.user -> passport.js로부터 return 된 done(null, user)에서 넘어온 값
    if (!req.user) {
      console.log("No user found in request");
      return res
        .status(401)
        .json({ success: false, message: "구글 인증에 실패하였습니다." });
    }

    // 구글에서 성공적으로 사용자 받아옴, 서비스 호출하여 토큰발급 받기
    const { accessToken, refreshToken } = await authService.googleLogin(
      req.user,
    );
    console.log("Generated tokens:", { accessToken, refreshToken });

    // 발급된 토큰 클라이언트의 쿠키에 저장
    authUtils.setAuthCookies(res, { accessToken, refreshToken });

    // 프론트엔드의 성공 페이지로 리다이렉트
    console.log("Redirecting to:", process.env.CLIENT_GOOGLE_CALLBACK_PAGE_URL);
    res.redirect(process.env.CLIENT_GOOGLE_CALLBACK_PAGE_URL);
  } catch (error) {
    console.error("Google Login Callback Error:", error);
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
    // 클라이언트의 쿠키에서 리프레쉬토큰 가져옴
    const { refreshToken } = req.cookies;

    // 쿠키에 리프레쉬 토큰이 없는경우
    if (!refreshToken) {
      return res.status(401).json({
        success: false,
        message: "Refresh token이 존재하지 않습니다",
      });
    }

    // 현재 유저의 리프레쉬토큰이 유효하므로 서비스 호출하여 access, refresh token 둘다 발급받기
    const result = await authService.refreshTokenService(refreshToken);

    // 새로 받은 토큰들 쿠키에 설정
    authUtils.setAuthCookies(res, {
      accessToken: result.accessToken,
      refreshToken: result.refreshToken,
    });

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
  googleLoginCallbackController,
};
