import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { isAuthAtom, userAtom } from "../stores/auth.ts";


const Logout = () => {

    const navigate = useNavigate()

    const [, setIsAuth] = useAtom(isAuthAtom)
    const [, setUser] = useAtom(userAtom)

    const logoutUser = async () => {

        const logoutUserCallback = await axios.post(`${import.meta.env.VITE_SERVER_PORT}/logout`)

        setUser({
            _id: "",
            name: "",
            email: "",
            address: "",
        })
        setIsAuth(false)
        navigate('/')

        return logoutUserCallback
    }

    const mutation = useMutation({ mutationFn: logoutUser })

    const logoutHandler = () => {

        mutation.mutate()
    }

    return (
        <div onClick={logoutHandler}>
            Logout
        </div>
    );
}

export default Logout;