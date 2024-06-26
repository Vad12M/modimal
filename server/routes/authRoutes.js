import express from "express";
import {getMe, login, register, forgotPassword, resetPassword} from "../controllers/UserController.js";
import {loginValidator, registerValidator} from "../validations/auth.js";
import {handleValidationErrors} from "../utils/handleValidationErrors.js";
import {checkAuth} from "../utils/checkAuth.js";

const router = express.Router();

router.post("/login", loginValidator, handleValidationErrors, login);
router.post("/register", registerValidator, handleValidationErrors, register);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);
router.get('/me', checkAuth, getMe)

export default router;