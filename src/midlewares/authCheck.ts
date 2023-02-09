import { NextFunction, Request, Response } from 'express';

const authCheck = (req: Request, res: Response, next: NextFunction) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/');
};
export default authCheck;
