import { Router } from "express";
import upload from "../validators/imageValidation.js";
import { verifikasi2 } from "../validators/loginValidation.js";
import { outletIdValidator } from "../validators/drinkValidation.js";
import {
  createProfile,
  deleteProfileById,
  getProfileAll,
  getProfileAllById,
  getProfileAllByNamaOutlet,
  updateProfile,
} from "../controllers/profileController.js";
import {
  profileIdValidator,
  updateImageValidator,
  deleteIdValidator,
  deleteImageValidator,
} from "../validators/profileValidation.js";

const router = Router();

router.get("/", getProfileAll);
router.get("/:id", getProfileAllById);
router.get("/byNamaOutlet/:nama_outlet", getProfileAllByNamaOutlet);
router.post(
  "/create",
  upload.single("logo"),
  verifikasi2,
  outletIdValidator,
  createProfile
);
router.put(
  "/update/:id",
  upload.single("logo"),
  verifikasi2,
  outletIdValidator,
  profileIdValidator,
  updateImageValidator,
  updateProfile
);
router.delete(
  "/delete/:id",
  verifikasi2,
  deleteIdValidator,
  deleteImageValidator,
  deleteProfileById
);

export default router;
