import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../styles/App.css';
import {getCurrentUser, logout} from "../../services/authServices";


const Header = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    const isLoggedIn = getCurrentUser() !== null;

    return (
        <header>
            <h1>Teste Threeo IT</h1>
            <nav>
                <ul>
                    <li><Link to="/calculator">Calculator</Link></li>
                    {isLoggedIn ? (
                        <>
                            <li><button onClick={handleLogout}>LOGOUT</button></li>
                        </>
                    ) : (
                        <li><Link to="/login">Login</Link></li>
                    )}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
