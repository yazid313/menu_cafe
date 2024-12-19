import { userControl } from "../models/index.js";

const createUsernameValidator = async (req, res, next) => {
  const respon = await userControl.findOne({
    attributes: ["username"],
    where: {
      username: req.body.username,
    },
  });

  if (respon) {
    return res.status(400).json({ massage: "username sudah terdaftar!" });
  } else {
    next();
  }
};

const createEmailValidator = async (req, res, next) => {
  const respon = await userControl.findOne({
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

const userIdValidator = async (req, res, next) => {
  const id = req.params.id;

  try {
    // Gunakan Sequelize untuk mencari user berdasarkan user_id
    const respon = await userControl.findByPk(id);

    if (!respon) {
      return res.status(401).json({ message: "user_id Tidak Terdaftar!" });
    }

    next();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateUsernameValidator = async (req, res, next) => {
  const { username } = req.body;
  const { id } = req.params;

  try {
    // Gunakan Sequelize untuk mencari user berdasarkan username
    const respon = await userControl.findOne({ where: { username } });

    // Periksa apakah username sudah ada

    if (respon) {
      // Periksa apakah user_id sama
      if (respon.id == id) {
        next();
      } else {
        return res.status(400).json({ message: "username sudah terdaftar!" });
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
    const respon = await userControl.findOne({ where: { email } });

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
    const respon = await userControl.findByPk(id);

    if (!respon) {
      return res.status(401).json({ message: "user_id Tidak Terdaftar!" });
    }

    next();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export {
  createUsernameValidator,
  createEmailValidator,
  userIdValidator,
  updateUsernameValidator,
  updateEmailValidator,
  deleteIdValidator,
};
