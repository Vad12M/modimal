import ColorModel from '../models/Color.js';

export const getColors = async (req, res) => {
    try {
        const colors = await ColorModel.find()
            .exec();
        res.status(200).json(colors);
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
}

export const createColor = async (req, res) => {
    try {
        const doc = new ColorModel({
            name: req.body.name,
            hex: req.body.hex,
        });

        const color = await doc.save();
        res.status(201).json(color);
    } catch (err) {
        res.status(400).json({
            message: err.message,
        });
    }
}

export const deleteColor = async (req, res) => {
    try {
        const deletedColor = await ColorModel.findOneAndDelete({_id: req.params.id})
            .exec();

        if (!deletedColor) {
            res.status(404).json({
                message: 'Not found',
            });
        }

        res.status(200).json({
            success: true,
        });
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
}