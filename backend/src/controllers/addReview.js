import Product from "../db/models/product.js";

const addReview = async (req, res) => {

    const {
        review,
        productId,
    } = req.body;

    // const customerReview =
    await Product.updateOne(
        { _id: productId },
        { $push: { reviews: review } }
    )

    // res.json({ message: "Review added successfully!" })
    // console.log("Review added successfully");
    // console.log(customerReview);
}

export default addReview