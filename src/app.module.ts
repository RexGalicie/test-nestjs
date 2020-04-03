import { Manager } from './infrastructure/domain/manager';
import { EntityManager, Connection, QueryRunner } from 'typeorm';
import { CategoryEntity } from './v1/category/domain/entities/category.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { CategoryModule } from './v1/category/category.module';
import { NewsEntity } from './v1/news/entities/news.entity';
import { NewsModule } from './v1/news/news.module';

const postgress: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  database: 'app',
  username: 'app',
  port: 54321,
  password: 'secret',
  entities: [NewsEntity, CategoryEntity],
  synchronize: true,
}

@Module({
  imports: [
    TypeOrmModule.forRoot({...postgress}),
    NewsModule,
    CategoryModule,
  ]
})
export class AppModule {}
