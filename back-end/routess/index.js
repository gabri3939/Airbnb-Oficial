import { Router } from "express";
import usersRouter from "../routes/users.js";
import PlaceRoutes from "../places/routes.js";


const router = Router();


  router.use("/users", usersRouter);
  router.use("/places", PlaceRoutes);



export default router;