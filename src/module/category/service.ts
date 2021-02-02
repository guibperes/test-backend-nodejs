import { ObjectID } from 'typeorm';

import { Database } from '../../config';
import { ApiResponse, HttpStatus, IApiResponse } from '../../lib';
import { CategoryCreateDTO } from './dto';
import { Category } from './entity';
import { CategoryRepository } from './repository';

const getCategoryRepository = () => Database.getRepository(CategoryRepository);

const create = async (
  categoryCreateDTO: CategoryCreateDTO
): Promise<IApiResponse> => {
  const repository = getCategoryRepository();

  const category = Category.of(categoryCreateDTO);
  const savedCategory = await repository.save(category);

  return ApiResponse.build(savedCategory);
};

const findById = async (id: ObjectID): Promise<IApiResponse> => {
  const repository = getCategoryRepository();

  const category = await repository.findOne(id);

  if (!category) {
    return ApiResponse.buildError(
      'Cannot find category with provided id',
      HttpStatus.NOT_FOUND
    );
  }

  return ApiResponse.build(category);
};

export const CategoryService = { create, findById };
