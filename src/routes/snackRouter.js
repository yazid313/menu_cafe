const { Router } = require("express");
const {
  getSnackAll,
  getSnackAllById,
  createSnack,
  deleteSnackById,
  updateSnack,
} = require("../controllers/snackController.js");
const upload = require("../validators/imageValidation.js");
const {
  snackIdValidator,
  userIdValidator,
  updateImageValidator,
  deleteIdValidator,
  deleteImageValidator,
} = require("../validators/snackValidation.js");

const router = Router();

router.get("/", getSnackAll);
router.get("/:id", getSnackAllById);
router.post("/create", upload.single("photo"), userIdValidator, createSnack);
router.put(
  "/update/:id",
  upload.single("photo"),
  snackIdValidator,
  userIdValidator,
  updateImageValidator,
  updateSnack
);
router.delete(
  "/delete/:id",
  deleteIdValidator,
  deleteImageValidator,
  deleteSnackById
);

module.exports = router;
