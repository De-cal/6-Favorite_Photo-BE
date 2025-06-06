import { is } from "superstruct";

export const validateRequest = (struct) => (req, res, next) => {
  try {
    if (!is(req.body, struct)) {
      const [error] = struct.validate(req.body);
      return res.status(400).json({
        message: "유효하지 않은 값이 입력되었습니다.",
        errors: error.details,
      });
    }
    next();
  } catch (error) {
    next(error);
  }
};
