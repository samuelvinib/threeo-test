import React from 'react';
import '../styles/App.css';

const NotFoundPage: React.FC = () => {
    return (
        <div className="container">
            <h2>404 - Not Found</h2>
            <p>The page you are looking for does not exist.</p>
        </div>
    );
};

export default NotFoundPage;
