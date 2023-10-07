import { Outlet } from "react-router-dom";
import SellerNavbar from "./SellerNavbar.tsx";
import UnAuth from "../pages/UnAuth.tsx";
import { useAtom } from "jotai";
import { isSellerAuthAtom } from "../stores/auth.ts";

const SellerLayout = () => {

    const [isSellerAuth] = useAtom(isSellerAuthAtom)
    if (!isSellerAuth) return <div><UnAuth /> login as a seller</div>

    return (
        <div>

            <SellerNavbar />

            <Outlet />
        </div>
    );
}

export default SellerLayout;