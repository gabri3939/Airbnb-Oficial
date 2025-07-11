import jwt from "jsonwebtoken";
import "dotenv/config";

const { JWT_SECRET_KEY } = process.env;

export const JWTSign = (newUserObj, res) => {
  return new Promise((resolve, reject) => {
    jwt.sign(newUserObj, JWT_SECRET_KEY, { expiresIn: "7d" }, (error, token) => {
      if (error) {
        console.error("Erro ao assinar JWT:", error);
        return reject(error);
      }

      res.cookie("token", token, {
        httpOnly: true,
        sameSite: "lax",   // <<< corrigido para ambiente local
        secure: false,     // <<< false porque não está usando HTTPS localmente
        maxAge: 1000 * 60 * 60 * 24 * 7,
        path: "/",
      }).json(newUserObj);

      resolve(token);
    });
  });
};

export const JWTVerify = (req) => {
  const token = req.cookies?.token;

  if (!token) return null;

  return new Promise((resolve, reject) => {
    jwt.verify(token, JWT_SECRET_KEY, {}, (error, userInfo) => {
      if (error) {
        console.error("Erro ao verificar JWT:", error);
        return reject(error);
      }
      resolve(userInfo);
    });
  });
};
