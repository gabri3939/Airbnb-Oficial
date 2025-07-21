// routes.js
import { Router } from "express";
import Place from "./model.js";
import { downloaderImage } from "../utils/imageDownloader.js";
import { __dirname } from "../utils/dirname.js";
import fs from "fs";
import path from "path";

const router = Router();

router.post('/', async (req, res) => {
  const {
    Title,
    City,
    Photos,
    description,
    extras,
    price,
    perks,
    checkin,
    checkout,
    guests,
    owner,
  } = req.body;

  try {
    const newPlaceDoc = await Place.create({
      owner,
      Title,
      City,
      Photos,
      description,
      extras,
      perks,
      price,
      checkin,
      checkout,
      guests,
    });

    res.status(201).json(newPlaceDoc);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao criar lugar' });
  }
});

router.post("/upload/link", async (req, res) => {
  const { link } = req.body;

  try {
    const filename = await downloaderImage(link, `${__dirname}/tmp/`);
    res.json({ filename });
  } catch (err) {
    console.error("Erro ao baixar imagem:", err);
    res.status(500).json({ error: err.message || "Erro ao baixar imagem" });
  }
});


export default router;
