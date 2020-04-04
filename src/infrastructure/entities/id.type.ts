import { Type } from 'mikro-orm'
import { Id } from './id'

export class IdType extends Type {
  convertToDatabaseValue(value: any): string {
    return value instanceof Id ? value.getValue() : value
  }

  convertToJSValue(value: any): any {
    return value ? new Id(value) : null
  }

  getColumnType() {
    return 'uuid'
  }
}
