import Product from "../db/models/product.js"

const reviews = async (req, res) => {

    const {
        productId
    } = req.params

    const product = await Product.findById(productId)
    // .select({ reviews: 1, _id: 0 })

    res.json(product)
}

export default reviews