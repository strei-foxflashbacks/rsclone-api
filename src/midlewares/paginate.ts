import { NextFunction, Request } from 'express';
import { PaginatedResponse } from '../types/PaginatedResponse';

const paginate = (model: []) => {
  return (req: Request, res: PaginatedResponse, next: NextFunction) => {
    const page = req.query.page;
    const limit = req.query.limit;

    const startIndex = (Number(page) - 1) * Number(limit);
    const endIndex = Number(page) * Number(limit);

    const paginatedFilms = model.slice(startIndex, endIndex);

    res.paginated = paginatedFilms;
    next();
  };
};
export default paginate;
