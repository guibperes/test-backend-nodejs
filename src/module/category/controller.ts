import { Request, Response } from 'express';

import { HttpStatus, ApiResponse, Validator } from '../../lib';
import { CategoryCreateDTO } from './dto';
import { CategoryService } from './service';

const create = async (req: Request, res: Response) => {
  const categoryCreateDTO = CategoryCreateDTO.of(req.body);
  const bodyHasErrors = await Validator.bodyValidate(categoryCreateDTO);

  if (bodyHasErrors) {
    return ApiResponse.send(
      res,
      ApiResponse.buildError(bodyHasErrors, HttpStatus.BAD_REQUEST)
    );
  }

  const response = await CategoryService.create(categoryCreateDTO);
  return ApiResponse.send(res, response);
};

export const CategoryController = { create };
