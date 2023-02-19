import { NextFunction, Request, Response } from 'express';

const authCheck = (req: Request, res: Response, next: NextFunction) => {
  if (req.isAuthenticated()) {
    return next();
  }
  // res.send(req.cookies);
  res.redirect('/');
};
export default authCheck;
