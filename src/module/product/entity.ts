import { Entity, Column } from 'typeorm';
import { Length, Min } from 'class-validator';

import { BaseEntity } from '../../base';
import { ProductCreateDTO } from './dto';

@Entity()
export class Product extends BaseEntity {
  @Column()
  @Length(3, 100)
  title!: string;

  @Column()
  @Length(3, 255)
  description!: string;

  @Column()
  @Min(0)
  price!: number;

  private constructor(title: string, description: string, price: number) {
    super();

    this.title = title;
    this.description = description;
    this.price = price;
  }

  public static of(createDTO: ProductCreateDTO): Product {
    return new Product(createDTO.title, createDTO.description, createDTO.price);
  }
}
