import Auth from "../models/authSchema.js";



const isAuthorized=async(req, res, next)=>{
    try {
        const userId = req.id;
        const userExisted = await Auth.findOne({_id: userId});
        if(!userExisted){
            return res.status(400).json({success: false, mssg : "Invalid Email or Password"})
        }
        if(!userExisted.isAdmin){
            return res.status(401).json({success: false, mssg : "User is not authorized"})
        }
        next();
    } catch (error) {
        console.log(error);
    }
}

export default isAuthorized
