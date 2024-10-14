import React from 'react';
import { Link } from 'react-router-dom';


/**
 * A page that is shown when the user tries to access a page that is not yet implemented.
 *
 * @returns {JSX.Element} A JSX element representing the page.
 */
function UserMessage() {

    return (

        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="text-center">
                <h1 className="">
                    Oops! Our Team is still Working On this Side of the app. If you want to know more about GeoPostcodes and our services, click on the button below.
                </h1>
                <Link to="https://www.geopostcodes.com/" className="btn btn-outline-success">
                    Learn About GeoPostcodes
                </Link>
            </div>
        </div>
    );
};

export default UserMessage;
