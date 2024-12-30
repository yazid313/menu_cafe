import { Router } from "express";
import {
  getSnackAll,
  getSnackAllById,
  createSnack,
  deleteSnackById,
  updateSnack,
} from "../controllers/snackController.js";
import upload from "../validators/imageValidation.js";
import {
  snackIdValidator,
  updateImageValidator,
  deleteIdValidator,
  deleteImageValidator,
} from "../validators/snackValidation.js";
import { verifikasi2 } from "../validators/loginValidation.js";
import { outletIdValidator } from "../validators/drinkValidation.js";

const router = Router();

router.get("/", getSnackAll);
router.get("/:id", getSnackAllById);
router.post(
  "/create",
  upload.single("photo"),
  verifikasi2,
  outletIdValidator,
  createSnack
);
router.put(
  "/update/:id",
  upload.single("photo"),
  outletIdValidator,
  verifikasi2,
  snackIdValidator,
  updateImageValidator,
  updateSnack
);
router.delete(
  "/delete/:id",
  verifikasi2,
  deleteIdValidator,
  deleteImageValidator,
  deleteSnackById
);

export default router;
