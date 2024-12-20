import { rekomendationControl } from "../models/index.js";
import fs from "fs";

const getRekomendationAll = async (req, res) => {
  try {
    const respon = await rekomendationControl.findAll();
    res.status(200).json(respon);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
const getRekomendationAllById = async (req, res) => {
  try {
    const respon = await rekomendationControl.findOne({
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

const createRekomendation = async (req, res) => {
  const rekomendationData = {
    title: req.body.title,
    harga: req.body.harga,
    description: req.body.description,
    photo: req.file.filename,
  };
  try {
    const newRekomendation = await rekomendationControl.create(
      rekomendationData
    );
    res.status(201).json(newRekomendation);
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

const updateRekomendation = async (req, res) => {
  const rekomendationData = {
    title: req.body.title,
    harga: req.body.harga,
    description: req.body.description,
    photo: req.file.filename,
  };
  try {
    const newRekomendation = await rekomendationControl.update(
      rekomendationData,
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(201).json(newRekomendation);
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

const deleteRekomendationById = async (req, res) => {
  try {
    const respon = await rekomendationControl.destroy({
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
  getRekomendationAll,
  getRekomendationAllById,
  createRekomendation,
  updateRekomendation,
  deleteRekomendationById,
};
