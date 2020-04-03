import { BaseEntity } from '../../../../infrastructure/entities/base.entity';
import { CategoryInterface } from './category.entity.interface';
import { Column, Entity } from 'typeorm';
import { IdTypeInterface } from '../../../../infrastructure/entities/id.type.interface';

@Entity('category')
export class CategoryEntity extends BaseEntity implements CategoryInterface {
  @Column()
  private title: string

  @Column()
  private active: boolean

  constructor(id: IdTypeInterface, title: string) {
    super(id)
    this.title = title
    this.active = true
  }
  setTitle(title: string): void {
    this.title = title
  }
  isActive(): boolean {
    return this.active
  }
  activate(): void {
    this.active = true
  }
  disactivate(): void {
    this.active = false
  }
  getTitle(): string {
    return this.title
  }
}