import express from 'express';
import authRoutes from './routes/authRoutes';
import mathRoutes from "./routes/mathRoutes";

const app = express();

app.use(express.json());
app.use('/auth', authRoutes);
app.use('/calculate', mathRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

export default app;
