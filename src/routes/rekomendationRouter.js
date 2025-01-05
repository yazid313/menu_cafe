import { Router } from "express";

import upload from "../validators/imageValidation.js";
import {
  getRekomendationAll,
  getRekomendationAllById,
  getRekomendationAllByNamaOutlet,
  createRekomendation,
  updateRekomendation,
  deleteRekomendationById,
} from "../controllers/rekomendationController.js";
import { outletIdValidator } from "../validators/drinkValidation.js";
import { verifikasi2 } from "../validators/loginValidation.js";
import {
  deleteIdValidator,
  deleteImageValidator,
  rekomendationIdValidator,
  updateImageValidator,
} from "../validators/rekomendationValidation.js";

const router = Router();

router.get("/", getRekomendationAll);
router.get("/:id", getRekomendationAllById);
router.get("/byNamaOutlet/:nama_outlet", getRekomendationAllByNamaOutlet);
router.post(
  "/create",
  upload.single("photo"),
  verifikasi2,
  outletIdValidator,
  createRekomendation
);
router.put(
  "/update/:id",
  upload.single("photo"),
  verifikasi2,
  outletIdValidator,
  rekomendationIdValidator,
  updateImageValidator,
  updateRekomendation
);
router.delete(
  "/delete/:id",
  deleteIdValidator,
  deleteImageValidator,
  deleteRekomendationById
);

export default router;
