import express, { Express, NextFunction, Request, Response } from 'express';
import films from '../database/films';
import { FilmRequest } from '../types/FilmRequest';

const filmRouter: Express = express();

filmRouter.get('/', (req: Request, res: Response) => {
  res.send(films);
});

filmRouter
  .route('/:id')
  .get((req: FilmRequest, res: Response) => {
    res.send(req.film);
  })
  .put((req: Request, res: Response) => {
    res.send(`Update film #${req.params.id}`);
  })
  .delete((req: Request, res: Response) => {
    res.send(`Delete film #${req.params.id}`);
  });
filmRouter.param('id', (req: FilmRequest, res: Response, next: NextFunction, id) => {
  req.film = films[id - 1];
  next();
});

export default filmRouter;
