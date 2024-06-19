import { Request, Response } from 'express';
import * as authService from '../services/authServices';

export const register = async (req: Request, res: Response) => {
    const { username, password } = req.body;

    try {
        await authService.register(username, password);
        res.status(201).send('User registered');
    } catch (error: any) {
        res.status(500).send(error.message);
    }
};

export const login = async (req: Request, res: Response) => {
    const { username, password } = req.body;

    try {
        const token = await authService.login(username, password);
        res.json({ token });
    } catch (error: any) {
        res.status(401).send(error.message);
    }
};
