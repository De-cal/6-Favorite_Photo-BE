import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";

// ESM 환경에서 __dirname 대체
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// multer 설정
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../uploads"));
  },
  filename: function (req, file, cb) {
    cb(
      null,
      `https://favorite-photo-server.onrender.com/uploads/${file.originalname}`,
    );
  },
});

const upload = multer({ storage });

export default upload;
