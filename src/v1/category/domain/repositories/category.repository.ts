import { EntityManager } from 'typeorm';
import { Injectable } from '@nestjs/common';

import { CategoryInterface } from './../entities/category.entity.interface';
import { CategoryRepositoryInterface } from './category.repository.interface';

@Injectable()
export class CategoryRepository implements CategoryRepositoryInterface {
  constructor(private readonly manager: EntityManager
    ) {}

  async add(category: CategoryInterface): Promise<CategoryInterface> {
    return this.manager.save(category)
  }
  
  async remove(category: CategoryInterface): Promise<void> {
    this.manager.softRemove(category)
  }
}