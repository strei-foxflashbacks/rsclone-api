import express, { Express, Request, Response } from 'express';
import filmRouter from './routes/filmRoutes';
import userRouter from './routes/usersRoutes';

const app: Express = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Here\'s our ShowJet server!');
});

app.use('/users', userRouter);
app.use('/films', filmRouter);

app.use((req: Request, res: Response) => {
  res.status(404).send('No such page, sorry.');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
