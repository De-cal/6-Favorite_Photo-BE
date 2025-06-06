// src/utils/auth.utils.js

const isProduction = process.env.NODE_ENV === "production";

const setAuthCookies = (res, { accessToken, refreshToken }) => {
  // 공통 쿠키 옵션 정의
  const cookieOptions = {
    httpOnly: true,
    // 프로덕션 환경에서만 secure: true (HTTPS 필수)
    secure: isProduction,
    // SameSite 속성:
    // 프로덕션: "None" (크로스-사이트 요청 허용, 반드시 secure: true와 함께 사용)
    // 개발: "Lax" (같은 사이트 또는 안전한 Top-level Navigation 시 허용)
    sameSite: isProduction ? "None" : "Lax",
    path: "/", // 쿠키가 웹사이트 전체 경로에서 유효하도록 설정
  };

  // Access Token 설정
  res.cookie("accessToken", accessToken, {
    ...cookieOptions,
    maxAge: 15 * 60 * 1000, // 15분
  });

  // Refresh Token 설정
  res.cookie("refreshToken", refreshToken, {
    ...cookieOptions,
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7일
  });
};

const clearAuthCookies = (res) => {
  const cookieClearOptions = {
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction ? "None" : "Lax",
    path: "/",

    maxAge: 0, // 쿠키 즉시 만료
    expires: new Date(0), // 만료 날짜를 과거로 설정
  };

  res.clearCookie("accessToken", cookieClearOptions);
  res.clearCookie("refreshToken", cookieClearOptions);
};

export default { setAuthCookies, clearAuthCookies };
