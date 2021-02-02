import { Request, Response } from 'express';

import { HttpStatus, ApiResponse, Validator } from '../../lib';
import { ProductCreateDTO } from './dto';
import { ProductService } from './service';

const create = async (req: Request, res: Response) => {
  const productCreateDTO = ProductCreateDTO.of(req.body);
  const bodyHasErrors = await Validator.bodyValidate(productCreateDTO);

  if (bodyHasErrors) {
    return ApiResponse.send(
      res,
      ApiResponse.buildError(bodyHasErrors, HttpStatus.BAD_REQUEST)
    );
  }

  const response = await ProductService.create(productCreateDTO);
  return ApiResponse.send(res, response);
};

const findAll = async (req: Request, res: Response) => {
  const response = await ProductService.findAll();

  return ApiResponse.send(res, response);
};

export const ProductController = { create, findAll };
