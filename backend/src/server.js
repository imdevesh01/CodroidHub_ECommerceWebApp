import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import color from "colors"

import connectDB from "./db/config.js"
import { notFoundHandler, errorHandler } from "./middlewares/error.js"

// Routes
import home from "./routes/home.js"
import addProducts from "./routes/addProduct.js"
import login from "./routes/login.js"
import logout from "./routes/logout.js"
import product from "./routes/product.js"
import cart from "./routes/cart.js"
import addReview from "./routes/addReview.js"
import reviews from "./routes/reviews.js"

import sellerLogin from "./routes/sellerLogin.js"
import sellerProducts from "./routes/sellerProducts.js"
import deleteProduct from "./routes/deleteProduct.js"


dotenv.config()
connectDB()

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

/**
 * @type {string | number}
 */
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`backend listening on port: ${PORT}`.cyan.underline);
})

// user routes
app.use('/', home)
app.use('/login', login)
app.use('/logout', logout)
app.use('/products', product)
app.use('/cart', cart)
app.use('/addReview', addReview)
app.use('/reviews', reviews)

// seller routes

app.use('/seller/login', sellerLogin)
app.use('/seller/add', addProducts)
app.use('/seller/products', sellerProducts)
app.use('/seller/deleteProduct', deleteProduct)


app.use(notFoundHandler)
app.use(errorHandler)