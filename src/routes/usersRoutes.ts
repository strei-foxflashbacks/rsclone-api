if (process.env.NODE_ENV !== 'production') require('dotenv').config();
import express, { Express, NextFunction, Request, Response, urlencoded } from 'express';
import bcrypt from 'bcrypt';
import users from '../database/users';
import passport from 'passport';
import initPassport from '../midlewares/passport-config';
import flash from 'express-flash';
import session from 'express-session';
import authCheck from '../midlewares/authCheck';
import notAuthCheck from '../midlewares/notAuthCheck';
import { UserRequest } from '../types/UserRequest';

initPassport(
  passport,
  (email: string) => users.find(user => user.email === email)!,
  (id: string) => users.find(user => user.id === id)!);
const userRouter: Express = express();
userRouter.use(express.json());
userRouter.use(urlencoded({ extended: false }));
userRouter.use(flash());
userRouter.use(session({
  secret: process.env.SESSION_SECRET as string,
  cookie: { maxAge: 60000 },
  resave: false,
  saveUninitialized: false,
}));
userRouter.use(passport.initialize());
userRouter.use(passport.session());

userRouter.get('/', authCheck, (req: UserRequest, res: Response) => {
  res.send(req.user);
});

userRouter
  .route('/login')
  .get(notAuthCheck, (req: Request, res: Response) => {
    res.send({ page: 'Login Page', message: req.flash('error')[0] });
  })
  .post(notAuthCheck, passport.authenticate('local', {
    successRedirect: '/users',
    failureRedirect: '/users/login',
    failureFlash: true,
  }));

userRouter
  .route('/register')
  .get(notAuthCheck, (req: Request, res: Response) => {
    res.send('Registration page');
  })
  .post(notAuthCheck, async (req: Request, res: Response) => {
    try {
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
    } catch {
      res.redirect('/users/register');
    }
  });

userRouter.post('/logout', (req: Request, res: Response, next: NextFunction) => {
  req.logOut((err) => {
    if (err) { return next(); }
    res.redirect('/');
  });
});
export default userRouter;
