import Product from "../db/models/product.js"

const deleteProduct = async (req, res) => {

    const {
        productId,
    } = req.body

    await Product.findByIdAndDelete(productId)

    res.json({ message: "Product deleted successfully" })

}

export default deleteProduct