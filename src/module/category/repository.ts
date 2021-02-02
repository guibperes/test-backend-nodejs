import { EntityRepository, Repository } from 'typeorm';

import { Category } from './entity';

@EntityRepository(Category)
export class CategoryRepository extends Repository<Category> {}
