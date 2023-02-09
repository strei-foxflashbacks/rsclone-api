import express, { Express, Request, Response } from 'express';

const userRouter: Express = express();

userRouter.get('/', (req: Request, res: Response) => {
  res.send('User List');
});

userRouter.get('/register', (req: Request, res: Response) => {
  res.send('User new form');
});

userRouter
  .route('/:id')
  .get((req: Request, res: Response) => {
    res.send(`Get user #${req.params.id}`);
  })
  .put((req: Request, res: Response) => {
    res.send(`Update user #${req.params.id}`);
  })
  .delete((req: Request, res: Response) => {
    res.send(`Delete user #${req.params.id}`);
  });

export default userRouter;

// TODO: functionality to handle views by route
