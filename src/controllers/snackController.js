import { outletControl, snackControl } from "../models/index.js";
import fs from "fs";

const getSnackAll = async (req, res) => {
  try {
    const respon = await snackControl.findAll();
    res.status(200).json(respon);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
const getSnackAllById = async (req, res) => {
  try {
    const respon = await snackControl.findOne({
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
const getSnackAllByNamaOutlet = async (req, res) => {
  try {
    const respon = await snackControl.findAll({
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

const createSnack = async (req, res) => {
  const snackData = {
    outlet_id: req.body.outlet_id,
    title: req.body.title,
    harga: req.body.harga,
    photo: req.file ? req.file.filename : req.body.photo,
  };
  try {
    const newSnack = await snackControl.create(snackData);
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
    outlet_id: req.body.outlet_id,
    title: req.body.title,
    harga: req.body.harga,
    photo: req.file.filename,
  };
  try {
    const newSnack = await snackControl.update(snackData, {
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
    const respon = await snackControl.destroy({
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
  getSnackAll,
  getSnackAllById,
  getSnackAllByNamaOutlet,
  createSnack,
  updateSnack,
  deleteSnackById,
};
