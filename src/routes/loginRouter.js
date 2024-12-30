import express from "express";
import { body, validationResult, check } from "express-validator";
import { login } from "../controllers/loginController.js";

const router = express.Router();

// Daftarkan menu login
router.post("/", check("email", "Email tidak valid!").isEmail(), (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  } else {
    login(req, res);
  }
});

export default router;
