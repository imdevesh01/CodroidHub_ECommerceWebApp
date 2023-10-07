import jwt from 'jsonwebtoken';

import User from '../db/models/user.js';

const protect = async (req, res, next) => {

    let token;
    token = req.cookies.jwt;

    if (token) {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            req.user = await User.findById(decoded.userId).select('-password');

            next();
        } catch (error) {
            res.status(401);
            throw new Error("Unauthorized, invalid token");
        }
    } else {
        res.status(401);
        throw new Error("Unauthorized, no token");
    }
};

export default protect