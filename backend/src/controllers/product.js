import Product from "../db/models/product.js"

const product = async (req, res) => {

    const {
        productId
    } = req.params

    const reqProduct = await Product.findById(productId)

    res.json(reqProduct)
}

export default product