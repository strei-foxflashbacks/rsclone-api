import { PassportStatic } from 'passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { UserEmailVerify } from '../types/UserEmailVerify';

const initJWT = (passport: PassportStatic, getUserByEmail: UserEmailVerify) => {
  const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'secret',
  };

  passport.use(
    new Strategy(jwtOptions, async (payload, done) => {
      const email = payload.email;
      const user = getUserByEmail(email);

      if (!user) {
        return done(null, false);
      }
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    }),
  );
};
export default initJWT;



