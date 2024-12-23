import jwt from "jsonwebtoken";




const isAuthenticated=async(req, res, next)=>{
    try {
        const token = req.cookies.token;

        if(!token){
            return res.status(401).json({success: false, mssg : "Not Authenticated"});
        }

        let decode_token = await jwt.verify(token, process.env.JWT_SECRET_KEY);

        if(!decode_token){
            return res.status(400).json({success: false, mssg : "Invalid User"});
        }

        req.id = decode_token.id;
        next();
    } catch (error) {
        console.log(error);
        return res.status(400).json({success: false, mssg : "Invalid Server Error"});
    }
}

export default isAuthenticated