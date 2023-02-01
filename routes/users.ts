import express, { Express, Request, Response } from 'express';

const router: Express = express();

router.get('/', (req: Request, res: Response) => {
  res.send('User List');
});

router.get('/new', (req: Request, res: Response) => {
  res.send('User new form');
});

export default router;
