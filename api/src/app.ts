import express from 'express';
import authRoutes from './routes/authRoutes';

const app = express();

app.use(express.json());
app.use('/auth', authRoutes);

app.get('/', (req: express.Request, res: express.Response) => {
    res.status(200).send('Welcome');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

export default app;
