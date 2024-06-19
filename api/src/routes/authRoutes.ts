import { Router } from 'express';
import {AuthController} from '../controllers/authController';
const authController = AuthController.getInstance();

const router = Router();

router.post('/register', async (req, res) => {
    await authController.register(req, res);
});

router.post('/login', async (req, res) => {
    await authController.login(req, res);
});

export default router;
