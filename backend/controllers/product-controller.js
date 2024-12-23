import uploadImageOnCloudinary from "../utilis/cloudinary.js";
import Product from "../models/productSchema.js";



export const addProduct = async (req, res) => {

    try {
        const { productTitle, productDescription, productCategory, productNewPrice, productOldPrice, productStock, productSize, productTags } = req.body;

        if (!productTitle || !productDescription || !productCategory, !productNewPrice || !productOldPrice || !productStock || productSize.length == 0 || productTags.length == 0) {
            res.status(401).send("All Fields are required to be filled")
        }

        // console.log(req.file);
        const path = req.file?.path;
        const { secure_url, public_id } = await uploadImageOnCloudinary(path, "product");
        // console.log(secure_url, public_id);

        if(!secure_url){
            res.status(400).send("Error while uploading the image");
        }

        const productCreated = await Product.create({ productTitle, productDescription, productCategory, productNewPrice, productOldPrice, productStock, productSize, productTags, productImg: { secure_url, public_id } });

        if (!productCreated) {
            res.status(401).json({ mssg: "Some Error Occured" })
        }

        res.status(201).send(productCreated);
    } 
    catch (error) {
        console.log(error)
    }
}


export const getAllProductArray=async(req, res)=>{
    try {
        const allProduct = await Product.find({});
        if(!allProduct){
            return res.status(401).send("No Product found");
        }

        return res.status(201).json({success : true, allProduct});
    } catch (error) {
        console.log(error);
    }
}


export const getSingleProductArray=async(req, res)=>{
    try {
        const {productId} = req.params;
        const singleProduct = await Product.find({_id: productId});
        if(!singleProduct){
            return res.status(401).send("No product exists");
        }

        return res.status(201).json({success: true, singleProduct});
    } catch (error) {
        console.log(error)
    }
}


export const getCategoryWiseProductArray=async(req, res)=>{
    try {
        const {category} = req.body
        const categoryWiseData = await Product.find({productCategory: category});
        if(!categoryWiseData){
            return res.status(401).send("No Data Exists")
        }

        return res.status(201).json({success: true, categoryWiseData});
    } catch (error) {
        console.log(error);
    }
}


export const getNewCollectionArray=async(req, res)=>{
    try {
        const newCollection = await Product.find({productSize: { $gte: 5, $lte: 10}});
        if(!newCollection){
            return res.status(401).send("No Data Exists")
        }

        return res.status(201).json({success: true, newCollection});

    } catch (error) {
        console.log(error);
    }
}