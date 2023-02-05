import { Role } from './Role';
import { Serial } from './Serial';

export type Film = {
  id: number,
  slogan: string,
  ratings: number[]
  name: string,
  originalName: string,
  poster: string,
  trailer: string,
  thumbnails: string[],
  description: string,
  usersRating: number,
  reviews: string[],
  genre: string,
  release: string[],
  audio: string,
  studio: string,
  countries: string,
  actors: Role[],
  director: Role[],
  producers: Role[],
  facts: string[],
  type: 'film' | 'serial',
  wins?: string,
  serial?: Serial
  filmSrc?: string,
};
