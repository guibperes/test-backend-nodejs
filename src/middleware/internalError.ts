import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';

import { ApiResponse, logger } from '../lib';

export const internalErrorMiddleware = (
  err: ErrorRequestHandler,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.error('Internal server error');
  logger.error(err);

  return ApiResponse.send(res, ApiResponse.buildError());
};
