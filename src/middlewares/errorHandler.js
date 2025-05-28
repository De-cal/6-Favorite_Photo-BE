export default function errorHandler(err, req, res, next) {
  const status = Number(err.code) || 500;

  if (err.name === "UnauthorizedError") {
    res.status(401).send("invalid token...");
  }

  return res.status(status).json({
    path: req.path,
    method: req.method,
    message: err.message ?? "서버 오류입니다.",
    data: err.data ?? undefined,
    date: new Date(),
  });
}
