import { ConflictException } from '@nestjs/common'
import { ApiProperty } from '@nestjs/swagger'
import { Expose } from 'class-transformer'
import { AnyEntity, Entity, Property } from 'mikro-orm'

import { BaseEntity } from '../../../../infrastructure/domain/entities/base.entity'
import { IdInterface } from '../../../../infrastructure/domain/entities/id.interface'
import { CategoryInterface } from './category.entity.interface'

@Entity({ tableName: 'category' })
export class CategoryEntity extends BaseEntity
  implements AnyEntity<CategoryEntity>, CategoryInterface {
  @ApiProperty()
  @Expose()
  @Property()
  title: string

  @ApiProperty()
  @Expose()
  @Property()
  active: boolean

  @ApiProperty()
  @Expose()
  @Property({ default: false })
  softDeleted = false

  constructor(uuid: IdInterface, title: string, active: boolean = true) {
    super(uuid)
    this.title = title
    this.active = active
  }

  setTitle(title: string): void {
    this.title = title
  }
  isActive(): boolean {
    return this.active
  }
  activate(): void {
    if (this.isActive()) {
      throw new ConflictException('Category active')
    }
    this.active = true
  }
  disactivate(): void {
    if (!this.isActive()) {
      throw new ConflictException('Category already deactivated')
    }
    this.active = false
  }
  getTitle(): string {
    return this.title
  }
}
