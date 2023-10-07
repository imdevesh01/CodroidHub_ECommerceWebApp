import express from "express"

import deleteProduct from "../controllers/deleteProduct.js"

const router = express.Router()

router.post('/', deleteProduct)

export default router