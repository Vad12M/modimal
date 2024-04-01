import express from "express";
import {createFabric, deleteFabric, getFabrics} from "../controllers/FabricrController.js";

const router = express.Router();

router.post("/create", createFabric);
router.get("/", getFabrics);
router.delete("/:id", deleteFabric);


export default router;