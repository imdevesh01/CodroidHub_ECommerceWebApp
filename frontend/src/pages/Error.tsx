import { Link, useRouteError } from "react-router-dom";

function Error() {

    const error = useRouteError();

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <b>{error.status}</b>
                <br />
                <i>{error.statusText || error.message || err}</i>
            </p>

            <Link
                to={'/'}
                className="text-2xl bg-blue-600 text-white"
            >Go to Home</Link>
        </div>
    );
}

export default Error;