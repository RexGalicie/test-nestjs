import { GetCategoryTransformerInterface } from './response/transformers/get.category.interface'
import { Injectable, Inject } from '@nestjs/common'
import { CategoryServiceInterface } from './category.service.interface'
import { Id } from './../../infrastructure/entities/id'
import { CategoryRepositoryInterface } from './domain/repositories/category.repository.interface'
import { CategoryEntity } from './domain/entities/category.entity'
import { Flusher } from '../../infrastructure/domain/flusher'
import { CreateCategoryDtoInterface } from './dto/create/create.category.dto interface'
import { RemoveCategoryDtoInterface } from './dto/remove/remove.category.dto interface'
import { GetCategoryDtoInterface } from './dto/get/get.category.dto interface'
import { plainToClass } from 'class-transformer'
import { GetCategoryTransformer } from './response/transformers/get.category'

@Injectable()
export class CategoryService implements CategoryServiceInterface {
  private readonly repository: CategoryRepositoryInterface
  private readonly flusher: Flusher

  constructor(
    @Inject('CategoryRepositoryInterface')
    repository: CategoryRepositoryInterface,
    flusher: Flusher
  ) {
    this.repository = repository
    this.flusher = flusher
  }
  async saveCategory({ title }: CreateCategoryDtoInterface): Promise<void> {
    const category = new CategoryEntity(Id.generate(), title)
    this.repository.add(category)
    this.flusher.flush()
  }

  async deactivate({
    id,
  }: GetCategoryDtoInterface): Promise<GetCategoryTransformerInterface> {
    const category = await this.repository.getById(new Id(id))
    category.disactivate()
    this.flusher.flush()
    return plainToClass(GetCategoryTransformer, category, {
      strategy: 'excludeAll',
    })
  }

  async activate({
    id,
  }: GetCategoryDtoInterface): Promise<GetCategoryTransformerInterface> {
    const category = await this.repository.getById(new Id(id))
    category.activate()
    this.flusher.flush()
    return plainToClass(GetCategoryTransformer, category, {
      strategy: 'excludeAll',
    })
  }

  async findAll(): Promise<GetCategoryTransformerInterface[]> {
    const category = await this.repository.findAll()
    return plainToClass(GetCategoryTransformer, category, {
      strategy: 'excludeAll',
    })
  }

  async getCategory({
    id,
  }: GetCategoryDtoInterface): Promise<GetCategoryTransformerInterface> {
    const category = await this.repository.getById(new Id(id))
    return plainToClass(GetCategoryTransformer, category, {
      strategy: 'excludeAll',
    })
  }

  async deleteCategory({ id }: RemoveCategoryDtoInterface): Promise<void> {
    const category = await this.repository.getById(new Id(id))

    this.repository.remove(category)

    this.flusher.flush()
  }
}
