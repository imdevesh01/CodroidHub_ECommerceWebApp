import { useAtom } from "jotai";
import { sellerAtom } from "../stores/auth.ts";
import { Link } from "react-router-dom";
import { sellerIdAtom } from "../stores/addProduct.ts";

const SellerHome = () => {

    const [seller] = useAtom(sellerAtom)
    const [, setSellerId] = useAtom(sellerIdAtom)

    setSellerId(seller._id)

    return (
        <div className="flex flex-col m-8 gap-8 items-center">

            <h1 className="text-3xl mb-8">Welcome {seller.name}!</h1>


            <Link
                to={'/seller/add'}
                className="text-xl p-2 text-white rounded bg-blue-600"
            >Add Product</Link>

            <Link
                to={'/seller/products'}
                className="text-xl p-2 text-white rounded bg-pink-600"
            >See Products</Link>

        </div>
    );
}

export default SellerHome;