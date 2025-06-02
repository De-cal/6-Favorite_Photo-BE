import { object, string, define } from "superstruct";

const passwordSchema = define("password", (value) => {
  if (typeof value !== "string") return false;

  if (value.length < 8) {
    return "비밀번호는 8자 이상이어야 합니다.";
  }

  const koreanRegex = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
  if (koreanRegex.test(value)) {
    return "비밀번호에 한글을 입력할 수 없습니다.";
  }

  const strongPasswordRegex =
    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
  if (!strongPasswordRegex.test(value)) {
    return "비밀번호는 영문, 숫자, 특수문자를 각각 최소 1개 이상 포함해야 합니다.";
  }

  return true;
});

export const LoginRequestStruct = object({
  email: string(),
  password: passwordSchema,
});
