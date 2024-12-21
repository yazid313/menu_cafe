import { Router } from "express";
import {
  getGalleryAll,
  getGalleryAllById,
  createGallery,
  updateGallery,
  deleteGalleryById,
} from "../controllers/galleryController.js";
import upload from "../validators/imageValidation.js";
import {
  galleryIdValidator,
  updateImageValidator,
  deleteIdValidator,
  deleteImageValidator,
} from "../validators/galleryValidation.js";
import { verifikasi2 } from "../validators/loginValidation.js";

const router = Router();

router.get("/", getGalleryAll);
router.get("/:id", getGalleryAllById);
router.post("/create", upload.single("photo"), verifikasi2, createGallery);
router.put(
  "/update/:id",
  upload.single("photo"),
  verifikasi2,
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
