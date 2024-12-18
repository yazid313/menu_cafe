const { Router } = require("express");
const {
  getRekomendationAll,
  getRekomendationAllById,
  createRekomendation,
  deleteRekomendationById,
  updateRekomendation,
} = require("../controllers/rekomendationController.js");
const upload = require("../validators/imageValidation.js");
const {
  rekomendationIdValidator,
  userIdValidator,
  updateImageValidator,
  deleteIdValidator,
  deleteImageValidator,
} = require("../validators/rekomendationValidation.js");

const router = Router();

router.get("/", getRekomendationAll);
router.get("/:id", getRekomendationAllById);
router.post(
  "/create",
  upload.single("photo"),
  userIdValidator,
  createRekomendation
);
router.put(
  "/update/:id",
  upload.single("photo"),
  rekomendationIdValidator,
  userIdValidator,
  updateImageValidator,
  updateRekomendation
);
router.delete(
  "/delete/:id",
  deleteIdValidator,
  deleteImageValidator,
  deleteRekomendationById
);

module.exports = router;
