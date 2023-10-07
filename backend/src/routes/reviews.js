import express from "express"

import reviews from "../controllers/reviews.js"

const router = express.Router()

router.get('/:productId', reviews)

export default router