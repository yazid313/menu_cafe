const { Router } = require("express");
const {
  getContactAll,
  getContactAllById,
  createContact,
  deleteContactById,
  updateContact,
} = require("../controllers/contactController.js");
const upload = require("../validators/imageValidation.js");
const {
  contactIdValidator,
  userIdValidator,
  updateImageValidator,
  deleteIdValidator,
  deleteImageValidator,
} = require("../validators/contactValidation.js");

const router = Router();

router.get("/", getContactAll);
router.get("/:id", getContactAllById);
router.post("/create", upload.single("icon"), userIdValidator, createContact);
router.put(
  "/update/:id",
  upload.single("icon"),
  contactIdValidator,
  userIdValidator,
  updateImageValidator,
  updateContact
);
router.delete(
  "/delete/:id",
  deleteIdValidator,
  deleteImageValidator,
  deleteContactById
);

module.exports = router;
