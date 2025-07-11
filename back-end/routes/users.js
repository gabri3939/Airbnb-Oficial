import express from "express";
import User from "../domains/users/model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { JWTSign, JWTVerify } from "../utils/jwt.js";  // <-- IMPORTAÇÃO CORRETA

const router = express.Router();
const bcryptSalt = bcrypt.genSaltSync();
const { JWT_SECRET_KEY } = process.env;

// restante do código continua igual


// GET todos os usuários
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET /profile
router.get("/profile", async (req, res) => {
  try {
    const userInfo = await JWTVerify(req);
    if (!userInfo) {
      return res.status(401).json({ error: "Token não encontrado" });
    }
    res.json(userInfo);
  } catch (error) {
    res.status(401).json({ error: "Token inválido ou expirado." });
  }
});

// ✅ POST /logout
router.post("/logout", (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    sameSite: "none",
    secure: false, // em produção: true
    path: "/",
  });
  res.json({ message: "Logout realizado com sucesso." });
});








// ✅ POST / → CADASTRAR USUÁRIO
router.post("/", async (req, res) => {
  console.log("Requisição recebida no POST /");
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: "Nome, email e senha são obrigatórios" });
  }

  const encryptedPassword = bcrypt.hashSync(password, bcryptSalt);

  try {
    // ✅ Criar usuário
    const createdUser = await User.create({
      name,
      email,
      password: encryptedPassword,
    });

    const newUserObj = {
      _id: createdUser._id,
      name: createdUser.name,
      email: createdUser.email,
    };

    // ✅ Gerar token e enviar cookie + json
    try {
      await JWTSign(newUserObj, res);
    } catch (error) {
      console.error("Erro ao assinar JWT:", error);
      res.status(500).json({ error: "Erro ao assinar JWT", details: error.message });
    }

  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    res.status(500).json({ error: "Erro ao criar usuário", details: error.message });
  }
});

// ✅ POST /login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const userDoc = await User.findOne({ email });

    if (userDoc) {
      const passwordCorrect = bcrypt.compareSync(password, userDoc.password);

      if (passwordCorrect) {
        const { name, _id } = userDoc;
        const newUserObj = { name, email, _id };

        try {
          await JWTSign(newUserObj, res);
        } catch (error) {
          res.status(500).json({ error: "Erro ao assinar com o JWT", details: error.message });
        }

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
