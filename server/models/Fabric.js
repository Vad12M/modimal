import mongoose from "mongoose";

const FabricSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});

export default mongoose.model("Fabric", FabricSchema);