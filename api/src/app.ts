import express from 'express';
import authRoutes from "./routes/auth";
const app = express();

app.use(express.json());
app.use('/auth', authRoutes);
app.get('/', (req: express.Request, res: express.Response) => {
    res.status(200).send('Welcome');
});

export default app;
