import express from "express"
import sellerProducts from "../controllers/sellerProducts.js"

const router = express.Router()

router.post('/', sellerProducts)

export default router