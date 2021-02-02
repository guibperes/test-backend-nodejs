import { EntityRepository, MongoRepository } from 'typeorm';

import { Category } from './entity';

@EntityRepository(Category)
export class CategoryRepository extends MongoRepository<Category> {}
