import express from 'express';
import { createCartItem, getCartItem, updateCartItem } from '../controllers/cartItemController.js';

const router = express.Router();

router.post("/:cartId",createCartItem)
router.get("/:cartItemId",getCartItem)
router.patch("/:cartItemId",updateCartItem)


export default router;