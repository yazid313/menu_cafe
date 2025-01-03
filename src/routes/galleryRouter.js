import { Router } from "express";
import {
  getGalleryAll,
  getGalleryAllById,
  createGallery,
  updateGallery,
  deleteGalleryById,
  getGalleryAllByNamaOutlet,
} from "../controllers/galleryController.js";
import upload from "../validators/imageValidation.js";
import {
  galleryIdValidator,
  updateImageValidator,
  deleteIdValidator,
  deleteImageValidator,
} from "../validators/galleryValidation.js";
import { verifikasi2 } from "../validators/loginValidation.js";
import { outletIdValidator } from "../validators/drinkValidation.js";

const router = Router();

router.get("/", getGalleryAll);
router.get("/:id", getGalleryAllById);
router.get("/byNamaOutlet/:nama_outlet", getGalleryAllByNamaOutlet);
router.post(
  "/create",
  upload.single("photo"),
  verifikasi2,
  outletIdValidator,
  createGallery
);
router.put(
  "/update/:id",
  upload.single("photo"),
  verifikasi2,
  outletIdValidator,
  galleryIdValidator,
  updateImageValidator,
  updateGallery
);
router.delete(
  "/delete/:id",
  verifikasi2,
  deleteIdValidator,
  deleteImageValidator,
  deleteGalleryById
);

export default router;
