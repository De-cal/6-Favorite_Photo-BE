import { is } from "superstruct";

export function validateRequest(struct) {
  return function (req, res, next) {
    try {
      if (!is(req.body, struct)) {
        const [error] = struct.validate(req.body);
        return res
          .status(400)
          .json({
            message: "유효하지 않은 값이 입력되었습니다.",
            errors: error.details,
          });
      }
      next(); // struct 에 의한 validation 통과시 그다음 req.body 내용은 controller로 토스되어 처리됨
    } catch (error) {
      next(error);
    }
  };
}
