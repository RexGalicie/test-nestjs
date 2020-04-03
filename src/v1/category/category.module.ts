import { Flasher } from './../../infrastructure/domain/flusher';
import { Manager } from './../../infrastructure/domain/manager';
import { CategoryEntity } from './domain/entities/category.entity';
import { CategoryRepository } from './domain/repositories/category.repository';
import { CategoryService } from './category.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryController } from './category.controller';

@Module({
  providers: [
    CategoryService,
    Manager,
    { provide: 'CategoryRepositoryInterface', useClass: CategoryRepository }
  ],
  imports: [TypeOrmModule.forFeature([CategoryEntity])],
  controllers: [CategoryController]
})
export class CategoryModule {}
