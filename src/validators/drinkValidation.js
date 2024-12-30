import { drinkControl, outletControl } from "../models/index.js";
import fs from "fs";

const drinkIdValidator = async (req, res, next) => {
  try {
    // Gunakan Sequelize untuk mencari user berdasarkan user_id
    const respon = await drinkControl.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!respon) {
      const result = req.file.filename;
      if (fs.existsSync(`images/${result}`)) {
        fs.unlinkSync(`images/${result}`);
      }
      return res.status(401).json({ message: "id Tidak Terdaftar!" });
    }

    next();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const outletIdValidator = async (req, res, next) => {
  try {
    const respon = await outletControl.findOne({
      where: {
        id: req.body.outlet_id,
      },
    });
    if (!respon) {
      const result = req.file.filename;
      if (fs.existsSync(`images/${result}`)) {
        fs.unlinkSync(`images/${result}`);
      }
      return res.status(401).json({ massage: "outlet_id Tidak Terdaftar!" });
    }
    next();
  } catch (err) {
    res.status(400).json({ message: err.message });
    console.log(err);
  }
};

const updateImageValidator = async (req, res, next) => {
  try {
    const respon = await drinkControl.findOne({
      attributes: ["photo"],
      where: {
        id: req.params.id,
      },
    });

    if (req.file) {
      const result = respon.photo;
      if (fs.existsSync(`images/${result}`)) {
        fs.unlinkSync(`images/${result}`);
      }
    }
    next();
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteImageValidator = async (req, res, next) => {
  try {
    const respon = await drinkControl.findOne({
      attributes: ["photo"],
      where: {
        id: req.params.id,
      },
    });

    if (respon.photo) {
      const result = respon.photo;
      if (fs.existsSync(`images/${result}`)) {
        fs.unlinkSync(`images/${result}`);
      }
    }
    next();
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteIdValidator = async (req, res, next) => {
  const id = req.params.id;

  try {
    // Gunakan Sequelize untuk mencari user berdasarkan user_id
    const respon = await drinkControl.findByPk(id);

    if (!respon) {
      return res.status(401).json({ message: "id Tidak Terdaftar!" });
    }

    next();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export {
  outletIdValidator,
  drinkIdValidator,
  updateImageValidator,
  deleteIdValidator,
  deleteImageValidator,
};
