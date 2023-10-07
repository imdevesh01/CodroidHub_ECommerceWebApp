import { Link } from "react-router-dom";
import SellerLogout from "./SellerLogout.tsx";

const SellerNavbar = () => {
    return (
        <div
            className="flex justify-between m-8 items-center">

            <Link
                to={'/seller'}
                className="text-xl"
            >Home</Link>

            <Link
                to={'/seller/logout'}
                className="hover:underline"
            ><SellerLogout /></Link>
        </div>
    );
}

export default SellerNavbar;