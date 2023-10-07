import User from "../db/models/user.js"

const cart = async (req, res) => {

    const {
        userId
    } = req.body

    const cart = await User.findById(userId).populate("cart")

    res.json(cart)
    // res.json({ message: "hi" })
}

export default cart