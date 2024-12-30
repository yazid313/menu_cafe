import { Router } from "express";
import {
  getOutletAll,
  getOutletAllById,
  createOutlet,
  updateOutlet,
  deleteOutletById,
} from "../controllers/outletController.js";
import {
  createNamaOutletValidator,
  createEmailValidator,
  outletIdValidator,
  updateNamaOutletValidator,
  updateEmailValidator,
  deleteIdValidator,
} from "../validators/outletValidation.js";

const router = Router();

router.get("/", getOutletAll);
router.get("/:id", getOutletAllById);
router.post(
  "/create",
  createNamaOutletValidator,
  createEmailValidator,
  createOutlet
);
router.put(
  "/update/:id",
  outletIdValidator,
  updateNamaOutletValidator,
  updateEmailValidator,
  updateOutlet
);
router.delete("/delete/:id", deleteIdValidator, deleteOutletById);

export default router;
