import { useAtom } from "jotai";
import { User, emailAtom, isAuthAtom, passwordAtom, userAtom } from "../stores/auth.ts";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import '../styles/login.css'

type Callback = {
    data: User;
}

const Login = () => {

    const navigate = useNavigate()

    const [email, setEmail] = useAtom(emailAtom)
    const [password, setPassword] = useAtom(passwordAtom)

    const [, setUser] = useAtom(userAtom)
    const [, setIsAuth] = useAtom(isAuthAtom)

    const verifyUser = async () => {

        const verifyUserCallback: Callback = await axios.post(`${import.meta.env.VITE_SERVER_PORT}/login`, {
            email,
            password
        })

        setEmail("")
        setPassword("")

        setUser(verifyUserCallback.data)

        setIsAuth(true)

        navigate(-1)

        return verifyUserCallback
    }

    const mutation = useMutation({ mutationFn: verifyUser })

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()

        mutation.mutate()
    }

    return (
        <div className="outer">

            {mutation.isLoading ? (
                "Logging..."
            ) : (
                <div>
                    {mutation.isError ? (
                        <div>An error occurred</div>
                    ) : null}

                    {mutation.isSuccess ?
                        <div>
                            Logged In!
                        </div> : null}
                </div>
            )}

            <h1
                className="text-3xl"><span>Lo</span>g<span>in</span></h1>

            <form
                onSubmit={handleSubmit}
                className="flex
                flex-col
                w-1/4">

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
                      rounded-lg">Login</button>

            </form>

            <div>
                New ?
                <Link
                    to={'/login/register'}
                    className="
                    p-2
                    m-2
                    bg-green-600
                    text-white
                    rounded-lg"
                >Register</Link>
            </div>
        </div>
    );
}

export default Login;