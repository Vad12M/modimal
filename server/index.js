import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/authRoutes.js';
import dotenv from 'dotenv';
import colorsRoutes from "./routes/colorsRoutes.js";
import sizesRoutes from "./routes/sizesRoutes.js";
import fabricsRoutes from "./routes/fabricsRoutes.js";

dotenv.config();

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to the database'))
    .catch((err) => console.log('Error connecting to the database', err));

const app = express();
app.use(express.json());

// routes
app.use('/api/auth', userRoutes);
app.use('/api/colors', colorsRoutes);
app.use('/api/sizes', sizesRoutes);
app.use('/api/fabrics', fabricsRoutes);

// ====================================

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});