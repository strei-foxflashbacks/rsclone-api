import express, { Express, NextFunction, Request, Response } from 'express';
import films from '../database/films';
import paginate from '../midlewares/paginate';
import { FilmRequest } from '../types/FilmRequest';
import { PaginatedResponse } from '../types/PaginatedResponse';

const filmRouter: Express = express();

filmRouter.get('/', paginate(films as []), (req: Request, res: PaginatedResponse) => {
  if (req.query.page && req.query.limit) {
    res.json(res.paginated);
  } else {
    res.json(films);
  }
});

filmRouter
  .route('/:id')
  .get((req: FilmRequest, res: Response) => {
    if (req.query.season) {
      const seasonQuery = req.query.season as string;
      const seasonNum = Number(seasonQuery.replace(/season=/, ''));
      const season = req.film?.serial?.seasons.reverse()[seasonNum - 1];
      return season ? res.send(season) : res.status(404).send('No such season, sorry');
    } else {
      res.json(req.film);
    }
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
