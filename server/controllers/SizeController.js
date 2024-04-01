import SizeModel from '../models/Size.js';

export const getSizes = async (req, res) => {
    try {
        const sizes = await SizeModel.find()
            .exec();
        res.status(200).json(sizes);
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
}

export const createSize = async (req, res) => {
    try {
        const doc = new SizeModel({
            name: req.body.name,
            code: req.body.code,
        });

        const size = await doc.save();
        res.status(201).json(size);
    } catch (err) {
        res.status(400).json({
            message: err.message,
        });
    }
}

export const deleteSize = async (req, res) => {
    try {
        const deletedSize = await SizeModel.findOneAndDelete({_id: req.params.id})
            .exec();

        if (!deletedSize) {
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