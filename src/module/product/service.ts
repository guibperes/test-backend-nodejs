import { Database } from '../../config';
import { ApiResponse, IApiResponse } from '../../lib';
import { Category, CategoryService } from '../category';
import { ProductCreateDTO } from './dto';
import { Product } from './entity';
import { ProductRepository } from './repository';

const getProductRepository = () => Database.getRepository(ProductRepository);

const create = async (
  productCreateDTO: ProductCreateDTO
): Promise<IApiResponse> => {
  const repository = getProductRepository();

  const categoryOptional = await CategoryService.findById(
    productCreateDTO.categoryId
  );

  if (categoryOptional.error) {
    return categoryOptional;
  }

  const product = Product.of(
    productCreateDTO,
    <Category>categoryOptional.content
  );

  const savedProduct = await repository.save(product);
  return ApiResponse.build(savedProduct);
};

const findAll = async (): Promise<IApiResponse> => {
  const repository = getProductRepository();
  const products = await repository.find();

  return ApiResponse.build(products);
};

export const ProductService = { create, findAll };
