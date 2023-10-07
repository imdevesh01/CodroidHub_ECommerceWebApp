import { useAtom } from "jotai";
import { Link, NavLink } from "react-router-dom";
import { isAuthAtom } from "../stores/auth.ts";
import Profile from "./Profile.tsx";

const Navbar = () => {

    const [isAuth] = useAtom(isAuthAtom)

    return (
        <div
            className="
        p-6
        flex 
        justify-between
        items-center
        gap-8">
            <h1
                className="
            text-4xl">
                <Link to={'/'} >E-Comm</Link>
            </h1>

            <div
                className="
                flex
                gap-4">

                {isAuth ? null :
                    <NavLink
                        // className={({ isActive, isPending }) =>
                        //     isPending ? "pending" : isActive ? "text-blue-600" : ""
                        // }
                        to={'/login'}
                    >Login</NavLink>}

                {isAuth ? null :
                    <NavLink
                        // className={({ isActive, isPending }) =>
                        //     isPending ? "pending" : isActive ? "text-blue-600" : ""
                        // }
                        to={'/seller-login'}
                    >Seller</NavLink>}

                {isAuth ?
                    <Profile />
                    : null}

            </div>
        </div>
    );
}

export default Navbar;