import { useQuery } from "@tanstack/react-query";
import { Product as ProductType, sellerIdAtom } from "../stores/addProduct.ts";
import { useAtom } from "jotai";
import axios from "axios";
import SellerProductComponent from "../components/SellerProductComponent.tsx";

type Response = {
    data: {
        products: ProductType[];
    }
}

const SellerProducts = () => {

    const [sellerId] = useAtom(sellerIdAtom)

    const getProducts = async () => {

        const response: Response = await axios.post(`${import.meta.env.VITE_SERVER_PORT}/seller/products`, {
            sellerId
        })

        return response.data
    }

    const {
        isLoading,
        isError,
        data
    } = useQuery({
        queryKey: ["product"],
        queryFn: getProducts
    })

    return (
        <div>
            {
                isLoading
                    ? <div>Loading...</div>
                    : isError
                        ? <div>Error occurred</div>
                        : <div>
                            {data
                                ? data.products.map((product: ProductType) => (
                                    <SellerProductComponent
                                        _id={product._id}
                                        name={product.name}
                                        image={product.image}
                                        price={product.price}
                                        rating={product.rating}
                                        details={product.details}
                                        category={product.category}
                                        keywords={product.keywords}
                                        stock={product.stock}
                                    />
                                ))
                                : null}
                        </div>
            }
        </div>
    );
}

export default SellerProducts;