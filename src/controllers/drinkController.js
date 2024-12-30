import { drinkControl } from "../models/index.js";
import fs from "fs";

const getDrinkAll = async (req, res) => {
  try {
    const respon = await drinkControl.findAll();
    res.status(200).json(respon);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
const getDrinkAllById = async (req, res) => {
  try {
    const respon = await drinkControl.findOne({
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
    outlet_id: req.body.outlet_id,
    title: req.body.title,
    harga: req.body.harga,
    photo: req.file.filename,
  };
  try {
    const newDrink = await drinkControl.create(drinkData);
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
    outlet_id: req.body.outlet_id,
    title: req.body.title,
    harga: req.body.harga,
    photo: req.file ? req.file.filename : req.body.photo,
  };
  try {
    const newDrink = await drinkControl.update(drinkData, {
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
    const respon = await drinkControl.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(respon);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export {
  getDrinkAll,
  getDrinkAllById,
  createDrink,
  updateDrink,
  deleteDrinkById,
};
