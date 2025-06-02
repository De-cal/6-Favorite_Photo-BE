import express from "express";
import cors from "cors";
import "dotenv/config";
import errorHandler from "./middlewares/errorHandler.js";
import router from "./routes/index.js";
import cookieParser from "cookie-parser";
import passport from "passport";

const PORT = process.env.PORT || 5050;

// 1. 서버 객체 생성
const app = express();

// 2. 미들웨어 등록
app.use(express.json()); // json 데이터를 parsing.
app.use(
  cors({
    origin:
      process.env.NODE_ENV === "production"
        ? process.env.FRONTEND_URL
        : "http://localhost:3000",
    credentials: true, // 쿠키 전송을 위해 필요
  }),
);
app.use(cookieParser());
// 구글 인증을 위한 패스포트 전략 등록하기
import "./config/passport.js";
app.use(passport.initialize());

app.use("/images", express.static("uploads"));

// 3. routes 등록
app.use(router);

// 4. 에러 핸들러 등록
app.use(errorHandler);

// 5. 서버 연결
app.listen(PORT, () => {
  console.log(`Server Started ${PORT}`);
});
