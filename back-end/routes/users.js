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
    res.status(500).json(error);
  }
});

router.get("/profile", async (req, res) => {
  const { token } = req.cookies;

  if (token) {
    try {
      const userInfo = jwt.verify(token, JWT_SECRET_KEY);
      res.json(userInfo);
    } catch (error) {
      res.status(500).json(error);
    }
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

    const newUser = { _id: createdUser._id, name: createdUser.name, email: createdUser.email }; // Criei corretamente a variável

    const token = jwt.sign(newUser, JWT_SECRET_KEY);

    console.log({ token, JWT_SECRET_KEY });

    // Define cookie e envia resposta JSON
    res.cookie('token', token, {
      httpOnly: true,
      sameSite: 'lax',
      secure: false, // se for https, colocar true
      maxAge: 1000 * 60 * 60 * 24 * 7, // 7 dias
    }).json(newUser); // Envia somente uma resposta, sem duplicar

  } catch (error) {
    res.status(500).json(error);
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
        const token = jwt.sign(newUserObj, JWT_SECRET_KEY);

        console.log({ token, JWT_SECRET_KEY });

        // Define cookie e envia resposta JSON
        res.cookie('token', token, {
          httpOnly: true,
          sameSite: 'lax',
          secure: false, // se for https, colocar true
          maxAge: 1000 * 60 * 60 * 24 * 7, // 7 dias
        }).json(newUserObj);

      } else {
        res.status(404).json("Senha inválida!");
      }
    } else {
      res.status(400).json("Usuário não encontrado!");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;
