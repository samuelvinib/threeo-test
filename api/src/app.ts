import express from 'express';
import authRoutes from './routes/authRoutes';
import {authMiddleware} from "./middlewares/AuthMiddleware";

const app = express();

app.use(express.json());
app.use('/auth', authRoutes);

app.get('/', authMiddleware, (req: express.Request, res: express.Response) => {
    res.send(`Hello, user ${req.userId}`);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

export default app;
