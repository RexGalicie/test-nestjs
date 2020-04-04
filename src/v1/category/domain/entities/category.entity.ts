import { Property, Entity, AnyEntity, wrap } from 'mikro-orm'
import { CategoryInterface } from './category.entity.interface'
import { IdInterface } from '../../../../infrastructure/entities/id.interface'
import { BaseEntity } from '../../../../infrastructure/entities/base.entity'
import { ConflictException } from '@nestjs/common'

@Entity({ tableName: 'category' })
export class CategoryEntity extends BaseEntity
  implements AnyEntity<CategoryEntity>, CategoryInterface {
  [x: string]: any

  @Property()
  title: string

  @Property()
  active: boolean

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
