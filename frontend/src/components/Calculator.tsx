import React, { useState } from 'react';
import api from '../services/api';
import Header from "./common/Header";
import { Link, useNavigate } from 'react-router-dom';
import '../styles/styles.css';
import { logout } from "../services/authServices";

const Calculator: React.FC = () => {
    const navigate = useNavigate();
    const [value1, setValue1] = useState<number | string>('');
    const [value2, setValue2] = useState<number | string>('');
    const [result, setResult] = useState<number | null>(null);

    const handleOperation = async (operation: string) => {
        try {
            const response = await api.post('/calculate', {
                firstValue: Number(value1),
                secondValue: Number(value2),
                operation,
            },);
            setResult(response.data.result);
        } catch (error: any) {
            if (error.response.status === 401) {
                logout();
                navigate('/login');
                alert('unauthenticated user');
            } else {
                alert(error.message);
            }
        }
    };

    return (
        <div>
            <Header />
            <div className="center-container">
                <div>
                    <div>
                        <input
                            type="number"
                            value={value1}
                            onChange={(e) => setValue1(e.target.value)}
                        />
                        <input
                            type="number"
                            value={value2}
                            onChange={(e) => setValue2(e.target.value)}
                        />
                    </div>
                    <div className="center-buttons">
                        <button onClick={() => handleOperation('add')}>Add</button>
                        <button onClick={() => handleOperation('subtract')}>Subtract</button>
                        <button onClick={() => handleOperation('multiply')}>Multiply</button>
                        <button onClick={() => handleOperation('divide')}>Divide</button>
                    </div>
                </div>
            </div>
            <p className='result'>{result !== null && <div>Result: {result}</div>}</p>
        </div>
    );
};

export default Calculator;
