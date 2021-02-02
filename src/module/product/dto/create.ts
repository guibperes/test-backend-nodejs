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

  private constructor(title: string, description: string, price: number) {
    this.title = title;
    this.description = description;
    this.price = price;
  }

  public static of(body: ProductCreateDTO): ProductCreateDTO {
    return new ProductCreateDTO(body.title, body.description, body.price);
  }
}
