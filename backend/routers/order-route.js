import express from "express";
const router = express.Router();
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { placedOrder, userAllOrder, allOrders } from "../controllers/order-controller.js";



router.route("/orderPlaced").post(isAuthenticated, placedOrder);
router.route("/specifcUserOrders").get(isAuthenticated, userAllOrder);
router.route("/allOrders").get(allOrders);


export default router;