import { ApiProperty } from '@nestjs/swagger'
import { Expose } from 'class-transformer'
import { Property } from 'mikro-orm'

import { BaseEntityInterface } from './base.entity.interface'
import { IdInterface } from './id.interface'

// base entity prepared for quick chanfes beedwen mongo & pg
// as what to need just reimplement IdType & implement IdInterface
export abstract class BaseEntity implements BaseEntityInterface {

  @ApiProperty()
  @Expose()
  @Property({ type: 'uuid', primary: true, hidden: true })
  public uuid: string

  @ApiProperty()
  @Expose()
  @Property({ onCreate: () => new Date() })
  public createdAt = new Date()

  @ApiProperty()
  @Expose()
  @Property({ onUpdate: () => new Date() })
  public updatedAt = new Date()

  @ApiProperty()
  @Property({ default: null, nullable: true })
  public deletedAt = new Date()

  constructor(id: IdInterface) {
    this.uuid = id.getValue()
  }
}
