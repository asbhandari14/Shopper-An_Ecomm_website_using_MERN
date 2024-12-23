import express from "express";
const router = express.Router();
import upload from "../middlewares/multerConfig.js";
import { addProduct, getAllProductArray, getSingleProductArray, getCategoryWiseProductArray, getNewCollectionArray } from "../controllers/product-controller.js";



router.route("/addProduct").post(upload.single("product"), addProduct);
router.route("/getAllProduct").get(getAllProductArray);
router.route("/getSingleProduct/:productId").get(getSingleProductArray);
router.route("/getCategoryWiseProduct").post(getCategoryWiseProductArray);
router.route("/getNewCollection").get(getNewCollectionArray);


export default router;