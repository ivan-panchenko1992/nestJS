import Joi = require('joi');
export class CreateUserDto {
  name: string;
  position: string;
  salary: number;
}

export const createUserSchema = Joi.object({
  name: Joi.string().required(),
  salary: Joi.number().required(),
  position: Joi.string().required(),
});
