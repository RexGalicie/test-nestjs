import { IdInterface } from './../../../../infrastructure/entities/id.interface'
import { CategoryInterface } from '../entities/category.entity.interface'

export interface CategoryRepositoryInterface {
  findAll(): Promise<CategoryInterface[]>
  getById(id: IdInterface): Promise<CategoryInterface>
  add(category: CategoryInterface): Promise<void>
  remove(category: CategoryInterface): Promise<void>
}
