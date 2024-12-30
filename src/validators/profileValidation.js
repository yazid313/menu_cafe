import { profileControl } from "../models/index.js";
import fs from "fs";

const profileIdValidator = async (req, res, next) => {
  try {
    // Gunakan Sequelize untuk mencari user berdasarkan user_id
    const respon = await profileControl.findOne({
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

const updateImageValidator = async (req, res, next) => {
  try {
    const respon = await profileControl.findOne({
      attributes: ["logo"],
      where: {
        id: req.params.id,
      },
    });

    if (req.file) {
      const result = respon.logo;
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
    const respon = await profileControl.findOne({
      attributes: ["logo"],
      where: {
        id: req.params.id,
      },
    });

    if (respon.logo) {
      const result = respon.logo;
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
    const respon = await profileControl.findByPk(id);

    if (!respon) {
      return res.status(401).json({ message: "id Tidak Terdaftar!" });
    }

    next();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export {
  profileIdValidator,
  updateImageValidator,
  deleteIdValidator,
  deleteImageValidator,
};
