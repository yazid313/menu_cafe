const jwt = require("jsonwebtoken");
const config = require("../db/config/secret.js");
const fs = require("fs");

const verifikasi = (req, res, next) => {
  const role = req.body.role;

  let tokenWithBearer = req.headers.authorization;
  if (tokenWithBearer) {
    let token = tokenWithBearer.split(" ")[1];
    //verifikasi
    jwt.verify(token, config.secret, function (err, decode) {
      if (err) {
        return res
          .status(401)
          .send({ auth: false, massage: "Token tidak terdaftar!" });
      } else {
        // console.log(decode.rows[0].role);
        if (role == 2) {
          req.auth = decode;
          next();
        } else {
          return res
            .status(401)
            .send({ auth: false, massage: "gagal mengotorisasi role anda!" });
        }
      }
    });
  } else {
    return res
      .status(401)
      .send({ auth: false, massage: "Token tidak tersedia!" });
  }
};

const verifikasi2 = (req, res, next) => {
  let tokenWithBearer = req.headers.authorization;
  if (tokenWithBearer) {
    let token = tokenWithBearer.split(" ")[1];
    //verifikasi
    jwt.verify(token, config.secret, function (err, decode) {
      if (err) {
        return res
          .status(401)
          .send({ auth: false, massage: "Token tidak terdaftar!" });
      } else {
        // console.log(decode.rows[0].role);
        if ((req.auth = decode)) {
          next();
        } else {
          return res
            .status(401)
            .send({ auth: false, massage: "gagal mengotorisasi role anda!" });
        }
      }
    });
  } else {
    return res
      .status(401)
      .send({ auth: false, massage: "Token tidak tersedia!" });
  }
};

module.exports = { verifikasi, verifikasi2 };
