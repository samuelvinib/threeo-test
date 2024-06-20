import React, { useState } from 'react';
import api from '../services/api';
import Header from "./common/Header";
import '../styles/styles.css';

const Calculator: React.FC = () => {
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
        } catch (error:any) {
            if (error.response.status === 401) {
                alert('psé amigo');
            }
            alert(error.message);
        }
    };

    return (
            <div>
                <Header />
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
            <div>
                <button onClick={() => handleOperation('add')}>Add</button>
                <button onClick={() => handleOperation('subtract')}>Subtract</button>
                <button onClick={() => handleOperation('multiply')}>Multiply</button>
                <button onClick={() => handleOperation('divide')}>Divide</button>
            </div>
            {result !== null && <div>Result: {result}</div>}
        </div>
    );
};

export default Calculator;
