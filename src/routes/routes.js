import { Router } from "express";
import multer from "multer";
import { S3 } from "@aws-sdk/client-s3";

const routes = Router();

// La imagen estará en memoria
const upload = multer({
  dest: "temp/",
  limits: { fileSize: 3000000 },
  fileFilter: (req, file, cb) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif|bmp)$/)) {
      req.extensionFileError = "The file should be type jpg,jpeg,png,gif,bmp 🫡";
      return cb(null, false);
    }
    cb(null, true);
  },
});

const s3Client = new S3({ region: process.env.AWS_BUCKET_REGION });

routes.get("/health", (_, res) => {
  res.status(200).json({ message: "okidoki" });
});

routes.post(
  "/upload",
  upload.single("image"),
  (req, res) => {
    const dataFile = req.file;
    if (!dataFile || req.extensionFileError) {
      return res.status(400).json({ message: req.extensionFileError ?? "File not exists in request 😢" });
    } else if (!dataFile) {
    }

    res.status(200).json({ message: "File uploaded 😊", data: dataFile });
  },
  (err, _, res, next) => {
    if (err instanceof multer.MulterError) {
      res.status(400).json({ message: "The image should be of 3MB max size 📛" });
    }
  }
);

export default routes;
