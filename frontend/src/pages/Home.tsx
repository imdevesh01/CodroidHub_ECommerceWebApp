import { useQuery } from "@tanstack/react-query";
import axios from "axios";
// import Error from "./pages/Error.tsx";

import { Product as ProductType } from "../stores/addProduct.js";
import Product from "../components/Product.js";

type Response = {
    data: {
        products: ProductType[]
    };
}

const Home = () => {

    const getHome = async () => {
        const response: Response = await axios.get(import.meta.env.VITE_SERVER_PORT)
        console.log(response.data);

        return response.data
    }

    const {
        isLoading,
        // isError,
        data,
        // error,
    } = useQuery({
        queryKey: ["home"],
        queryFn: getHome
    })

    return (
        <div>
            {

                isLoading ?
                    <span>Loading...</span> :
                    // isError ?
                    //   <Error /> :

                    < div className="text-2xl">
                        {data ? data.products.map((product: ProductType) => (

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

                        )) : null}
                    </div>
            }
        </div>
    );
}

export default Home;