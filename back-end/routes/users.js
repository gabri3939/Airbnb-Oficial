import express from "express";
import User from "../domains/users/model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";

const router = express.Router();
const bcryptSalt = bcrypt.genSaltSync();
const { JWT_SECRET_KEY } = process.env;

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/profile", (req, res) => {
  const { token } = req.cookies;

  if (token) {
    jwt.verify(token, JWT_SECRET_KEY, {}, (error, userInfo) => {
      if (error) {
        return res.status(401).json({ error: "Token inválido", details: error.message });
      }
      res.json(userInfo);
    });
  } else {
    res.json(null);
  }
});

router.post("/", async (req, res) => {
  const { name, email, password } = req.body;
  const encryptedPassword = bcrypt.hashSync(password, bcryptSalt);

  try {
    const createdUser = await User.create({
      name,
      email,
      password: encryptedPassword,
    });

    const newUser = { _id: createdUser._id, name: createdUser.name, email: createdUser.email };

    jwt.sign(newUser, JWT_SECRET_KEY, {}, (error, token) => {
      if (error) {
        console.error("Erro ao gerar token:", error);
        return res.status(500).json({ error: "Erro ao gerar token", details: error.message });
      }

      res.cookie('token', token, {
        httpOnly: true,
        sameSite: 'lax',
        secure: false, // 🔐 Em produção, use: secure: true
        maxAge: 1000 * 60 * 60 * 24 * 7,
      }).json(newUser);
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const userDoc = await User.findOne({ email });

    if (userDoc) {
      const passwordCorrect = bcrypt.compareSync(password, userDoc.password);

      if (passwordCorrect) {
        const { name, _id } = userDoc;
        const newUserObj = { name, email, _id };

        jwt.sign(newUserObj, JWT_SECRET_KEY, {}, (error, token) => {
          if (error) {
            console.error("Erro ao gerar token:", error);
            return res.status(500).json({ error: "Erro ao gerar token", details: error.message });
          }

          res.cookie('token', token, {
            httpOnly: true,
            sameSite: 'lax',
            secure: false, // 🔐 Em produção, use: secure: true
            maxAge: 1000 * 60 * 60 * 24 * 7,
          }).json(newUserObj);
        });
      } else {
        res.status(401).json({ error: "Senha inválida!" });
      }
    } else {
      res.status(404).json({ error: "Usuário não encontrado!" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
