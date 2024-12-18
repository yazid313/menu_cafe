const { rekomendation } = require("../models");
const fs = require("fs");

const getRekomendationAll = async (req, res) => {
  try {
    const respon = await rekomendation.findAll();
    res.status(200).json(respon);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
const getRekomendationAllById = async (req, res) => {
  try {
    const respon = await rekomendation.findOne({
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
    user_id: req.body.user_id,
    title: req.body.title,
    harga: req.body.harga,
    description: req.body.description,
    photo: req.file.filename,
  };
  try {
    const newRekomendation = await rekomendation.create(rekomendationData);
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
    user_id: req.body.user_id,
    title: req.body.title,
    harga: req.body.harga,
    description: req.body.description,
    photo: req.file.filename,
  };
  try {
    const newRekomendation = await rekomendation.update(rekomendationData, {
      where: {
        id: req.params.id,
      },
    });
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
    const respon = await rekomendation.destroy({
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
  getRekomendationAll,
  getRekomendationAllById,
  createRekomendation,
  updateRekomendation,
  deleteRekomendationById,
};
