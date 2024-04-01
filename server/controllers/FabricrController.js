import FabricModel from '../models/Fabric.js';

export const getFabrics = async (req, res) => {
    try {
        const fabrics = await FabricModel.find()
            .exec();
        res.status(200).json(fabrics);
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
}

export const createFabric = async (req, res) => {
    try {
        const doc = new FabricModel({
            name: req.body.name,
            hex: req.body.hex,
        });

        const fabric = await doc.save();
        res.status(201).json(fabric);
    } catch (err) {
        res.status(400).json({
            message: err.message,
        });
    }
}

export const deleteFabric = async (req, res) => {
    try {
        const deletedFabric = await FabricModel.findOneAndDelete({_id: req.params.id})
            .exec();

        if (!deletedFabric) {
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