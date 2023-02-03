import { Response } from 'express';

export interface PaginatedResponse extends Response {
  paginated?: [],
}
