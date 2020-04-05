import { BaseEntityInterface } from '../../../../infrastructure/domain/entities/base.entity.interface'

export interface CategoryInterface extends BaseEntityInterface {
  uuid: string
  title: string
  active: boolean
  getTitle(): string
  setTitle(title: string): void
  isActive(): boolean
  activate(): void
  disactivate(): void
}
