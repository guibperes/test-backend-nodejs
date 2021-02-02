import { Database } from '../../config';
import { ApiResponse, IApiResponse } from '../../lib';
import { ProductCreateDTO } from './dto';
import { Product } from './entity';
import { ProductRepository } from './repository';

const create = async (
  productCreateDTO: ProductCreateDTO
): Promise<IApiResponse> => {
  const repository = Database.getRepository(ProductRepository);

  const product = Product.of(productCreateDTO);
  const savedProduct = await repository.save(product);

  return ApiResponse.build(savedProduct);
};

export const ProductService = { create };
