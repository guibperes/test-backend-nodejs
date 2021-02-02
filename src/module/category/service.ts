import { Database } from '../../config';
import { ApiResponse, IApiResponse } from '../../lib';
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

export const CategoryService = { create };
