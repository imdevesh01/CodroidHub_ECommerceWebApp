import Seller from "../db/models/seller.js";

const sellerRegister = async (req, res) => {

    const {
        name,
        password,
        email
    } = req.body;

    if (!name || !email || !password) {
        res.status(400);
        throw new Error("All fields are required");
    }

    const sellerExists = await Seller.findOne({ email });

    if (sellerExists) {
        res.status(400);
        throw new Error("Seller already exists");
    }

    const seller = await Seller.create({
        name,
        password,
        email
    })

    if (seller) {
        res.status(201).json({
            _id: seller._id,
            name: seller.name,
            email: seller.email
        });
    } else {
        res.status(400);
        throw new Error("Invalid seller data");
    }
}

export default sellerRegister