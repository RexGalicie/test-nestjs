import { CreateCategoryDtoInterface } from './dto/create/create.category.dto interface'
import { GetCategoryDtoInterface } from './dto/get/get.category.dto interface'
import { RemoveCategoryDtoInterface } from './dto/remove/remove.category.dto interface'
import { GetCategoryTransformerInterface } from './response/transformers/get.category.interface'

export interface CategoryServiceInterface {
  saveCategory(categoryDto: CreateCategoryDtoInterface): void
  deleteCategory(removeCategoryDto: RemoveCategoryDtoInterface): Promise<void>
  getCategory({
    id,
  }: GetCategoryDtoInterface): Promise<GetCategoryTransformerInterface>
  deactivate({
    id,
  }: GetCategoryDtoInterface): Promise<GetCategoryTransformerInterface>

  activate({
    id,
  }: GetCategoryDtoInterface): Promise<GetCategoryTransformerInterface>

  findAll(): Promise<GetCategoryTransformerInterface[]>
}
