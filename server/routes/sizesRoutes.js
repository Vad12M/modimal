import express from "express";
import {createSize, deleteSize, getSizes} from "../controllers/SizeController.js";

const router = express.Router();

router.post("/create", createSize);
router.get("/", getSizes);
router.delete("/:id", deleteSize);


export default router;