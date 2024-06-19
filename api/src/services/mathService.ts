export const calculate = (firstValue: number, secondValue: number, operation: string): number => {
    switch (operation) {
        case 'add':
            return firstValue + secondValue;
        case 'subtract':
            return firstValue - secondValue;
        case 'multiply':
            return firstValue * secondValue;
        case 'divide':
            if (secondValue === 0) {
                throw new Error('Division by zero');
            }
            return firstValue / secondValue;
        default:
            throw new Error('Invalid operation');
    }
};
