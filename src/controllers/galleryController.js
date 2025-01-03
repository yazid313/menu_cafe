import { galleryControl, outletControl } from "../models/index.js";
import fs from "fs";

const getGalleryAll = async (req, res) => {
  try {
    const respon = await galleryControl.findAll();
    res.status(200).json(respon);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
const getGalleryAllById = async (req, res) => {
  try {
    const respon = await galleryControl.findOne({
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
const getGalleryAllByNamaOutlet = async (req, res) => {
  try {
    const respon = await galleryControl.findAll({
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

const createGallery = async (req, res) => {
  const galleryData = {
    outlet_id: req.body.outlet_id,
    title: req.body.title,
    photo: req.file ? req.file.filename : req.body.photo,
  };
  try {
    const newGallery = await galleryControl.create(galleryData);
    res.status(201).json(newGallery);
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

const updateGallery = async (req, res) => {
  const galleryData = {
    outlet_id: req.body.outlet_id,
    title: req.body.title,
    photo: req.file ? req.file.filename : req.body.photo,
  };
  try {
    const newGallery = await galleryControl.update(galleryData, {
      where: {
        id: req.params.id,
      },
    });
    res.status(201).json(newGallery);
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

const deleteGalleryById = async (req, res) => {
  try {
    const respon = await galleryControl.destroy({
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
  getGalleryAll,
  getGalleryAllById,
  getGalleryAllByNamaOutlet,
  createGallery,
  updateGallery,
  deleteGalleryById,
};
