import { NewsEntity } from './entities/news.entity';
import { NewsRepository } from './news.repository';
import { Module } from '@nestjs/common';
import { NewsService } from './news.service';
import { NewsController } from './news.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([NewsEntity])],
  providers: [NewsService, NewsRepository],
  controllers: [NewsController]
})
export class NewsModule {}
