import { InternalServerErrorException } from '@nestjs/common/exceptions'
import { v4 as uuidv4 } from 'uuid'
import validator from 'validator'

import { IdInterface } from './id.interface'

export class Id implements IdInterface {
  public id: string

  constructor(id: string) {
    if (!validator.isUUID(id, '4')) {
      throw new InternalServerErrorException('ID must be valid UUID string')
    }
    this.id = id
  }

  public isEqual(other: IdInterface): boolean {
    return this.getValue() === other.getValue()
  }

  public getValue(): string {
    return this.id
  }

  public static generate(): IdInterface {
    return new this(uuidv4())
  }
}
