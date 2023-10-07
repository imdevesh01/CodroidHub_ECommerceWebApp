import express from "express"

import addToCart from "../controllers/addToCart.js"
import cart from "../controllers/cart.js"

const router = express.Router()

router.post('/', cart)
router.post('/add', addToCart)

export default router