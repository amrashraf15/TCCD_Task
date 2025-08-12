import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true
    },
    description: { 
        type: String,
        default: "" 
    },
    price: { 
        type: Number, 
        required: true 
    },
    stock: { 
        type: Number, 
        required: true, 
        default: 0 
    },
    category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true
    }
}, { timestamps: true });

export default mongoose.model("Product", productSchema);