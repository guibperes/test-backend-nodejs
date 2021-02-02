import { Database } from '../../config';
import { ApiResponse, HttpStatus, IApiResponse } from '../../lib';
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

const findById = async (id: string): Promise<IApiResponse> => {
  const repository = getProductRepository();
  const product = await repository.findOne(id);

  if (!product) {
    return ApiResponse.buildError(
      'Cannot find product with provided id',
      HttpStatus.NOT_FOUND
    );
  }

  return ApiResponse.build(product);
};

export const ProductService = { create, findAll, findById };
