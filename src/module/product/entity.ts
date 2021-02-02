import { Entity, Column, OneToOne, JoinColumn } from 'typeorm';
import { Length, Min } from 'class-validator';

import { BaseEntity } from '../../base';
import { Category } from '../category';
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

  @OneToOne(() => Category, { eager: true })
  @JoinColumn()
  category!: Category;

  private constructor(
    title: string,
    description: string,
    price: number,
    category?: Category
  ) {
    super();

    this.title = title;
    this.description = description;
    this.price = price;

    if (category) {
      this.category = category;
    }
  }

  public static of(createDTO: ProductCreateDTO, category?: Category): Product {
    return new Product(
      createDTO.title,
      createDTO.description,
      createDTO.price,
      category
    );
  }
}
