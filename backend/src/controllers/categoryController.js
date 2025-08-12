import Category from "../models/category.js";
export const createCategory = async (req,res) => { 
    const {name,description} = req.body
    try {
        if(!name) {
            return res.status(400).json({success:false,message: "Name is required"});
        }
        const newCategory = new Category({
            name,
            description,
        });
        await newCategory.save();
        res.status(201).json({success:true,message: "Category created successfully", category: newCategory });
    } catch (error) {
        console.error("Error in createCategory controller:", error);
        res.status(500).json({success:false,message:error.message});
    }
}

export const getAllCategories = async (req,res) => {
    try {
        const categories = await Category.find().sort({createdAt:-1});
        res.status(200).json({success:true,message:"Categories Fetched Successfully",categories})
    } catch (error) {
        console.error("Error in getAllCategories controller:",error);
        res.status(500).json({success:false,message:error.message});
    }
}

export const getCategory = async (req,res) => {
    const {id}=req.params;
    try {   
        const category = await Category.findById(id);
        if (!category) {
            return res.status(404).json({success:false,message: "Category Not Found"});
        }
        res.status(200).json({success: true,message: "Category retrieved successfully", category}); 
    } catch (error) {
        console.error("Error in getCategory controller:",error);
        res.status(500).json({success:false,message:error.message});
    }
}

export const updateCategory = async (req,res) => {
    const {id}=req.params;
    const {name,description} = req.body
    try {
        if(!name) {
            return res.status(400).json({success:false,message: "Name is required"});
        }
        const updatedCategory = await Category.findByIdAndUpdate(id, {name,description}, {new: true});
        if (!updatedCategory) {
            return res.status(404).json({message: "Category not found"});
        }
        res.status(200).json({success: true, message: "Category updated successfully", category: updatedCategory});
    } catch (error) {
        console.error("Error in updateCategory controller:",error);
        res.status(500).json({success:false,message:error.message});
    }
}
export const deleteCategory = async (req,res) => {
    const {id}=req.params;
    try {
        const category = await Category.findByIdAndDelete(id);
        if (!category) {
            return res.status(404).json({success:false,message: "Category not found"});
        }
        res.status(200).json({success: true, message: "Category deleted successfully"});
    } catch (error) {
        console.error("Error in deleteCategory controller:", error);
        res.status(500).json({success:false,message:error.message});
    }
}