import { Response } from 'express';

import { HttpStatus, IHttpStatus } from './httpStatus';

interface ApiErrorData {
  timestamp: number;
  name: string;
  message: string;
}

interface ApiError {
  status: number;
  data: ApiErrorData;
}

export interface IApiResponse {
  error?: ApiError;
  content?: object;
}

const buildError = (
  message = 'Internal Server Error',
  status: IHttpStatus = HttpStatus.INTERNAL_SERVER_ERROR
): IApiResponse => ({
  error: {
    status: status.number,
    data: {
      timestamp: Date.now(),
      name: status.name,
      message,
    },
  },
});

const build = (content: object): IApiResponse => ({ content });

const send = (res: Response, result: IApiResponse) =>
  result.error
    ? res.status(result.error.status).json(result.error.data)
    : res.json(result.content);

export const ApiResponse = { buildError, build, send };
