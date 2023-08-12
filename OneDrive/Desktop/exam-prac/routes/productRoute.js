import express from "express"
const router = express.Router()

import { createproduct, deleteProduct, getAllProducts, upadateProduct } from "../controllers/productController.js"


router.post("/create", createproduct)
router.get("/", getAllProducts)
router.put("/update/:id", upadateProduct)
router.delete("/deleteproduct/:id", deleteProduct)

export default router