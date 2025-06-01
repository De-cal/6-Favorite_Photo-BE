import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import authRepository from "../repositories/auth.repository.js";

// Google OAuth Strategy 설정
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
      scope: ["profile", "email"], // 구글에서 가져올 정보 범위
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        // profile 객체에서 Google ID와 이메일, 닉네임 정보 불러오기
        const googleId = profile.id;
        const email =
          profile.emails && profile.emails.length > 0
            ? profile.emails[0].value
            : null;
        const nickname = profile.displayName || profile.name.givenName;

        // googleId로 기존 사용자가 있는지 확인
        let user = await authRepository.findByGoogleId(googleId);

        if (user) {
          // 이미 존재하는 사용자라면 해당 사용자 정보 불러오기
          return done(null, user);
        } else {
          // googleId는 없지만, 이메일로 기존 사용자가 있는지 확인
          // 상황: 일반 로그인으로 가입한 사용자가 Google OAuth를 처음 사용할 경우를 대비)
          if (email) {
            user = await authRepository.findByEmail(email);
            if (user) {
              // 기존 이메일 사용자가 있다면 googleId를 업데이트하고 반환
              user = await prisma.user.update({
                where: { id: user.id },
                data: { googleId: googleId },
              });
              return done(null, user);
            }
          }
          // 신규 사용자인 경우 새로 유저데이터 생성
          user = await authRepository.createWithGoogle({
            email,
            nickname,
            googleId,
          });
          return done(null, user);
        }
      } catch (err) {
        console.error("Google OAuth 콜백 중 에러 발생:", err);
        return done(err, false);
      }
    },
  ),
);
