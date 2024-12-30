import { outletControl, tokenControl } from "../models/index.js";
import jwt from "jsonwebtoken";
import config from "../db/config/secret.js";
import ip from "ip";
import { compare } from "../validators/passwordValidation.js";

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Cari user berdasarkan email
    const outletData = await outletControl.findOne({
      where: {
        email: email,
      },
    });

    if (!outletData) {
      return res.status(401).json({
        error: true,
        message: "Email atau password salah!",
      });
    }

    // Membandingkan kata sandi
    const isPasswordValid = compare(password, outletData.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        error: true,
        message: "Email atau password salah!",
      });
    }

    // Generate token JWT
    const token = jwt.sign({ id: outletData.id }, config.secret, {
      expiresIn: 1440, // 24 jam
    });

    // Simpan akses token
    const accessToken = await tokenControl.create({
      acces_token: token,
      expires: new Date(Date.now() + 1440 * 60 * 1000), // 24 jam dari sekarang
      ip_address: ip.address(),
      outlet_id: outletData.id,
    });

    res.json({
      success: true,
      message: "Token JWT tergenerate!",
      acces_token: token,
      currUser: outletData.id,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: true,
      message: "Terjadi kesalahan pada server.",
    });
  }
};

export { login };
