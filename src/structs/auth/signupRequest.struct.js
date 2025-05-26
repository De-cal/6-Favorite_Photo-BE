import { object, string } from "superstruct";

export const SignupRequestStruct = object({
  email: string(),
  nickname: string(),
  password: string(),
  passwordConfirmation: string(),
});
