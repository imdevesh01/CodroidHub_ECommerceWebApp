import mongoose from "mongoose"
import bcrypt from 'bcryptjs';

// const reviewSchema = mongoose.Schema({})

const sellerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    products: {
        type: [mongoose.Types.ObjectId],
        ref: "Product",
    }
})

// bcrypt password hashing middleware
sellerSchema.pre('save', async function (next) {

    if (!this.isModified('password')) {
        next();
    }

    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
});

sellerSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
}

const Seller = mongoose.model('Seller', sellerSchema)

export default Seller