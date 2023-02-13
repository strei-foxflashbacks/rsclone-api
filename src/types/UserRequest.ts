import { Request } from 'express';
import { UserDefined } from './UserDefined';

export interface UserRequest extends Request {
  user?: UserDefined
}
