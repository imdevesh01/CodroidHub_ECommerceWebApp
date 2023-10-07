import User from "../db/models/user.js";

const login = async (req, res) => {

    const {
        email,
        password
    } = req.body;

    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email
        })
    } else {
        res.status(401);
        throw new Error("Invalid credentials");
    }
}

export default login