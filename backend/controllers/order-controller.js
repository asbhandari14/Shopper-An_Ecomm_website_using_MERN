import Auth from "../models/authSchema.js";
import Order from "../models/orderSchema.js";





export const placedOrder=async(req, res)=>{
    try {
        const userId = req.id;
        const {orderedProduct, totalAmount} = req.body;
        const userInfo = await Auth.findOne({_id: userId}).select("-password");

        if(!userInfo){
            return res.status(400).json({success: false, mssg : "User doesn't exist"})
        }

        const createdOrder = await Order.create({userId, userInfo, orderedProduct, totalAmount});

        if(!createdOrder){
            return res.status(400).json({success: false, mssg : "Something went wrong"})
        }

        return res.status(201).json({success: true, mssg : "Order placed successfully"})

    } catch (error) {
        console.log(error);
    }
}


export const userAllOrder=async(req, res)=>{
    try {
        const userId = req.id;

        const userAllOrder = await Order.find({userId: userId});

        if(!userAllOrder){
            return res.status(200).json({success: false, mssg : "No order existed"})
        }

        return res.status(201).json({success: true, userAllOrder})

    } catch (error) {
        console.log(error);
    }
}


export const allOrders=async(req, res)=>{
    try {

        const allOrders = await Order.find({});

        if(!allOrders){
            return res.status(200).json({success: false, mssg : "No order existed"})
        }

        return res.status(201).json({success: true, allOrders})

    } catch (error) {
        console.log(error);
    }
}