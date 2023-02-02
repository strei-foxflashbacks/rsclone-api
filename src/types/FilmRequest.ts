import { Film } from './Film';
import { Request } from 'express';

export interface FilmRequest extends Request {
  film?: Film,
}
