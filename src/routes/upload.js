import express from 'express';
import upload from '../middlewares/upload.js';

const router = express.Router();

router.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) return res.status(400).json({ error: '파일이 없습니다' });

  res.json({
    filename: req.file.filename,
    originalname: req.file.originalname,
    path: req.file.path,
    url: `/uploads/${req.file.filename}`, // 정적 경로 제공 시 사용
  });
});

export default router;
