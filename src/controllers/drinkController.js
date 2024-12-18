const { drink } = require("../models");
const fs = require("fs");

const getDrinkAll = async (req, res) => {
  try {
    const respon = await drink.findAll();
    res.status(200).json(respon);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
const getDrinkAllById = async (req, res) => {
  try {
    const respon = await drink.findOne({
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

const createDrink = async (req, res) => {
  const drinkData = {
    user_id: req.body.user_id,
    title: req.body.title,
    harga: req.body.harga,
    photo: req.file.filename,
  };
  try {
    const newDrink = await drink.create(drinkData);
    res.status(201).json(newDrink);
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

const updateDrink = async (req, res) => {
  const drinkData = {
    user_id: req.body.user_id,
    title: req.body.title,
    harga: req.body.harga,
    photo: req.file.filename,
  };
  try {
    const newDrink = await drink.update(drinkData, {
      where: {
        id: req.params.id,
      },
    });
    res.status(201).json(newDrink);
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

const deleteDrinkById = async (req, res) => {
  try {
    const respon = await drink.destroy({
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
  getDrinkAll,
  getDrinkAllById,
  createDrink,
  updateDrink,
  deleteDrinkById,
};
