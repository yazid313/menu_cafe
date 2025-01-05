import { rekomendationControl, outletControl } from "../models/index.js";
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
const getRekomendationAllByNamaOutlet = async (req, res) => {
  try {
    const respon = await rekomendationControl.findAll({
      include: [
        {
          model: outletControl,
          required: false, // Mengatur menjadi LEFT JOIN
          where: {
            nama_outlet: req.params.nama_outlet,
          },
        },
      ],
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
    outlet_id: req.body.outlet_id,
    title: req.body.title,
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
    outlet_id: req.body.outlet_id,
    title: req.body.title,
    photo: req.file ? req.file.filename : req.body.photo,
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
  getRekomendationAllByNamaOutlet,
  createRekomendation,
  updateRekomendation,
  deleteRekomendationById,
};
