import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { authRepository } from "../repositories/auth.repository.js";

const SALT_ROUNDS = 10; // 비밀번호 해싱할때 쓸 상수값
const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET;

// 토큰생성
const generateTokens = (user) => {
  const accessToken = jwt.sign(
    {
      userId: user.getId(),
      email: user.getEmail(),
    },
    ACCESS_TOKEN_SECRET,
    { expiresIn: "1h" },
  );

  const refreshToken = jwt.sign(
    {
      userId: user.getId(),
      email: user.getEmail(),
    },
    REFRESH_TOKEN_SECRET,
    { expiresIn: "7d" },
  );

  return { accessToken, refreshToken };
};

// 회원가입
export const signup = async ({ email, nickname, password, passwordConfirmation }) => {
  // 패스워드와 패스워드 재확인 필드 일치 검사
  if (password !== passwordConfirmation) {
    throw new Error("비밀번호가 일치하지 않습니다.");
  }

  // 이메일이 중복여부 검사
  const existingUserByEmail = await authRepository.findByEmail(email);
  if (existingUserByEmail) {
    throw new Error("Email already exists");
  }

  // 닉네임 중복여부 검사
  const existingUserByNickname = await authRepository.findByNickname(nickname);
  if (existingUserByNickname) {
    throw new Error("Nickname already exists");
  }

  // 유저에게 받은 비밀번호는 bcrypt 사용하여 해쉬값으로 저장, 10은 SALT 값
  const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

  // 유저 데이터 생성
  const user = await authRepository.create({
    email,
    nickname,
    password: hashedPassword,
  });

  // 토큰 생성
  const { accessToken, refreshToken } = generateTokens(user);

  return {
    user: {
      id: user.getId(),
      email: user.getEmail(),
      nickname: user.getNickname(),
    },
    accessToken,
    refreshToken,
  };
};

// 로그인
export const login = async ({ email, password }) => {
  // 이메일 입력값으로 유저 찾음
  const user = await authRepository.findByEmail(email);
  if (!user) {
    throw new Error("올바르지 않은 이메일이거나 패스워드입니다.");
  }

  // 비밀번호 확인
  const isPasswordValid = await bcrypt.compare(password, user.getPassword());
  if (!isPasswordValid) {
    throw new Error("비밀번호가 일치하지 않습니다.");
  }

  // 토큰 생성
  const { accessToken, refreshToken } = generateTokens(user);

  return {
    user: {
      id: user.getId(),
      email: user.getEmail(),
      nickname: user.getNickname(),
    },
    accessToken,
    refreshToken,
  };
};
