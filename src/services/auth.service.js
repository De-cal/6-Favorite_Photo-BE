import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import authRepository from "../repositories/auth.repository.js";

const SALT_ROUNDS = 10;
const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET;

const generateTokens = (user) => {
  const accessToken = jwt.sign(
    {
      userId: user.id,
      email: user.email,
    },
    ACCESS_TOKEN_SECRET,
    { expiresIn: "1h" },
  );

  const refreshToken = jwt.sign(
    {
      userId: user.id,
      email: user.email,
    },
    REFRESH_TOKEN_SECRET,
    { expiresIn: "7d" },
  );

  return { accessToken, refreshToken };
};

const signup = async ({ email, nickname, password, passwordConfirmation }) => {
  if (password !== passwordConfirmation) {
    const error = new Error("비밀번호가 일치하지 않습니다.");
    error.code = 400;
    throw error;
  }

  const existingUserByEmail = await authRepository.findByEmail(email);
  if (existingUserByEmail) {
    const error = new Error("이미 존재하는 이메일 입니다.");
    error.code = 409; 
    throw error;
  }

  const existingUserByNickname = await authRepository.findByNickname(nickname);
  if (existingUserByNickname) {
    const error = new Error("이미 존재하는 닉네임 입니다.");
    error.code = 409; 
    throw error;
  }

  const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

  const user = await authRepository.create({
    email,
    nickname,
    password: hashedPassword,
  });

  const { accessToken, refreshToken } = generateTokens(user);

  return {
    user: {
      id: user.id,
      email: user.email,
      nickname: user.nickname,
    },
    accessToken,
    refreshToken,
  };
};

const login = async ({ email, password }) => {
  const user = await authRepository.findByEmail(email);
  if (!user) {
    const error = new Error("올바르지 않은 이메일이거나 패스워드입니다.");
    error.code = 401;
    throw error;
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    const error = new Error("비밀번호가 일치하지 않습니다.");
    error.code = 401;
    throw error;
  }

  const { accessToken, refreshToken } = generateTokens(user);

  return {
    user: {
      id: user.id,
      email: user.email,
      nickname: user.nickname,
    },
    accessToken,
    refreshToken,
  };
};

export default {
  signup,
  login,
};
