import { Product as ProductType } from "../stores/addProduct.ts";
import { Link } from "react-router-dom";

const Product = ({ _id, name, image, price, rating, category }: ProductType) => {

    const kebabCase = (string: string) => string
        .replace(/([a-z])([A-Z])/g, "$1-$2")
        .replace(/[\s_]+/g, '-')
        .toLowerCase();


    return (
        <div
            className="p-4 border-2">

            <Link to={`/products/${kebabCase(name)}/${_id}`}>

                <p
                    className="text-4xl"> {name} </p>
                <img src={image} alt={name} />
                <p> $ {price} </p>
                <p> {rating} </p>
                <p> {category} </p>

            </Link>

        </div>
    );
}

export default Product;