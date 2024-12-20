import { foodControl } from "../models/index.js";
import fs from "fs";

const getFoodAll = async (req, res) => {
  try {
    const respon = await foodControl.findAll();
    res.status(200).json(respon);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
const getFoodAllById = async (req, res) => {
  try {
    const respon = await foodControl.findOne({
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

const createFood = async (req, res) => {
  const foodData = {
    title: req.body.title,
    harga: req.body.harga,
    photo: req.file.filename,
  };
  try {
    const newFood = await foodControl.create(foodData);
    res.status(201).json(newFood);
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

const updateFood = async (req, res) => {
  const foodData = {
    title: req.body.title,
    harga: req.body.harga,
    photo: req.file.filename,
  };
  try {
    const newFood = await foodControl.update(foodData, {
      where: {
        id: req.params.id,
      },
    });
    res.status(201).json(newFood);
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

const deleteFoodById = async (req, res) => {
  try {
    const respon = await foodControl.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(respon);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export { getFoodAll, getFoodAllById, createFood, updateFood, deleteFoodById };
