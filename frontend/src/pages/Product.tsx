import { useMutation, useQuery } from "@tanstack/react-query";
import { useAtom } from "jotai";
import { isAuthAtom, userAtom } from "../stores/auth.ts";
import axios from "axios";
import { productAtom } from "../stores/productPage.ts";
import { Link, useParams } from "react-router-dom";
import ReviewForm from "../components/ReviewForm.tsx";
import { Product as ProductType } from "../stores/addProduct.ts";
import Reviews from "../components/Reviews.tsx";

type Response = {
    data: ProductType
}

const Product = () => {

    const [isAuth] = useAtom(isAuthAtom)
    const [user] = useAtom(userAtom)
    const [product] = useAtom(productAtom)

    const {
        productId
    } = useParams()

    const getProduct = async () => {

        if (productId) {

            const response: Response = await axios.get(`${import.meta.env.VITE_SERVER_PORT}/products/${productId}`)

            return response.data
        }

    }

    const {
        isLoading,
        // isError,
        data,
        // error,
    } = useQuery({
        queryKey: ["product"],
        queryFn: getProduct
    })

    const addToCart = async () => {

        const addCart = await axios.post(`${import.meta.env.VITE_SERVER_PORT}/cart/add`, {
            userId: user._id,
            productId: product._id,
        })

        console.log(addCart.status);

    }

    const mutation = useMutation({ mutationFn: addToCart })

    const handleCart = () => {

        console.log("Added to cart")
        mutation.mutate()
    }

    return (
        <div
            className="p-4 border-2">

            {
                isLoading ?
                    <span>Loading...</span> :

                    <div>
                        <p
                            className="text-5xl"> {data?.name} </p>
                        <img style={{"width":"100px"}} src={data?.image} alt="" />
                        <p style={{"fontWeight":"bold"}}> $ {data?.price} </p>
                        <p> {data?.rating ? `${data?.rating} Star` : "No reviews yet"} </p>
                        <p> {data?.details} </p>
                        <p> Category: {data?.category} </p>
                        <div> {data?.keywords?.map(key => (
                            <p key={key}> #{key} </p>
                        ))} </div>
                        <p> Stock: {data?.stock} items </p>
                    </div>
            }


            {isAuth
                ? <button
                    type="button"
                    className="p-2
                     m-2
                     bg-pink-600
                     text-white
                      rounded-lg"
                    onClick={handleCart}>Add to Cart</button>
                : <Link
                    to={'/login'}
                    className="p-2
                     bg-blue-600
                     text-white
                      rounded-lg">Add to Cart</Link>}

            <div
                className="my-8">

                {isAuth ? <ReviewForm productId={product._id} /> : null}

                Reviews

                <Reviews productId={productId} />

            </div>

        </div>
    );
}

export default Product;