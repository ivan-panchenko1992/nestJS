import { Injectable, PipeTransform, BadRequestException } from '@nestjs/common';
import { ObjectSchema } from 'joi';

@Injectable()
export class ValidationPipePipe implements PipeTransform {
  constructor(private schema: ObjectSchema) {}
  transform(value: any) {
    const { error } = this.schema.validate(value);
    if (error) {
      throw new BadRequestException(error.details[0].message, {
        cause: new Error(),
      });
    }
    return value;
  }
}
