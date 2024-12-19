import { userControl } from "../models/index.js";
import fs from "fs";

const getUserAll = async (req, res) => {
  try {
    // Pastikan memanggil model User di dalam db
    const respon = await userControl.findAll();
    res.status(200).json(respon);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getUserAllById = async (req, res) => {
  try {
    const respon = await userControl.findOne({
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

const createUser = async (req, res) => {
  const userData = {
    full_name: req.body.full_name,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  };
  try {
    const newUser = await userControl.create(userData);
    res.status(201).json(newUser);
  } catch (err) {
    // if (req.file) {
    //   const result = req.file.filename;
    //   if (fs.existsSync(`images/${result}`)) {
    //     fs.unlinkSync(`images/${result}`);
    //   }
    // }

    res.status(400).json({ message: err.message });
  }
};

const updateUser = async (req, res) => {
  const userData = {
    full_name: req.body.full_name,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  };
  try {
    const newUser = await userControl.update(userData, {
      where: {
        id: req.params.id,
      },
    });
    res.status(201).json(newUser);
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

const deleteUserById = async (req, res) => {
  try {
    const respon = await userControl.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(respon);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export { getUserAll, getUserAllById, createUser, updateUser, deleteUserById };
