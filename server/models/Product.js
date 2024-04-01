import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    colors: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Color",
        required: true,
        default: []
    },
    sizes: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Size",
        required: true,
        default: []
    },
    price: {
        type: Number,
        required: true
    },
    productImages: {
        type: Array,
        required: true
    },
    fabric: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Fabric",
        required: true
    },
    productDetails: {
        type: String,
        required: true
    },
    shippingAndReturns: {
        type: String,
        required: true
    },
    collection: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Collection",
        required: true
    },
}, {
    timestamps: true
});

export default mongoose.model("Product", ProductSchema);