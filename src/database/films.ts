import { Film } from '../types/Film';

const films: Film[] = [
  {
    id: 1,
    name: '',
    src: '',
    poster: '',
    trailer: '',
    thumbnails: ['', '', ''],
    description: '',
    rating: 1,
    reviews: [''],
    genre: '',
    type: 'film',
  },
  {
    id: 2,
    name: '',
    src: '',
    poster: '',
    trailer: '',
    thumbnails: ['', '', ''],
    description: '',
    rating: 1,
    reviews: [''],
    genre: '',
    type: 'serial',
    serial: {
      season: [1],
      episode: [1],
    },
  },
];
export default films;
