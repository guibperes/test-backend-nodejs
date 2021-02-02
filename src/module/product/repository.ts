import { EntityRepository, MongoRepository } from 'typeorm';

import { Product } from './entity';

@EntityRepository(Product)
export class ProductRepository extends MongoRepository<Product> {}
