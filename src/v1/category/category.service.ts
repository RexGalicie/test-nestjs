import { IdType } from './../../infrastructure/entities/id.type';
import { CreateCategoryDtoInterface } from './dto/create/create.category.dto.interface';
import { CategoryRepositoryInterface } from './domain/repositories/category.repository.interface';
import { Injectable, Inject } from '@nestjs/common';
import { CategoryServiceInterface } from './category.service.interface';
import { CategoryEntity } from './domain/entities/category.entity';

@Injectable()
export class CategoryService implements CategoryServiceInterface {
  private readonly repository: CategoryRepositoryInterface;

  constructor(@Inject('CategoryRepositoryInterface') repository: CategoryRepositoryInterface) {
    this.repository = repository;
  }
  async saveCategory({ title }: CreateCategoryDtoInterface): Promise<void> {
    const category = new CategoryEntity(IdType.generate(), title)
    this.repository.add(category)
  }
  deleteCategory(): void {
    throw new Error("Method not implemented.");
  }
}
