import UserModel from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: "localhost:9000",
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

export const register = async (req, res) => {
    try {
        const existingUser = await UserModel.findOne({email: req.body.email});
        if (existingUser) {
            return res.status(400).json({
                message: 'User already exists',
            });
        }

        const {password, ...data} = req.body;
        const salt = await bcrypt.genSaltSync(10);
        const passwordHash = await bcrypt.hash(password, salt);
        const doc = new UserModel({
            ...data, passwordHash,
        });

        await doc.save();
        res.status(200).json({
            message: 'User registered successfully'
        });
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
}

export const login = async (req, res) => {
    try {
        const user = await UserModel.findOne({email: req.body.email});

        if (!user) {
            return res.status(400).json({
                message: 'User does not exist',
            });
        }

        const validPassword = await bcrypt.compare(req.body.password, user.passwordHash);
        if (!validPassword) {
            return res.status(400).json({
                message: 'Invalid credentials',
            });
        }

        const token = jwt.sign({
            userId: user._id,
        }, process.env.SECRET, {expiresIn: "12h"});

        res.status(200).json({token});
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
}


export const forgotPassword = async (req, res) => {
    const user = await UserModel.findOne({email: req.body.email});
    if (!user) {
        return res.status(404).json({
            message: 'User does not exist',
        });
    }

    const token = jwt.sign({
        userId: user._id,
    }, process.env.SECRET, {expiresIn: '1h'});
    const url = `${process.env.CLIENT_URL}/reset-password/${token}`;
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: req.body.email,
        subject: 'Password Reset',
        html: `
                <p>Click <a href="${url}">here</a> to reset your password</p>
            `
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({
            message: 'Email sent',
        });
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
}

export const resetPassword = async (req, res) => {
    const token = req.body.token;
    const decoded = jwt.verify(token, process.env.SECRET);

    if (!decoded) {
        return res.status(400).json({
            message: 'Invalid token',
        });
    }

    const user = UserModel.findById(decoded.userId);
    if (!user) {
        return res.status(404).json({
            message: 'User not found',
        });
    }

    const salt = bcrypt.genSaltSync(10);
    user.passwordHash = bcrypt.hashSync(req.body.password, salt);

    await user.save();
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: user.email,
        subject: 'Password Reset Confirmation',
        html: `
                <p>Your password has been successfully reset.</p>
            `
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({
            message: 'Password reset successful',
        });
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
}

export const getMe = async (req, res) => {
    try {
        const user = await UserModel.findById(req.userId);
        if (!user) {
            return res.status(404).json({
                message: 'User not found',
            });
        }
        const {passwordHash, ...userData} = user._doc;
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
}