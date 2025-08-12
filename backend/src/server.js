import express from 'express';
import dotenv from "dotenv";
import { connectDB } from './config/db.js';
import cookieParser from "cookie-parser";
import productRoutes from "./routes/productRoutes.js"
import categoryRoutes from "./routes/categoryRoutes.js"
import cartRoutes from "./routes/cartRoutes.js"
import cartItemRoutes from "./routes/cartItemRoutes.js"



dotenv.config();

const app = express();
const PORT = process.env.PORT;
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/products", productRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/cartItems", cartItemRoutes);

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}).catch((error) => {
    console.error("Failed to connect to database:", error);
    process.exit(1);
});