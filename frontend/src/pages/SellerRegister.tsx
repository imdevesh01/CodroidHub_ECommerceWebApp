import { useAtom } from "jotai";
import { Seller, emailAtom, isSellerAuthAtom, nameAtom, passwordAtom, sellerAtom } from "../stores/auth.ts";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

type Callback = {
    data: Seller;
}

const SellerRegister = () => {

    const navigate = useNavigate()

    const [name, setName] = useAtom(nameAtom)
    const [email, setEmail] = useAtom(emailAtom)
    const [password, setPassword] = useAtom(passwordAtom)

    const [, setIsSellerAuth] = useAtom(isSellerAuthAtom)

    const [, setSeller] = useAtom(sellerAtom)


    const registerSeller = async () => {

        const registerSellerCallback: Callback = await axios.post(`${import.meta.env.VITE_SERVER_PORT}/seller/login/register`, {
            name,
            email,
            password,
        })

        setName("")
        setEmail("")
        setPassword("")

        setSeller(registerSellerCallback.data)

        setIsSellerAuth(true)

        navigate('/seller')

        return registerSellerCallback
    }

    const mutation = useMutation({ mutationFn: registerSeller })

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()

        mutation.mutate()
    }

    return (
        <div>

            {mutation.isLoading ? (
                "Registering..."
            ) : (
                <div>
                    {mutation.isError ? (
                        <div>An error occurred</div>
                    ) : null}

                    {mutation.isSuccess ?
                        <div>
                            Registered!
                        </div> : null}
                </div>
            )}

            <h1
                className="text-3xl">Seller Register</h1>

            <form
                onSubmit={handleSubmit}
                className="flex
                flex-col
                w-1/4">

                {/* Name */}
                <label>Name</label>
                <input
                    name="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    title="name"
                    className="
                        border-2 
                        border-black"/>

                {/* Email */}
                <label>Email</label>
                <input
                    name="email"
                    type="text"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    title="name"
                    className="
                        border-2 
                        border-black"/>

                {/* Password */}
                <label>Password</label>
                <input
                    name="password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    title="name"
                    className="
                        border-2 
                        border-black"/>


                <button
                    type="submit"
                    className="p-2
                     m-2
                     bg-blue-600
                     text-white
                      rounded-lg">Register</button>

            </form>

            <div>
                Have an account ?
                <Link
                    to={'/seller-login'}
                    className="
                    p-2
                    m-2
                    bg-green-600
                    text-white
                    rounded-lg"
                >Login</Link>
            </div>

        </div>
    );
}

export default SellerRegister;