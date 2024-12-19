import { Router } from "express";
import {
  getFoodAll,
  getFoodAllById,
  createFood,
  deleteFoodById,
  updateFood,
} from "../controllers/foodController.js";
import upload from "../validators/imageValidation.js";
import {
  updateImageValidator,
  foodIdValidator,
  deleteIdValidator,
  deleteImageValidator,
} from "../validators/foodValidation.js";
import { verifikasi2 } from "../validators/loginValidation.js";

const router = Router();

router.get("/", getFoodAll);
router.get("/:id", getFoodAllById);
router.post("/create", upload.single("photo"), verifikasi2, createFood);
router.put(
  "/update/:id",
  upload.single("photo"),
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
