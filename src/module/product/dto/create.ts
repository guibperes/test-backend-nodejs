import { ObjectID } from 'typeorm';
import { Length, Min, IsNotEmpty } from 'class-validator';

export class ProductCreateDTO {
  @IsNotEmpty()
  @Length(3, 100)
  title!: string;

  @IsNotEmpty()
  @Length(3, 255)
  description!: string;

  @IsNotEmpty()
  @Min(0)
  price!: number;

  @IsNotEmpty()
  categoryId!: ObjectID;

  private constructor(
    title: string,
    description: string,
    price: number,
    categoryId: ObjectID
  ) {
    this.title = title;
    this.description = description;
    this.price = price;
    this.categoryId = categoryId;
  }

  public static of(body: ProductCreateDTO): ProductCreateDTO {
    return new ProductCreateDTO(
      body.title,
      body.description,
      body.price,
      body.categoryId
    );
  }
}
