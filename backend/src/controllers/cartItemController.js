import CartItem from "../models/cartItem.js";
import Cart from "../models/cart.js";

export const createCartItem = async (req, res) => {
    const { cartId } = req.params;
    const { product, quantity } = req.body;
    try {
        const newCartItem = new CartItem({ cartId, product, quantity });
        await newCartItem.save();
        await Cart.findByIdAndUpdate(cartId, { $push: { items: newCartItem._id } });
        res.status(201).json({ success: true, message: "Cart item created successfully", cartItem: newCartItem });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

export const getCartItem = async (req, res) => {
    const {cartItemId} = req.params
    try {
        const cartItem = await CartItem.findById(cartItemId).populate("product");
        if (!cartItem) {
        return res.status(404).json({ success: false, message: "Cart item not found" });
        }
        res.json({ success: true, cartItem });
    } catch (error) {
    res.status(500).json({ success: false, message: error.message });
    }
};

export const updateCartItem = async (req, res) => {
    const {cartItemId} = req.params
    try {
    const updatedItem = await CartItem.findByIdAndUpdate(cartItemId,req.body,{ new: true, runValidators: true });
    if (!updatedItem) {
        return res.status(404).json({ success: false, message: "Cart item not found" });
    }
        res.json({ success: true, cartItem: updatedItem });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
