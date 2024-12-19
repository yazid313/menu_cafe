import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";

// Resolusi __dirname di ES Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Konfigurasi penyimpanan file
const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../..", "images"));
  },
  filename: (req, file, cb) => {
    cb(null, new Date().getTime() + "_" + file.originalname);
  },
});

// Filter file untuk hanya menerima file gambar
const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

// Inisialisasi multer
const upload = multer({
  storage: fileStorage,
  fileFilter: fileFilter,
});

export default upload;
