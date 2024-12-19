import jwt from "jsonwebtoken";
import config from "../db/config/secret.js";

const verifikasi = (req, res, next) => {
  const role = req.body.role;

  let tokenWithBearer = req.headers.authorization;
  if (tokenWithBearer) {
    const token = tokenWithBearer.split(" ")[1];
    // Verifikasi token
    jwt.verify(token, config.secret, (err, decode) => {
      if (err) {
        return res
          .status(401)
          .send({ auth: false, message: "Token tidak terdaftar!" });
      } else {
        if (role === 2) {
          req.auth = decode;
          next();
        } else {
          return res
            .status(401)
            .send({ auth: false, message: "Gagal mengotorisasi role Anda!" });
        }
      }
    });
  } else {
    return res
      .status(401)
      .send({ auth: false, message: "Token tidak tersedia!" });
  }
};

const verifikasi2 = (req, res, next) => {
  let tokenWithBearer = req.headers.authorization;
  if (tokenWithBearer) {
    const token = tokenWithBearer.split(" ")[1];
    // Verifikasi token
    jwt.verify(token, config.secret, (err, decode) => {
      if (err) {
        return res
          .status(401)
          .send({ auth: false, message: "Token tidak terdaftar!" });
      } else {
        if ((req.auth = decode)) {
          next();
        } else {
          return res
            .status(401)
            .send({ auth: false, message: "Gagal mengotorisasi role Anda!" });
        }
      }
    });
  } else {
    return res
      .status(401)
      .send({ auth: false, message: "Token tidak tersedia!" });
  }
};

export { verifikasi, verifikasi2 };
