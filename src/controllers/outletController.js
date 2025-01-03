import { outletControl } from "../models/index.js";

const getOutletAll = async (req, res) => {
  try {
    // Pastikan memanggil model Outlet di dalam db
    const respon = await outletControl.findAll();
    res.status(200).json(respon);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getOutletAllById = async (req, res) => {
  try {
    const respon = await outletControl.findOne({
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

const createOutlet = async (req, res) => {
  const outletData = {
    nama_outlet: req.body.nama_outlet,
    email: req.body.email,
    password: req.body.password,
    role: req.body.role,
  };
  try {
    const newOutlet = await outletControl.create(outletData);
    res.status(201).json(newOutlet);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const updateOutlet = async (req, res) => {
  const outletData = {
    nama_outlet: req.body.nama_outlet,
    email: req.body.email,
    password: req.body.password,
    role: req.body.role,
  };
  try {
    const newOutlet = await outletControl.update(outletData, {
      where: {
        id: req.params.id,
      },
    });
    res.status(201).json(newOutlet);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteOutletById = async (req, res) => {
  try {
    const respon = await outletControl.destroy({
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
  getOutletAll,
  getOutletAllById,
  createOutlet,
  updateOutlet,
  deleteOutletById,
};
