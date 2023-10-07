import express from "express"
import product from "../controllers/product.js"

const router = express.Router()

router.get('/:productId', product)

export default router