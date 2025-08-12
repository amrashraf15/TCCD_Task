import Cart from "../models/cart.js";
import "../models/cartItem.js";
export const createCart = async (req, res) => {
    try {
        const newCart = new Cart({ items: [] });
        await newCart.save();
        res.status(201).json({ success: true, message: "Cart created successfully", cart: newCart });
    } catch (error) {
    res.status(500).json({ success: false, message: error.message });
    }
};
export const deleteCart = async (req, res) => {
    const { cartId } = req.params;
    try {
        const deletedCart = await Cart.findByIdAndDelete(cartId);
        if (!deletedCart) {
            return res.status(404).json({ success: false, message: "Cart not found" });
        }
        res.json({ success: true, message: "Cart deleted successfully" });
    } catch (error) {
    res.status(500).json({ success: false, message: error.message });
    }
};

export const getCartItemsByCartId = async (req, res) => {
    const { cartId } = req.params;
    try {
        const cart = await Cart.findById(cartId).populate("items");
        if (!cart) {
            return res.status(404).json({ success: false, message: "Cart not found" });
        }
        res.json({ success: true, items: cart.items });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
