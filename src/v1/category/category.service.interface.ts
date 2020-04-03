import { CreateCategoryDtoInterface } from './dto/create/create.category.dto.interface';

export interface CategoryServiceInterface {
  saveCategory(categoryDto: CreateCategoryDtoInterface): void
  deleteCategory(): void
}