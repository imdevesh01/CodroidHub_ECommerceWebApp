import { Link } from "react-router-dom";
import Logout from "./Logout.tsx";
import { useAtom } from "jotai";
import { userAtom } from "../stores/auth.ts";

const Profile = () => {

    const [user] = useAtom(userAtom)

    return (
        <div>
            <p> {user.name} </p>
            <p> {user.email} </p>
            <Link to={'/cart'}>
                Cart
            </Link>
            <Link
                // className={({ isActive, isPending }) =>
                //     isPending ? "pending" : isActive ? "text-blue-600" : ""
                // }
                to={'/logout'}
            >
                <Logout />
            </Link>
        </div>
    );
}

export default Profile;