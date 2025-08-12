import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    items:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "CartItem"
        }
    ]
},{timestamps: true })

export default mongoose.model("Cart", cartSchema);