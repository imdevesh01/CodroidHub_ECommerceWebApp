import express from "express"

import sellerLogin from "../controllers/sellerLogin.js"
import sellerRegister from "../controllers/sellerRegister.js"

const router = express.Router()

router.post('/', sellerLogin)
router.post('/register', sellerRegister)

export default router