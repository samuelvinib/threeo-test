import React, {useEffect, useState} from 'react';
import axios from 'axios';
import '../styles/App.css';
import api from '../services/api';

interface LoginPageProps {
    onLogin: (token: string) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [ok, setOk] = useState('');

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await axios.get<string>('/');
                setOk(response.data);
            } catch (error) {
                setOk('Error fetching items');
            }
        };
        fetchItems();
    }, []);

    const handleLogin = async () => {
        try {
            const response = await axios.post<{ token: string }>('/api/login', { username, password });
            const token = response.data.token;
            onLogin(token);
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    return (
        <div className="container">
            <h2>Login {ok}</h2>
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default LoginPage;
