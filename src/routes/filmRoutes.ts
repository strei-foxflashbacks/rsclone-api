import express, { Express, NextFunction, Request, Response } from 'express';
import films from '../database/films';
import { FilmRequest } from '../types/FilmRequest';

const filmRouter: Express = express();

filmRouter.get('/', (req: Request, res: Response) => {
  res.json(films);
});

filmRouter
  .route('/:id')
  .get((req: FilmRequest, res: Response) => {
    res.json(req.film);
  })
  .put((req: Request, res: Response) => {
    res.send(`Update film #${req.params.id}`);
  })
  .delete((req: Request, res: Response) => {
    res.send(`Delete film #${req.params.id}`);
  });
filmRouter.param('id', (req: FilmRequest, res: Response, next: NextFunction, id) => {
  if (!films.find(film => film.id === +id)) {
    res.status(404).send('No such film, sorry');
  } else {
    req.film = films[id - 1];
  }
  next();
});

export default filmRouter;
