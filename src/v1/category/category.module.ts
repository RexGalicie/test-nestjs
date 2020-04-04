import { Module } from '@nestjs/common'
import { MikroOrmModule } from 'nestjs-mikro-orm'
import { CategoryController } from './category.controller'
import { Flusher } from '../../infrastructure/domain/flusher'
import { CategoryEntity } from './domain/entities/category.entity'
import { CategoryRepository } from './domain/repositories/category.repository'
import { CategoryService } from './category.service'

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
