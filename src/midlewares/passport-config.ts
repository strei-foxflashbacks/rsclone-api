import { PassportStatic } from 'passport';
import passportLocal from 'passport-local';
import bcrypt from 'bcrypt';
import { UserEmailVerify } from '../types/UserEmailVerify';
import { UserIdVerify } from '../types/UserIdVerify';
import { UserId } from '../types/UserId';

const LocalStrategy = passportLocal.Strategy;

const initPassport = (passport: PassportStatic, getUserByEmail: UserEmailVerify, getUserById: UserIdVerify) => {
  passport.use(new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
    const user = getUserByEmail(email);
    if (user === null) done(null, false, { message: 'Incorrect email' });
    try {
      if (await bcrypt.compare(password, user!.password)) {
        done(null, user);
      } else {
        return done(null, false, { message: 'Incorrect password' });
      }
    } catch (err) {
      return done(err as Error);
    }
  }));
  passport.serializeUser((user: UserId, done) => done(null, user.id));
  passport.deserializeUser((id: string, done) => {
    return done(null, getUserById(id));
  });
};
export default initPassport;
