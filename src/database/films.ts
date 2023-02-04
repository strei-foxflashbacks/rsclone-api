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
      seasonsQty: 2,
      seasons: [
        {
          episodes: [{ name: 's1ep1', src: '' }, { name: 's1ep2', src: '' }],
        },
        {
          episodes: [{ name: 's2ep1', src: '' }, { name: 's2ep2', src: '' }],
        },
      ],
    },
  },
];
export default films;
