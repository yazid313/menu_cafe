import { profileControl } from "../models/index.js";
import fs from "fs";

const getProfileAll = async (req, res) => {
  try {
    const respon = await profileControl.findAll();
    res.status(200).json(respon);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
const getProfileAllById = async (req, res) => {
  try {
    const respon = await profileControl.findOne({
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

const createProfile = async (req, res) => {
  const profileData = {
    outlet_id: req.body.outlet_id,
    nama_cafe: req.body.nama_cafe,
    alamat: req.body.alamat,
    history: req.body.history,
    logo: req.file ? req.file.filename : req.body.logo,
  };
  try {
    const newProfile = await profileControl.create(profileData);
    res.status(201).json(newProfile);
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

const updateProfile = async (req, res) => {
  const profileData = {
    outlet_id: req.body.outlet_id,
    nama_cafe: req.body.nama_cafe,
    alamat: req.body.alamat,
    history: req.body.history,
    logo: req.file ? req.file.filename : req.body.logo,
  };
  try {
    const newProfile = await profileControl.update(profileData, {
      where: {
        id: req.params.id,
      },
    });
    res.status(201).json(newProfile);
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

const deleteProfileById = async (req, res) => {
  try {
    const respon = await profileControl.destroy({
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
  getProfileAll,
  getProfileAllById,
  createProfile,
  updateProfile,
  deleteProfileById,
};
