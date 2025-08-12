import Product from "../models/product.js";
export const createProduct = async (req,res) => { 
    const {name,description,price,stock,category} = req.body
    try {
        if(!name || !price || !category) {
            return res.status(400).json({success:false,message: "Name , Price and Category are required"});
        }
        const newProduct = new Product({
            name,
            description,
            price,
            stock,
            category,
        });
        await newProduct.save();
        res.status(201).json({success:true,message: "Product created successfully", product: newProduct });
    } catch (error) {
        console.error("Error in createProduct controller:", error);
        res.status(500).json({success:false,message:error.message});
    }
}

export const getAllProducts = async (req,res) => {
    try {
        const products = await Product.find().sort({createdAt:-1});
        res.status(200).json({success:true,message:"Products Fetched Successfully",products})
    } catch (error) {
        console.error("Error in getAllProducts controller:",error);
        res.status(500).json({success:false,message:error.message});
    }
}

export const getProduct = async (req,res) => {
    const {id}=req.params;
    try {   
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({success:false,message: "Product Not Found"});
        }
        res.status(200).json({success: true,message: "Product retrieved successfully", product}); 
    } catch (error) {
        console.error("Error in getProduct controller:",error);
        res.status(500).json({success:false,message:error.message});
    }
}

export const updateProduct = async (req,res) => {
    const {id}=req.params;
    const {name,description,price,stock,category} = req.body
    try {
        if(!name || !price || !category) {
            return res.status(400).json({success:false,message: "Name , Price and Category are required"});
        }
        const updatedProduct = await Product.findByIdAndUpdate(id, {name,description,price,stock,category}, {new: true});
        if (!updatedProduct) {
            return res.status(404).json({message: "Product not found"});
        }
        res.status(200).json({success: true, message: "Product updated successfully", product: updatedProduct});
    } catch (error) {
        console.error("Error in updateProduct controller:",error);
        res.status(500).json({success:false,message:error.message});
    }
}

export const deleteProduct = async (req,res) => {
    const {id}=req.params;
    try {
        const product = await Product.findByIdAndDelete(id);
        if (!product) {
            return res.status(404).json({message: "Product not found"});
        }
        res.status(200).json({success: true, message: "Product deleted successfully"});
    } catch (error) {
        console.error("Error in deleteProduct controller:", error);
        res.status(500).json({success:false,message:error.message});
    }
}