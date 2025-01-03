import { outletControl } from "../models/index.js";

const createNamaOutletValidator = async (req, res, next) => {
  console.log(req.body, "pppppp");

  const respon = await outletControl.findOne({
    attributes: ["nama_outlet"],
    where: {
      nama_outlet: req.body.nama_outlet,
    },
  });

  if (respon) {
    return res.status(400).json({ massage: "nama_outlet sudah terdaftar!" });
  } else {
    next();
  }
};

const createEmailValidator = async (req, res, next) => {
  const respon = await outletControl.findOne({
    attributes: ["email"],
    where: {
      email: req.body.email,
    },
  });

  if (respon) {
    return res.status(400).json({ massage: "email sudah terdaftar!" });
  } else {
    next();
  }
};

const outletIdValidator = async (req, res, next) => {
  const id = req.params.id;

  try {
    // Gunakan Sequelize untuk mencari user berdasarkan user_id
    const respon = await outletControl.findByPk(id);

    if (!respon) {
      return res.status(401).json({ message: "outlet_id Tidak Terdaftar!" });
    }

    next();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateNamaOutletValidator = async (req, res, next) => {
  const { nama_outlet } = req.body;
  const { id } = req.params;

  try {
    // Gunakan Sequelize untuk mencari user berdasarkan nama_outlet
    const respon = await outletControl.findOne({ where: { nama_outlet } });

    // Periksa apakah nama_outlet sudah ada

    if (respon) {
      // Periksa apakah user_id sama
      if (respon.id == id) {
        next();
      } else {
        return res
          .status(400)
          .json({ message: "nama_outlet sudah terdaftar!" });
      }
    } else {
      next();
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateEmailValidator = async (req, res, next) => {
  const { email } = req.body;
  const { id } = req.params;

  try {
    const respon = await outletControl.findOne({ where: { email } });

    // Periksa apakah username sudah ada

    if (respon) {
      // Periksa apakah user_id sama
      if (respon.id == id) {
        next();
      } else {
        return res.status(400).json({ message: "email sudah terdaftar!" });
      }
    } else {
      next();
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteIdValidator = async (req, res, next) => {
  const id = req.params.id;

  try {
    // Gunakan Sequelize untuk mencari user berdasarkan user_id
    const respon = await outletControl.findByPk(id);

    if (!respon) {
      return res.status(401).json({ message: "user_id Tidak Terdaftar!" });
    }

    next();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export {
  createNamaOutletValidator,
  createEmailValidator,
  outletIdValidator,
  updateNamaOutletValidator,
  updateEmailValidator,
  deleteIdValidator,
};
