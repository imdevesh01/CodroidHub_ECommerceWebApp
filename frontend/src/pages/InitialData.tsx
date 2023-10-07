import { products } from "../stores/initialData.json"

import { Product as ProductType } from "../stores/addProduct.ts";
import Product from "../components/Product.tsx";
import '../styles/home.css'

const InitialData = () => {
    return (
        <div
            className="
                mx-4
                grid
                grid-cols-3
                h-80
                items-end
                gap-8">
            {products.map((product: ProductType) => (
                <div className="bg-blue-100 p-4 rounded-lg fro">

                    <p
                        className="text-2xl"> {product.name} </p>
                    <img
                        className="rounded-full w-60 h-60"
                        src={product.image}
                        alt={product.name} />
                    <p> $ {product.price} </p>
                    <p> {product.rating} </p>
                    <p> {product.category} </p>
                </div>
            ))}

            {/* <Product
                    key={product._id}
                    _id={product._id}
                    name={product.name}
                    image={product.image}
                    price={product.price}
                    rating={product.rating}
                    details={product.details}
                    reviews={product.reviews}
                    category={product.category}
                    keywords={product.keywords}
                    stock={product.stock} />))} */}
        </div>
    );
}

export default InitialData;