import express, { Express, Request, Response } from 'express';
import bcrypt from 'bcrypt';
import users from '../database/users';
import passport from 'passport';
import flash from 'express-flash';
import { UserRequest } from '../types/UserRequest';
import initJWT from '../midlewares/jwtConfig';
import jwt from 'jsonwebtoken';

const userRouter: Express = express();
userRouter.use(express.json());
initJWT(passport, (email: string) => users.find(user => user.email === email)!);
userRouter.use(flash());
userRouter.use(express.urlencoded({ extended: false }));
userRouter.use(passport.initialize());

userRouter
  .route('/')
  .get(passport.authenticate('jwt', { session: false }), (req: UserRequest, res: Response) => {
    res.send(req.user);
  })
  .patch(passport.authenticate('jwt', { session: false }), async (req: UserRequest, res: Response) => {
    const userToUpdate = users.find(user => user === req.user);
    const index = users.indexOf(userToUpdate!);
    req.body.password = await bcrypt.hash(req.body.password, 10);
    const updatedUser = Object.assign(userToUpdate!, req.body);
    users[index] = updatedUser;
    res.send(updatedUser);
  });

userRouter
  .route('/login')
  .get((req: Request, res: Response) => {
    res.send('Login page');
  })
  .post(async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const user = users.find(userToFind => userToFind.email === email);
    if (!user) {
      res.status(401).send('User not found');
    } else {
      if (await bcrypt.compare(password, user?.password as string)) {
        const token = jwt.sign(user!, 'secret', { expiresIn: '1h' });
        res.json(token);
      } else {
        res.status(401).send('Wrong password');
      }
    }
  });

userRouter
  .route('/register')
  .get((req: Request, res: Response) => {
    res.send('Registration page');
  })
  .post(async (req: Request, res: Response) => {
    try {
      const existingUser = users.find(userToFind => userToFind.email === req.body.email);
      if (!existingUser) {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        users.push({
          id: Date.now().toString(),
          name: req.body.name,
          email: req.body.email,
          password: hashedPassword,
          birthday: '',
          userpic: '',
          sex: null,
          phone: '',
          collection: {
            playlist: [],
            films: [],
            persons: [],
          },
        });
        res.redirect('/users/login');
      } else {
        res.status(400).send('User already exists');
      }
    } catch {
      res.redirect('/users/register');
    }
  });
export default userRouter;
