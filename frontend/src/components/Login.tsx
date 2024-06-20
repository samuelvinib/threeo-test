import React, { useState } from 'react';
import { login } from '../services/authServices';
import { LoginProps } from '../types';
import { Link, useNavigate } from 'react-router-dom';
import Header from "./common/Header";
import '../styles/styles.css';

const Login: React.FC<LoginProps> = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            await login(username, password);
            onLogin();
            navigate('/calculator');
        } catch (error) {
            alert('Login failed. Please check your credentials.');
        }
    };

    return (
        <div>
            <Header />
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Login</button>
            </form>
            <Link to="/register">Don't have an account? Register here</Link>
        </div>
    );
};

export default Login;
