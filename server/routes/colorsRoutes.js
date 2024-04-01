import express from "express";
import {createColor, deleteColor, getColors} from "../controllers/ColorController.js";

const router = express.Router();

router.post("/create", createColor);
router.get("/", getColors);
router.delete("/:id", deleteColor);


export default router;