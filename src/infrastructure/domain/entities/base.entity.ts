import { Exclude } from 'class-transformer'
import { Property } from 'mikro-orm'

import { BaseEntityInterface } from './base.entity.interface'
import { IdInterface } from './id.interface'

// base entity prepared for quick chanfes beedwen mongo & pg
// as what to need just reimplement IdType & implement IdInterface
export abstract class BaseEntity implements BaseEntityInterface {
  @Exclude()
  @Property({ type: 'uuid', primary: true, hidden: true })
  public uuid: string

  @Property({ onCreate: () => new Date() })
  public createdAt = new Date()

  @Property({ onUpdate: () => new Date() })
  public updatedAt = new Date()

  @Property({ default: null, nullable: true })
  public deletedAt = new Date()

  constructor(id: IdInterface) {
    this.uuid = id.getValue()
  }
}
