import User from "../db/models/user.js";

const register = async (req, res) => {

    const {
        name,
        password,
        email,
        address
    } = req.body;

    if (!name || !email || !password || !address) {
        res.status(400);
        throw new Error("All fields are required");
    }

    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(400);
        throw new Error("User already exists");
    }

    const user = await User.create({
        name,
        password,
        email,
        address
    })

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email
        });
    } else {
        res.status(400);
        throw new Error("Invalid user data");
    }
}

export default register