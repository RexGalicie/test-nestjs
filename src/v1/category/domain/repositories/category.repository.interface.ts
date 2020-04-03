import { CategoryInterface } from '../entities/category.entity.interface';

export interface CategoryRepositoryInterface {
  add(category: CategoryInterface): Promise<CategoryInterface>  
  remove(category: CategoryInterface): Promise<void>
}