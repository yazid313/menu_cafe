const { contact } = require("../models");
const fs = require("fs");

const getContactAll = async (req, res) => {
  try {
    const respon = await contact.findAll();
    res.status(200).json(respon);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
const getContactAllById = async (req, res) => {
  try {
    const respon = await contact.findOne({
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
    user_id: req.body.user_id,
    name: req.body.name,
    values: req.body.values,
    icon: req.file.filename,
  };
  try {
    const newContact = await contact.create(contactData);
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
    user_id: req.body.user_id,
    name: req.body.name,
    values: req.body.values,
    icon: req.file.filename,
  };
  try {
    const newContact = await contact.update(contactData, {
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
    const respon = await contact.destroy({
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
  getContactAll,
  getContactAllById,
  createContact,
  updateContact,
  deleteContactById,
};
