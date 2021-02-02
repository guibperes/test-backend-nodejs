import { validate } from 'class-validator';

const bodyValidate = async (dto: object) => {
  const bodyValidation = await validate(dto);

  if (bodyValidation.length === 0) {
    return null;
  }

  return bodyValidation.toString();
};

export const Validator = { bodyValidate };
