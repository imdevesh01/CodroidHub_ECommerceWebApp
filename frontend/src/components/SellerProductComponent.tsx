import { useState } from "react";
import { Product as ProductType } from "../stores/addProduct.ts";
import DeleteProduct from "./DeleteProduct.tsx";

const SellerProductComponent = ({ _id, name, image, price, rating, details, category, keywords, stock }: ProductType) => {

    const [isChecked, setIsChecked] = useState(false)

    return (
        <div
            className="m-2 p-2 w-fit bg-blue-100"
        >
            <p
                className="text-5xl"> {name} </p>
            <img src={image} alt="" />
            <p> $ {price} </p>
            <p> {rating ? `${rating} Star` : "No reviews yet"} </p>
            <p> {details} </p>
            <p> Category: {category} </p>
            <div> {keywords.map((key: string) => (
                <p key={key}> #{key} </p>
            ))} </div>
            <p> Stock: {stock} items </p>

            <div>
                <input
                    type="checkbox"
                    title="delete"
                    onClick={() => setIsChecked(!isChecked)}
                />
                <label>Delete</label>
            </div>

            {isChecked
                ? <DeleteProduct productId={_id} />
                : null}

        </div>
    );
}

export default SellerProductComponent;