import Seller from "../db/models/seller.js"

const sellerProducts = async (req, res) => {

    const {
        sellerId
    } = req.body


    const products = await Seller.findById(sellerId).populate("products")

    res.json(products)
    // res.json({ message: "hi" })
}

export default sellerProducts