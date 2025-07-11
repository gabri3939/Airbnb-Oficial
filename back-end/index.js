import express from "express";
import "dotenv/config";
import { connectDb } from "./config/db.js";
import usersRouter from "./routes/users.js";
import PlaceRoutes from "./places/routes.js";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));

async function start() {
  await connectDb();

  app.use("/users", usersRouter);
  app.use("/places", PlaceRoutes);

  app.listen(PORT, () => {
    console.log(`Servidor está rodando na porta ${PORT}`);
  });
}

start();
