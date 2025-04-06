import express from "express";
const router = express.Router();
import authenticate from "../Middlewares/authenticate.js";
import {
  getCart
} from "../Controller/cartController.js";

router.get("/",authenticate,getCart);

export default router
