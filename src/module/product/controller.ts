import { Request, Response } from 'express';
import { validate } from 'class-validator';

import { HttpStatus, ApiResponse } from '../../lib';
import { ProductCreateDTO } from './dto';
import { ProductService } from './service';

const create = async (req: Request, res: Response) => {
  const productCreateDTO = ProductCreateDTO.of(req.body);
  const bodyValidation = await validate(productCreateDTO);

  if (bodyValidation.length > 0) {
    return ApiResponse.send(
      res,
      ApiResponse.buildError(bodyValidation.toString(), HttpStatus.BAD_REQUEST)
    );
  }

  const response = await ProductService.create(productCreateDTO);
  return ApiResponse.send(res, response);
};

export const ProductController = { create };
