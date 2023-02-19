import { NextFunction, Request, Response } from 'express';

const notAuthCheck = (req: Request, res: Response, next: NextFunction) => {
  if (req.isAuthenticated()) {
    // return res.send(req.cookies);
    return res.redirect('/');
  }
  next();
};
export default notAuthCheck;
