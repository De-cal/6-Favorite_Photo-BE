import { object, string, define } from "superstruct";

const passwordSchema = define("password", (value) => {
  if (typeof value !== "string") return false;

  if (value.length < 8) {
    return "비밀번호는 8자 이상이어야 합니다.";
  }

  // 한글 포함 여부 검사
  const koreanRegex = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
  if (koreanRegex.test(value)) {
    return "비밀번호에 한글을 입력할 수 없습니다.";
  }
  // 영문, 숫자, 특수문자 포함 여부 검사
  const strongPasswordRegex =
    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
  if (!strongPasswordRegex.test(value)) {
    return "비밀번호는 영문, 숫자, 특수문자를 각각 최소 1개 이상 포함해야 합니다.";
  }

  return true;
});

// 닉네임 유효성 검사
const nicknameSchema = define("nickname", (value) => {
  if (typeof value !== "string") return false;

  if (value.trim().length < 2) {
    return "닉네임은 최소 2자 이상이어야 합니다.";
  }
  return true;
});

export const SignupRequestStruct = object({
  email: string(),
  nickname: nicknameSchema,
  password: passwordSchema,
  passwordConfirmation: string(),
});
