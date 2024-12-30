import { Router } from "express";
import {
  getDrinkAll,
  getDrinkAllById,
  createDrink,
  deleteDrinkById,
  updateDrink,
} from "../controllers/drinkController.js";
import upload from "../validators/imageValidation.js";
import {
  drinkIdValidator,
  updateImageValidator,
  deleteIdValidator,
  deleteImageValidator,
  outletIdValidator,
} from "../validators/drinkValidation.js";
import { verifikasi2 } from "../validators/loginValidation.js";

const router = Router();

router.get("/", getDrinkAll);
router.get("/:id", getDrinkAllById);
router.post(
  "/create",
  upload.single("photo"),
  verifikasi2,
  outletIdValidator,
  createDrink
);
router.put(
  "/update/:id",
  upload.single("photo"),
  verifikasi2,
  outletIdValidator,
  drinkIdValidator,
  updateImageValidator,
  updateDrink
);
router.delete(
  "/delete/:id",
  verifikasi2,
  deleteIdValidator,
  deleteImageValidator,
  deleteDrinkById
);

export default router;
