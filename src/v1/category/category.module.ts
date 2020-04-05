import { Module } from '@nestjs/common'
import { MikroOrmModule } from 'nestjs-mikro-orm'

import { Flusher } from '../../infrastructure/domain/flusher'
import { CategoryController } from './category.controller'
import { CategoryService } from './category.service'
import { CategoryEntity } from './domain/entities/category.entity'
import { CategoryRepository } from './domain/repositories/category.repository'

@Module({
  providers: [
    Flusher,
    { provide: 'CategoryServiceInterface', useClass: CategoryService },
    { provide: 'CategoryRepositoryInterface', useClass: CategoryRepository },
  ],
  imports: [
    MikroOrmModule.forFeature({
      entities: [CategoryEntity],
    }),
  ],
  controllers: [CategoryController],
})
export class CategoryModule {}
