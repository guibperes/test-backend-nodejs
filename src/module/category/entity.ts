import { Entity, Column } from 'typeorm';
import { Length } from 'class-validator';

import { BaseEntity } from '../../base';
import { CategoryCreateDTO } from './dto';

@Entity()
export class Category extends BaseEntity {
  @Column()
  @Length(3, 40)
  name!: string;

  private constructor(name: string) {
    super();

    this.name = name;
  }

  public static of(categoryCreateDTO: CategoryCreateDTO): Category {
    return new Category(categoryCreateDTO.name);
  }
}
