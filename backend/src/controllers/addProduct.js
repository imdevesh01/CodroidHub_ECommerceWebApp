import Product from "../db/models/product.js"
import Seller from "../db/models/seller.js"

const addProduct = async (req, res) => {
    const {
        name,
        image,
        price,
        // rating,
        details,
        // reviews,
        category,
        keywords,
        stock,
        sellerId
    } = req.body

    const product = await Product.create(
        {
            name,
            image,
            price,
            // rating,
            details,
            // reviews,
            category,
            keywords,
            stock
        }
    )

    await Seller.updateOne(
        { _id: sellerId },
        { $push: { products: product } }
    )
    // res.json({ seller })

    // res.json(product)

    res.json({ message: "Product added successfully" })

}

export default addProduct