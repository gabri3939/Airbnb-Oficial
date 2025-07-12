import express from "express";
import "dotenv/config";
import { connectDb } from "./config/db.js";
import usersRouter from "./routes/users.js";
import PlaceRoutes from "./places/routes.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import { fileURLToPath } from "url";
import { dirname } from "node:path";

const app = express();
const PORT = process.env.PORT || 3000;





export   const  __filename = fileURLToPath(import.meta.url)
 export const  __dirname = dirname(__filename)


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
