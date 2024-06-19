import { Request, Response } from 'express';
import { calculate } from '../services/mathService';

export const performCalculation = (req: Request, res: Response): void => {
    const { firstValue, secondValue, operation } = req.body;

    if(!operation || typeof firstValue != "number" || typeof secondValue != "number") {
        res.status(400).send({
            error: 'Invalid parameters',
        })
    }

    try {
        const result = calculate(firstValue, secondValue, operation);
        res.json({ result });
    } catch (error: any) {
        res.status(400).send(error.message);
    }
};
