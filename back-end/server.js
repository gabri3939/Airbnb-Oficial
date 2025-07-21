import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { connectDb } from "./config/db.js";
import router from "./routess/index.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "http://localhost:5173", // seu front-end
    credentials: true,
  })
);

// Serve arquivos estáticos da pasta 'utils/tmp' na rota /uploads
app.use("/uploads", express.static(path.join(__dirname, "utils", "tmp")));

// Conecta ao banco de dados
connectDb().then(() => {
  console.log("🟢 Banco de dados conectado com sucesso");
});

// Rotas
app.use(router);
