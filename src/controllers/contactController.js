import { contactControl } from "../models/index.js";
import fs from "fs";

const getContactAll = async (req, res) => {
  try {
    const respon = await contactControl.findAll();
    res.status(200).json(respon);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
const getContactAllById = async (req, res) => {
  try {
    const respon = await contactControl.findOne({
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

const createContact = async (req, res) => {
  const contactData = {
    outlet_id: req.body.outlet_id,
    nama_contact: req.body.nama_contact,
    value: req.body.value,
    logo: req.file ? req.file.filename : req.body.logo,
  };
  try {
    const newContact = await contactControl.create(contactData);
    res.status(201).json(newContact);
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

const updateContact = async (req, res) => {
  const contactData = {
    outlet_id: req.body.outlet_id,
    nama_contact: req.body.nama_contact,
    value: req.body.value,
    logo: req.file ? req.file.filename : req.body.logo,
  };
  try {
    const newContact = await contactControl.update(contactData, {
      where: {
        id: req.params.id,
      },
    });
    res.status(201).json(newContact);
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

const deleteContactById = async (req, res) => {
  try {
    const respon = await contactControl.destroy({
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
  getContactAll,
  getContactAllById,
  createContact,
  updateContact,
  deleteContactById,
};
