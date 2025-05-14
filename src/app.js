import express from "express";
import cors from "cors";
import "dotenv/config";
import errorHandler from "./middlewares/errorHandler.js";
import router from "./routes/index.js";
import cookieParser from "cookie-parser";

const PORT = process.env.PORT || 3000;

// 1. 서버 객체 생성
const app = express();

// 2. 미들웨어 등록
app.use(express.json()); // json 데이터를 parsing.
app.use(cors());
app.use(cookieParser());
app.use("/images", express.static("uploads"));

// 3. routes 등록
app.use(router);

// 4. 에러 핸들러 등록
app.use(errorHandler);

// 5. 서버 연결
app.listen(PORT, () => {
  console.log(`Server Started ${PORT}`);
});
