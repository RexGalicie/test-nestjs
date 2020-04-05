import { Injectable, NotFoundException } from '@nestjs/common'
import { EntityManager } from 'mikro-orm'

import { IdInterface } from '../../../../infrastructure/domain/entities/id.interface'
import { CategoryInterface } from './../entities/category.entity.interface'
import { CategoryEntity } from '../entities/category.entity'
import { CategoryRepositoryInterface } from './category.repository.interface'

@Injectable()
export class CategoryRepository implements CategoryRepositoryInterface {
  constructor(private readonly manager: EntityManager) {}

  async getById(id: IdInterface): Promise<CategoryInterface> {
    const category = await this.manager.findOne(CategoryEntity, {
      uuid: id.getValue(),
    })
    if (!category) {
      throw new NotFoundException('Category not found')
    }
    return category
  }

  async findAll(): Promise<CategoryInterface[]> {
    return await this.manager.find(CategoryEntity, { softDeleted: false })
  }

  async add(category: CategoryInterface): Promise<void> {
    return this.manager.persist(category)
  }

  async remove(category: CategoryInterface): Promise<void> {
    this.manager.removeEntity(category)
  }
}
