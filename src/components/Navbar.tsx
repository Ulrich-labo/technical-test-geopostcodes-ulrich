import React from 'react';
import { Link } from 'react-router-dom';
import { GeopostcodesLogo, Profile } from '../urls.tsx';
import './css/Navbar.css';
import { useNavigate } from 'react-router-dom';

/**
 *  This component renders the navigation bar of the application
 * @returns {ReactElement} The JSX element representing the navigation bar
 */
function Navbar() {
    // used to handle the redirection when a btn is clicked
    const navigate = useNavigate();
    const handleCardClick = () => {
        navigate('/user-message');
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg" id="Nav">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src={GeopostcodesLogo} alt="GeoPostcodes Logo" />
                    </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active text-white" aria-current="page" to="/data-explorer">Data Explorer</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active text-white" aria-current="page" to="/user-message">Map Explorer</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active text-white" aria-current="page" to="/user-message">Download Center</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active text-white" aria-current="page" to="/user-message">Knowledge Base</Link>
                            </li>
                        </ul>

                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search with name Country " aria-label="Search" />
                            <button className="btn start-btn" onClick={handleCardClick}>Search</button>
                        </form>

                        <li className="nav-item dropdown">
                            <a className="text-decoration-none text-light dropdown-toggle ms-3" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <img className="rounded-circle bg-white" src={Profile} height="30" />
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li><a className="dropdown-item" href="/user-message">Sign in</a></li>
                                <li><a className="dropdown-item" href="/user-message">Sign out</a></li>
                                <li><a className="dropdown-item" href="/user-message">Profile</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="/user-message">Register</a></li>
                            </ul>
                        </li>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
