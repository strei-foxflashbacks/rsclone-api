import express, { Express, Request, Response } from 'express';
import bcrypt from 'bcrypt';
import users from '../database/users';

const userRouter: Express = express();

userRouter.get('/', (req: Request, res: Response) => {
  res.send('User List');
});

userRouter
  .route('/register')
  .get((req: Request, res: Response) => {
    res.send('User new form');
  })
  .post(async (req: Request, res: Response) => {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      users.push({
        id: Number(Date.now().toString()),
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
      });
      res.redirect('/login');
    } catch {
      res.redirect('/register');
    }
  });

export default userRouter;

// TODO: functionality to handle views by route
