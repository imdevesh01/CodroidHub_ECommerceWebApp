import Seller from "../db/models/seller.js";

const sellerLogin = async (req, res) => {

    const {
        email,
        password
    } = req.body;

    const seller = await Seller.findOne({ email });

    if (seller && (await seller.matchPassword(password))) {
        res.status(201).json({
            _id: seller._id,
            name: seller.name,
            email: seller.email
        })
    } else {
        res.status(401);
        throw new Error("Invalid credentials");
    }
}

export default sellerLogin