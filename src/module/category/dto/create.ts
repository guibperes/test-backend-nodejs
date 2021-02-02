import { Length } from 'class-validator';

export class CategoryCreateDTO {
  @Length(3, 40)
  name!: string;

  private constructor(name: string) {
    this.name = name;
  }

  public static of(body: CategoryCreateDTO): CategoryCreateDTO {
    return new CategoryCreateDTO(body.name);
  }
}
