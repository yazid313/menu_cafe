const { Router } = require("express");
const {
  getFoodAll,
  getFoodAllById,
  createFood,
  deleteFoodById,
  updateFood,
} = require("../controllers/foodController.js");
const upload = require("../validators/imageValidation.js");
const {
  updateImageValidator,
  userIdValidator,
  foodIdValidator,
  deleteIdValidator,
  deleteImageValidator,
} = require("../validators/foodValidation.js");

const router = Router();

router.get("/", getFoodAll);
router.get("/:id", getFoodAllById);
router.post("/create", upload.single("photo"), userIdValidator, createFood);
router.put(
  "/update/:id",
  upload.single("photo"),
  foodIdValidator,
  userIdValidator,
  updateImageValidator,
  updateFood
);
router.delete(
  "/delete/:id",
  deleteIdValidator,
  deleteImageValidator,
  deleteFoodById
);

module.exports = router;
