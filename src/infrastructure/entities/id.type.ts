import { IdTypeInterface } from './id.type.interface';
import { ValueTransformer } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import validator from 'validator';
import { InternalServerErrorException } from '@nestjs/common/exceptions';

export class IdType implements IdTypeInterface {

  private id: string 

  constructor(id: string) {
    if(!validator.isUUID(id, '4')) {
      throw new InternalServerErrorException('ID must be valid UUID string')
    }
    this.id = id
  }

  public getValue(): string {
    return this.id
  }

  public static generate(): IdTypeInterface {
    return new this(uuidv4())
  }

  public static transformer : ValueTransformer = {
    from: dbValue => new IdType(dbValue),
    to: (entityValue: IdType) => entityValue.id
  }
}