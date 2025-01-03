import { Router } from "express";
import upload from "../validators/imageValidation.js";
import { verifikasi2 } from "../validators/loginValidation.js";
import { outletIdValidator } from "../validators/drinkValidation.js";
import {
  createContact,
  deleteContactById,
  getContactAll,
  getContactAllById,
  getContactByNamaOutlet,
  updateContact,
} from "../controllers/contactController.js";
import {
  contactIdValidator,
  updateImageValidator,
  deleteIdValidator,
  deleteImageValidator,
} from "../validators/contactValidation.js";

const router = Router();

router.get("/", getContactAll);
router.get("/:id", getContactAllById);
router.get("/byNamaOutlet/:nama_outlet", getContactByNamaOutlet);
router.post(
  "/create",
  upload.single("logo"),
  verifikasi2,
  outletIdValidator,
  createContact
);
router.put(
  "/update/:id",
  upload.single("logo"),
  verifikasi2,
  outletIdValidator,
  contactIdValidator,
  updateImageValidator,
  updateContact
);
router.delete(
  "/delete/:id",
  verifikasi2,
  deleteIdValidator,
  deleteImageValidator,
  deleteContactById
);

export default router;
