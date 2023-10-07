import Product from "../db/models/product.js"
import User from "../db/models/user.js"

const addToCart = async (req, res) => {

    const {
        userId,
        productId
    } = req.body

    const product = await Product.findById(productId)
    const cart = await User.updateOne(
        { _id: userId },
        { $push: { cart: product } }
    )
    // res.json({ cart })
    res.json({ message: "hi" })
}

export default addToCart