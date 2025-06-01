import express from "express";
import "dotenv/config";
import { connectDb } from "./config/db.js";
import usersRouter from "./routes/users.js";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

async function start() {
  await connectDb();

  app.use("/users", usersRouter);

  app.listen(PORT, () => {
    console.log(`Servidor está rodando na porta ${PORT}`);
  });
}

start();
