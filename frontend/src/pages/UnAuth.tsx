import { Link } from "react-router-dom";

const UnAuth = () => {
    return (
        <div>
            <h1
                className="
            text-4xl">Error</h1>
            <h2
                className="
            text-2xl">You are unauthorized!</h2>
            <p>Please login to view the page</p>

            <Link
                to={'/'}
                className="text-2xl bg-blue-600 text-white"
            >Go to Home</Link>
        </div>
    );
}

export default UnAuth;