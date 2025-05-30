import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import authRepository from "../repositories/auth.repository.js";

const SALT_ROUNDS = 10;
const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET;
const ACCESS_TOKEN_EXPIRES_IN = "15m";
const REFRESH_TOKEN_EXPIRES_IN = "7d";
const generateTokens = (user) => {
  const accessToken = jwt.sign(
    {
      userId: user.id,
      email: user.email,
    },
    ACCESS_TOKEN_SECRET,
    { expiresIn: ACCESS_TOKEN_EXPIRES_IN },
  );

  const refreshToken = jwt.sign(
    {
      userId: user.id,
      email: user.email,
    },
    REFRESH_TOKEN_SECRET,
    { expiresIn: REFRESH_TOKEN_EXPIRES_IN },
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

const refreshTokenService = async (refreshToken) => {
  try {
    const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
    const user = await authRepository.findById(decoded.userId);

    if (!user) {
      throw new Error("존재하지 않는 사용자입니다");
    }

    const { accessToken, refreshToken: newRefreshToken } = generateTokens(user);

    return {
      accessToken,
      refreshToken: newRefreshToken,
    };
  } catch (error) {
    const err = new Error("Refresh token이 유효하지 않거나 만료되었습니다");
    err.status = 401;
    throw err;
  }
};

export default {
  signup,
  login,
  refreshTokenService,
};
