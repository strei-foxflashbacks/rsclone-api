import express, { Express, Request, Response } from 'express';
import filmRouter from './routes/filmRoutes';
import personsRouter from './routes/personsRoutes';
import userRouter from './routes/usersRoutes';
import cors from 'cors';

const app: Express = express();
const port = 3000;

app.use(cors({
  credentials: true,
}));

app.get('/', (req: Request, res: Response) => {
  res.send('Here\'s our ShowJet server!');
});

app.use('/users', userRouter);
app.use('/films', filmRouter);
app.use('/persons', personsRouter);

app.use((req: Request, res: Response) => {
  res.status(404).send('No such page, sorry.');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
