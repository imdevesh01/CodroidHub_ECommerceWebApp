import { useAtom } from "jotai";
import { User, addressAtom, emailAtom, isAuthAtom, nameAtom, passwordAtom, userAtom } from "../stores/auth.ts";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

type Callback = {
    data: User;
}

const Register = () => {

    const navigate = useNavigate()

    const [name, setName] = useAtom(nameAtom)
    const [email, setEmail] = useAtom(emailAtom)
    const [password, setPassword] = useAtom(passwordAtom)
    const [address, setAddress] = useAtom(addressAtom)

    const [, setUser] = useAtom(userAtom)
    const [, setIsAuth] = useAtom(isAuthAtom)

    const registerUser = async () => {

        const registerUserCallback: Callback = await axios.post(`${import.meta.env.VITE_SERVER_PORT}/login/register`, {
            name,
            email,
            password,
            address
        })

        setName("")
        setEmail("")
        setPassword("")
        setAddress("")

        setUser(registerUserCallback.data)

        setIsAuth(true)

        navigate('/')

        return registerUserCallback
    }

    const mutation = useMutation({ mutationFn: registerUser })

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
                className="text-3xl">Register</h1>

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

                {/* Address */}
                <label>Address</label>
                <textarea
                    name="address"
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    cols={30}
                    rows={5}
                    placeholder="address..."
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
                    to={'/login'}
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

export default Register;