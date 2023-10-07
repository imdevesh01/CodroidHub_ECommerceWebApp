import Product from "../db/models/product.js"

const home = async (req, res) => {
    const products = await Product.find()
    res.json({ products })
    // res.json({ message: "hi" })
}

export default home