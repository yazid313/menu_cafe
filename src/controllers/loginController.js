const { user, akses_token } = require("../models");
const jwt = require("jsonwebtoken");
const config = require("../db/config/secret.js");
const ip = require("ip");
const { compare } = require("../validators/passwordValidation.js");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Cari user berdasarkan email
    const userData = await user.findOne({
      where: {
        email: email,
      },
    });

    if (!userData) {
      return res.status(401).json({
        error: true,
        message: "Email atau password salah!",
      });
    }

    // membandingkan kata sandi
    const isPasswordValid = compare(password, userData.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        error: true,
        message: "Email atau password salah!",
      });
    }

    // Generate token JWT
    const token = jwt.sign({ id: userData.id }, config.secret, {
      expiresIn: 1440, // 24 jam
    });

    // Simpan akses token
    const accessToken = await akses_token.create({
      acces_token: token,
      expires: new Date(Date.now() + 1440 * 60 * 1000), // 24 jam dari sekarang
      ip_address: ip.address(),
      user_id: userData.id,
    });

    res.json({
      success: true,
      message: "Token JWT tergenerate!",
      acces_token: token,
      currUser: userData.id,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: true,
      message: "Terjadi kesalahan pada server.",
    });
  }
};

module.exports = { login };
