import axios from "axios";

import { Product as ProductType } from "../stores/addProduct.js";
import { useQuery } from "@tanstack/react-query";
import Product from "../components/Product.js";
import { useAtom } from "jotai";
import { isAuthAtom, userAtom } from "../stores/auth.js";
import UnAuth from "./UnAuth.tsx";

type Response = {
    data: {
        cart: ProductType[],
    };
}

const Cart = () => {

    const [isAuth] = useAtom(isAuthAtom)
    const [user] = useAtom(userAtom)

    const getCart = async () => {

        const response: Response = await axios.post(`${import.meta.env.VITE_SERVER_PORT}/cart`, {
            userId: user._id
        })

        return response.data
    }

    const {
        isLoading,
        // isError,
        data,
        // error,
    } = useQuery({
        queryKey: ["cart"],
        queryFn: getCart
    })

    if (!isAuth) return <UnAuth />

    return (
        <div>
            {

                isLoading ?
                    <span>Loading...</span> :
                    // isError ?
                    //   <Error /> :

                    < div className="text-2xl">
                        {data ? data.cart.map(product => (

                            <Product
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
                                stock={product.stock} />

                        ))
                            : null}
                    </div>
            }
        </div>
    );
}

export default Cart;