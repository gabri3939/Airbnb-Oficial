import { Router } from "express";
import Place from "./model.js";

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
        owner, // Incluído aqui, supondo que venha do body também
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

        res.status(201).json(newPlaceDoc); // resposta de sucesso
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao criar lugar' });
    }
});

export default router;
