import mongoose from "mongoose";





const orderSchema = mongoose.Schema({
    userId : {
        type : String, 
        required: true
    },
    userInfo : {
        type : Object,
        required: true
    },
    orderedProduct : {type : Array, default : []},
    orderStatus : {
        type : String,
        default : "Pending"
    },
    orderedMethod : {
        type : String,
        default : "COD"
    },
    payment : {
        type : String,
        default : "Pending"
    },
    orderDate : {
        type : Date,
        default : Date.now
    },
    totalAmount : {
        type : Number,
        required : true
    }
});


const Order = mongoose.model("Order", orderSchema);

export default Order;