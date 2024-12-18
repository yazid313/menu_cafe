const { Router } = require("express");
const {
  getUserAll,
  createUser,
  updateUser,
  deleteUserById,
} = require("../controllers/userController");
const {
  createUsernameValidator,
  createEmailValidator,
  userIdValidator,
  updateUsernameValidator,
  updateEmailValidator,
  deleteIdValidator,
} = require("../validators/userValidation");

const router = Router();

router.get("/", getUserAll);
router.get("/:id", getUserAll);
router.post(
  "/create",
  createUsernameValidator,
  createEmailValidator,
  createUser
);
router.patch(
  "/update/:id",
  userIdValidator,
  updateUsernameValidator,
  updateEmailValidator,
  updateUser
);
router.delete("/delete/:id", deleteIdValidator, deleteUserById);

module.exports = router;
