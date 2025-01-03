import { eventControl, outletControl } from "../models/index.js";
import fs from "fs";

const getEventAll = async (req, res) => {
  try {
    const respon = await eventControl.findAll();
    res.status(200).json(respon);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
const getEventAllById = async (req, res) => {
  try {
    const respon = await eventControl.findOne({
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
const getEventAllByNamaOutlet = async (req, res) => {
  try {
    const respon = await eventControl.findAll({
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

const createEvent = async (req, res) => {
  const eventData = {
    outlet_id: req.body.outlet_id,
    title: req.body.title,
    description: req.body.description,
    photo: req.file.filename,
  };
  try {
    const newEvent = await eventControl.create(eventData);
    res.status(201).json(newEvent);
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

const updateEvent = async (req, res) => {
  const eventData = {
    outlet_id: req.body.outlet_id,
    title: req.body.title,
    description: req.body.description,
    photo: req.file ? req.file.filename : req.body.photo,
  };
  try {
    const newEvent = await eventControl.update(eventData, {
      where: {
        id: req.params.id,
      },
    });
    res.status(201).json(newEvent);
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

const deleteEventById = async (req, res) => {
  try {
    const respon = await eventControl.destroy({
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
  getEventAll,
  getEventAllById,
  getEventAllByNamaOutlet,
  createEvent,
  updateEvent,
  deleteEventById,
};
