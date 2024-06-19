import express from 'express';
import AuthController from '../controllers/auth';

const authRoutes = express.Router();
const authController = new AuthController();

authRoutes.post('/login', async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(401).send({
            error: 'Email and password are required'
        });
    }

    try {
        const response = authController.login(email, password);
        res.status(200).send(response);
    } catch (error:any) {
        res.status(500).send({ error: error.message });
    }
});

export default authRoutes;
