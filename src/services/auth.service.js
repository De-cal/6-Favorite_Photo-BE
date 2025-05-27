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
    throw new Error("비밀번호가 일치하지 않습니다.");
  }

  const existingUserByEmail = await authRepository.findByEmail(email);
  if (existingUserByEmail) {
    throw new Error("Email already exists");
  }

  const existingUserByNickname = await authRepository.findByNickname(nickname);
  if (existingUserByNickname) {
    throw new Error("Nickname already exists");
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
    throw new Error("올바르지 않은 이메일이거나 패스워드입니다.");
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error("비밀번호가 일치하지 않습니다.");
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
