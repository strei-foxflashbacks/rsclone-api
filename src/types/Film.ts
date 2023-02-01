import { Serial } from './Serial';

export type Film = {
  id: number,
  name: string,
  src: string,
  poster: string,
  trailer: string,
  thumbnails: string[],
  description: string,
  rating: number,
  reviews: string[],
  genre: string,
  type: 'film' | 'serial',
  serial?: Serial
};
