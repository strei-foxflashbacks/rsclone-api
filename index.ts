import express, { Express, Request, Response } from 'express';
import router from './routes/users';

const app: Express = express();
const port = 3000;
const userRouter = router;

app.get('/', (req: Request, res: Response) => {
  res.send('Here\'s our ShowJet server!');
});

app.use('/users', userRouter);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
