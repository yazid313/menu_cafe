import { Router } from "express";
import {
  getUserAll,
  createUser,
  updateUser,
  deleteUserById,
} from "../controllers/userController.js";
import {
  createUsernameValidator,
  createEmailValidator,
  userIdValidator,
  updateUsernameValidator,
  updateEmailValidator,
  deleteIdValidator,
} from "../validators/userValidation.js";

const router = Router();

router.get("/", getUserAll);
router.get("/:id", getUserAll);
router.post(
  "/create",
  createUsernameValidator,
  createEmailValidator,
  createUser
);
router.put(
  "/update/:id",
  userIdValidator,
  updateUsernameValidator,
  updateEmailValidator,
  updateUser
);
router.delete("/delete/:id", deleteIdValidator, deleteUserById);

export default router;
