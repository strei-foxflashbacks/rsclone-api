import express, { Express, NextFunction, Request, Response } from 'express';
import persons from '../database/persons';
import paginate from '../midlewares/paginate';
import { PersonRequest } from '../types/PersonRequest';
import { PaginatedResponse } from '../types/PaginatedResponse';

const personsRouter: Express = express();

personsRouter.get('/', paginate(persons as []), (req: Request, res: PaginatedResponse) => {
  if (req.query.page && req.query.limit) {
    res.json(res.paginated);
  } else {
    res.json(persons);
  }
});

personsRouter
  .route('/:id')
  .get((req: PersonRequest, res: Response) => {
    res.json(req.person);
  });
personsRouter.param('id', (req: PersonRequest, res: Response, next: NextFunction, id: number) => {
  if (!persons.find(person => person.id === +id)) {
    res.status(404).send('No such person, sorry');
  } else {
    req.person = persons.find(person => person.id === Number(id));
  }
  next();
});
export default personsRouter;
