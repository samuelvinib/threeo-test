import express from 'express';
const authRoutes = express();
import AuthController from "../controllers/auth";
const authController = new AuthController();

authRoutes.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(401).send({
            error: 'Email and password is required'
        })
    }
    return authController.login(email, password);
});

export default authRoutes;