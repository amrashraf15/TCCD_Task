import mongoose from "mongoose";

const cartItemSchema = new mongoose.Schema({
    cartId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Cart",
        required: true
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true
    },
    quantity: { 
        type: Number,
        required: true,
        default: 1 }
}, { timestamps: true });

export default mongoose.model("CartItem", cartItemSchema);