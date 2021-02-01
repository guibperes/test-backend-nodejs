import { Request, Response } from 'express';

import { ApiResponse, HttpStatus } from '../lib';

export const notFoundMiddleware = (req: Request, res: Response) =>
  ApiResponse.send(
    res,
    ApiResponse.buildError(
      'Route not provided by this service',
      HttpStatus.NOT_FOUND
    )
  );
