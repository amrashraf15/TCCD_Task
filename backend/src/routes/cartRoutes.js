import express from 'express';
import { createCart, deleteCart, getCartItemsByCartId } from '../controllers/cartController.js';
const router = express.Router();

router.post("/",createCart)
router.delete("/:cartId",deleteCart)
router.get("/:cartId",getCartItemsByCartId)

export default router;