import { Router } from "express";
import {
  getEventAll,
  getEventAllById,
  createEvent,
  updateEvent,
  deleteEventById,
  getEventAllByNamaOutlet,
} from "../controllers/eventController.js";
import upload from "../validators/imageValidation.js";
import {
  eventIdValidator,
  updateImageValidator,
  deleteIdValidator,
  deleteImageValidator,
} from "../validators/eventValidation.js";
import { outletIdValidator } from "../validators/drinkValidation.js";
import { verifikasi2 } from "../validators/loginValidation.js";

const router = Router();

router.get("/", getEventAll);
router.get("/:id", getEventAllById);
router.get("/byNamaOutlet/:nama_outlet", getEventAllByNamaOutlet);
router.post(
  "/create",
  upload.single("photo"),
  verifikasi2,
  outletIdValidator,
  createEvent
);
router.put(
  "/update/:id",
  upload.single("photo"),
  verifikasi2,
  outletIdValidator,
  eventIdValidator,
  updateImageValidator,
  updateEvent
);
router.delete(
  "/delete/:id",
  deleteIdValidator,
  deleteImageValidator,
  deleteEventById
);

export default router;
