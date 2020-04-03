import { IdType } from '../../infrastructure/entities/id.type';
import { NewsEntity } from './entities/news.entity';
import { EntityManager, Repository } from "typeorm";
import { Injectable } from '@nestjs/common';
import { NewsInterface } from './entities/news.entity.interface';
import { CreateDto } from './dto/createDto';
import { InjectRepository, InjectEntityManager } from '@nestjs/typeorm';

@Injectable()
export class NewsRepository {
  constructor(
    @InjectRepository(NewsEntity) private repository: Repository<NewsInterface>,
    @InjectEntityManager() private manager: EntityManager
    ) { }

  public createNews = async (data: CreateDto): Promise<NewsInterface> => {
    const news = new NewsEntity(IdType.generate(), data.title, data.url)
    return this.manager.save(news);
  };

  public async getAll() {
    return this.repository.find()
  }
}