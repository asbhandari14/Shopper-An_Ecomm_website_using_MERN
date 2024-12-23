import {v2 as cloudinary} from "cloudinary";
import fs from "fs";



//  Configuration
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
});


//  Upload an image
const uploadImageOnCloudinary = async (filePath, folderName) => {
    const uploadResult = await cloudinary.uploader.upload(filePath, { folder: folderName });

    try {
        fs.unlinkSync(filePath);
    }
    catch (error) {
        console.log("Failed to delete the image from the server", error);
    };
    
    return ({
        secure_url: uploadResult.secure_url,
        public_id: uploadResult.public_id
    })
}

export default uploadImageOnCloudinary;

