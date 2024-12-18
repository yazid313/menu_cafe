const { food, user } = require("../models");
const fs = require("fs");

const foodIdValidator = async (req, res, next) => {
  try {
    // Gunakan Sequelize untuk mencari user berdasarkan user_id
    const respon = await food.findOne({
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

const userIdValidator = async (req, res, next) => {
  try {
    const respon = await user.findOne({
      where: {
        id: req.body.user_id,
      },
    });
    if (!respon) {
      const result = req.file.filename;
      if (fs.existsSync(`images/${result}`)) {
        fs.unlinkSync(`images/${result}`);
      }
      return res.status(401).json({ massage: "user_id Tidak Terdaftar!" });
    }
    next();
  } catch (err) {
    res.status(400).json({ message: err.message });
    console.log(err);
  }
};

const updateImageValidator = async (req, res, next) => {
  try {
    const respon = await food.findOne({
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
    const respon = await food.findOne({
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
    const respon = await food.findByPk(id);

    if (!respon) {
      return res.status(401).json({ message: "id Tidak Terdaftar!" });
    }

    next();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  foodIdValidator,
  userIdValidator,
  updateImageValidator,
  deleteIdValidator,
  deleteImageValidator,
};
