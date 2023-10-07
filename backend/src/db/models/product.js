import mongoose from "mongoose"

// const reviewSchema = mongoose.Schema({})

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    rating: {
        type: Number,
    },
    details: {
        type: String,
    },
    reviews: {
        type: [String],
    },
    category: {
        type: String,
        required: true,
    },
    keywords: {
        type: [String],
        required: true,
    },
    stock: {
        type: Number,
        required: true,
    },
})

const Product = mongoose.model('Product', productSchema)

export default Product