import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Calculator from './components/Calculator';
import { getCurrentUser } from './services/authServices';

const App: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(!!getCurrentUser());

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login onLogin={handleLogin} />} />
                <Route path="/register" element={<Register />} />
                <Route
                    path="/calculator"
                    element={isLoggedIn ? <Calculator /> : <Navigate to="/login" />}
                />
                <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
        </Router>
    );
};

export default App;
