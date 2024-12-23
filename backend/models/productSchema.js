import mongoose from "mongoose";





const productSchema = new mongoose.Schema({
    productTitle : {
        type : "String",
        required : true
    },
    productDescription : {
        type : "String",
        required : true
    },
    productCategory : {
        type : "String",
        required : true
    },
    productNewPrice : {
        type : Number,
        required : true
    },
    productOldPrice : {
        type : Number,
        required : true
    },
    productStock : {
        type : Number,
        required : true
    },
    productSize : [String],
    productTags : [String],
    productImg : {
        secure_url : {
            type : String,
            required: true
        },
        public_id: {
            type : String,
            required: true
        }
    },
}, {timestamps: true})


const Product = new mongoose.model("Product", productSchema);

export default Product