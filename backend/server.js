import dotenv from "dotenv";
dotenv.config();
import express from "express";
import authRouter from "./routers/auth-router.js";
import productRouter from "./routers/product-router.js";
import orderRouter from "./routers/order-route.js";
import connectionDB from "./Database/connectionDB.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";


const app = express();
const PORT = process.env.PORT;
const __dirname = path.resolve();


app.use(cors({ origin : "http://localhost:5173" , methods: ['GET', 'POST', 'DELETE', 'PUT'], allowedHeaders: ["Content-Type", "Authorization", "Cache-Control", "Expires", "Pragma"] , credentials: true}))


app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cookieParser());

app.use("/auth", authRouter);
app.use("/product", productRouter);
app.use("/order", orderRouter);


console.log(__dirname)
app.use(express.static(path.join(__dirname, "/frontend/dist"))); 
app.get("*", (req, res)=>{
  res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
})



connectionDB().then(()=>{
    app.listen(PORT, (err)=>{
        if(err) console.log(err);
        else{
            console.log(`Server is connected at the port : ${PORT}`);
        }
    })
})
