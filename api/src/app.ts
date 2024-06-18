import express from 'express';
// import example from './routes/example';
const app = express();

app.use(express.json());
// app.use('/example', example);
app.get('/', (req: express.Request, res: express.Response) => {
    res.status(200).send('Welcome');
})

export default app;
