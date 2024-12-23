import express from "express";
const router = express.Router();


import { AllUserData, RegisterUser, loginUser } from "../controllers/auth-controller.js";


router.route("/allData").get(AllUserData)
router.route("/signup").post(RegisterUser)
router.route("/login").post(loginUser)


export default router