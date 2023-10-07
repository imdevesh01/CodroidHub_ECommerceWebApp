import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { isSellerAuthAtom, sellerAtom } from "../stores/auth.ts";


const SellerLogout = () => {

    const navigate = useNavigate()

    const [, setIsSellerAuth] = useAtom(isSellerAuthAtom)
    const [, setSeller] = useAtom(sellerAtom)

    const logoutSeller = async () => {

        const logoutUserCallback = await axios.post(`${import.meta.env.VITE_SERVER_PORT}/logout`)

        setSeller({
            _id: "",
            name: "",
            email: "",
        })
        setIsSellerAuth(false)
        navigate('/')

        return logoutUserCallback
    }

    const mutation = useMutation({ mutationFn: logoutSeller })

    const logoutHandler = () => {

        mutation.mutate()
    }

    return (
        <div onClick={logoutHandler}>
            Logout
        </div>
    );
}

export default SellerLogout;