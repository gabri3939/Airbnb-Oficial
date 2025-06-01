import express from "express";
import User from "../domains/users/model.js";
import bcrypt from "bcryptjs";

const router = express.Router();
const bcryptSalt = bcrypt.genSaltSync();

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/", async (req, res) => {
  const { name, email, password } = req.body;
  const encryptedPassword = bcrypt.hashSync(password, bcryptSalt);

  try {
    const newUser = await User.create({
      name,
      email,
      password: encryptedPassword,
    });
    res.json({
      ...newUser.toObject(),
      password: encryptedPassword,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;
