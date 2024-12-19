import { Router } from "express";
import {
  getRekomendationAll,
  getRekomendationAllById,
  createRekomendation,
  deleteRekomendationById,
  updateRekomendation,
} from "../controllers/rekomendationController.js";
import upload from "../validators/imageValidation.js";
import {
  rekomendationIdValidator,
  updateImageValidator,
  deleteIdValidator,
  deleteImageValidator,
} from "../validators/rekomendationValidation.js";
import { verifikasi2 } from "../validators/loginValidation.js";

const router = Router();

router.get("/", getRekomendationAll);
router.get("/:id", getRekomendationAllById);
router.post(
  "/create",
  upload.single("photo"),
  verifikasi2,
  createRekomendation
);
router.put(
  "/update/:id",
  upload.single("photo"),
  verifikasi2,
  rekomendationIdValidator,
  updateImageValidator,
  updateRekomendation
);
router.delete(
  "/delete/:id",
  verifikasi2,
  deleteIdValidator,
  deleteImageValidator,
  deleteRekomendationById
);

export default router;
