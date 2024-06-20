import express from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes';
import mathRoutes from './routes/mathRoutes';

const app = express();

// Configuração do middleware CORS
app.use(cors({
    origin: 'http://localhost:3000', // Permite o frontend acessar a API
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
}));

// Outras configurações de middleware
app.use(express.json());

// Definição das rotas
app.use('/auth', authRoutes);
app.use('/calculate', mathRoutes);

export default app;
