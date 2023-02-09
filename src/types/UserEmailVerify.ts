import { User } from './User';

export type UserEmailVerify = ( email: string ) => User | undefined;
