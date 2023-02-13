import { User } from '../types/User';

const users: User[] = [
  {
    id: '1',
    name: 'John',
    email: 'abc@gmail.com',
    password: '123',
    birthday: '',
    userpic: '',
    sex: null,
    phone: '',
    collection: {
      playlist: [],
      films: [],
      persons: [],
    },
  },
];
export default users;