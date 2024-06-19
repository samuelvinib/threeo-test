// /src/controllers/AuthController.ts
import { Request, Response } from 'express';
import { AuthService } from '../services/authServices';

export class AuthController {
    private static instance: AuthController;
    private authService: AuthService;

    private constructor() {
        this.authService = new AuthService();
    }

    public static getInstance(): AuthController {
        if (!AuthController.instance) {
            AuthController.instance = new AuthController();
        }
        return AuthController.instance;
    }

    public async register(req: Request, res: Response): Promise<void> {
        const { email, password } = req.body;

        try {
            await this.authService.register(email, password);
            res.status(201).send({ message: 'User registered' });
        } catch (error: any) {
            res.status(500).send(error.message);
        }
    }

    public async login(req: Request, res: Response): Promise<void> {
        const { email, password } = req.body;

        try {
            const token = await this.authService.login(email, password);
            res.json({ token });
        } catch (error: any) {
            res.status(401).send(error.message);
        }
    }
}
