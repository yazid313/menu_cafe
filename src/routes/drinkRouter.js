const { Router } = require("express");
const {
  getDrinkAll,
  getDrinkAllById,
  createDrink,
  deleteDrinkById,
  updateDrink,
} = require("../controllers/drinkController.js");
const upload = require("../validators/imageValidation.js");
const {
  drinkIdValidator,
  userIdValidator,
  updateImageValidator,
  deleteIdValidator,
  deleteImageValidator,
} = require("../validators/drinkValidation.js");

const router = Router();

router.get("/", getDrinkAll);
router.get("/:id", getDrinkAllById);
router.post("/create", upload.single("photo"), userIdValidator, createDrink);
router.put(
  "/update/:id",
  upload.single("photo"),
  drinkIdValidator,
  userIdValidator,
  updateImageValidator,
  updateDrink
);
router.delete(
  "/delete/:id",
  deleteIdValidator,
  deleteImageValidator,
  deleteDrinkById
);

module.exports = router;
