const { snack } = require("../models");
const fs = require("fs");

const getSnackAll = async (req, res) => {
  try {
    const respon = await snack.findAll();
    res.status(200).json(respon);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
const getSnackAllById = async (req, res) => {
  try {
    const respon = await snack.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!respon) {
      return res.status(401).json({ massage: "id Tidak Terdaftar!" });
    } else {
      res.status(200).json(respon);
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const createSnack = async (req, res) => {
  const snackData = {
    user_id: req.body.user_id,
    title: req.body.title,
    harga: req.body.harga,
    photo: req.file.filename,
  };
  try {
    const newSnack = await snack.create(snackData);
    res.status(201).json(newSnack);
  } catch (err) {
    if (req.file) {
      const result = req.file.filename;
      if (fs.existsSync(`images/${result}`)) {
        fs.unlinkSync(`images/${result}`);
      }
    }

    res.status(400).json({ message: err.message });
  }
};

const updateSnack = async (req, res) => {
  const snackData = {
    user_id: req.body.user_id,
    title: req.body.title,
    harga: req.body.harga,
    photo: req.file.filename,
  };
  try {
    const newSnack = await snack.update(snackData, {
      where: {
        id: req.params.id,
      },
    });
    res.status(201).json(newSnack);
  } catch (err) {
    if (req.file) {
      const result = req.file.filename;
      if (fs.existsSync(`images/${result}`)) {
        fs.unlinkSync(`images/${result}`);
      }
    }

    res.status(400).json({ message: err.message });
  }
};

const deleteSnackById = async (req, res) => {
  try {
    const respon = await snack.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(respon);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  getSnackAll,
  getSnackAllById,
  createSnack,
  updateSnack,
  deleteSnackById,
};
