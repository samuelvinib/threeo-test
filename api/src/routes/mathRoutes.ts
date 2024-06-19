import { Router } from 'express';
import { performCalculation } from '../controllers/mathController';
import {authMiddleware} from "../middlewares/AuthMiddleware";

const router = Router();

router.post('/', authMiddleware, (req, res) => {
    performCalculation(req, res);
});

export default router;
