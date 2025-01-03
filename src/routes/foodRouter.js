import { Router } from "express";
import {
  getFoodAll,
  getFoodAllById,
  createFood,
  deleteFoodById,
  updateFood,
  getFoodAllByNamaOutlet,
} from "../controllers/foodController.js";
import upload from "../validators/imageValidation.js";
import {
  updateImageValidator,
  foodIdValidator,
  deleteIdValidator,
  deleteImageValidator,
} from "../validators/foodValidation.js";
import { verifikasi2 } from "../validators/loginValidation.js";
import { outletIdValidator } from "../validators/drinkValidation.js";

const router = Router();

router.get("/", getFoodAll);
router.get("/:id", getFoodAllById);
router.get("/byNamaOutlet/:nama_outlet", getFoodAllByNamaOutlet);
router.post(
  "/create",
  upload.single("photo"),
  verifikasi2,
  outletIdValidator,
  createFood
);
router.put(
  "/update/:id",
  upload.single("photo"),
  outletIdValidator,
  verifikasi2,
  foodIdValidator,
  updateImageValidator,
  updateFood
);
router.delete(
  "/delete/:id",
  verifikasi2,
  deleteIdValidator,
  deleteImageValidator,
  deleteFoodById
);

export default router;
