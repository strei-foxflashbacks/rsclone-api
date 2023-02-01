import express, { Express, Request, Response } from 'express';

const app: Express = express();
const port = 3000;
const userRouter = require('./routes/users');

app.get('/', (req: Request, res: Response) => {
  res.send('Here\'s our ShowJet server!');
});

app.use('/users', userRouter);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
