import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/App.css';

const Header = () => {
    return (
        <header>
            <h1>My App</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/calculator">Calculator</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
