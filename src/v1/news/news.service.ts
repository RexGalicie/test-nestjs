import { NewsRepository } from './news.repository';
import { Injectable } from '@nestjs/common';
import { NewsEntityDto } from './response/news.list';
import { plainToClass } from 'class-transformer';
import { CreateDto } from './dto/createDto';

@Injectable()
export class NewsService {
  private repository: NewsRepository
  
  constructor(repository: NewsRepository) {
    this.repository = repository
  }

  public async saveNews(data: CreateDto): Promise<NewsEntityDto> {
    const news = await this.repository.createNews(data)
    return plainToClass(NewsEntityDto, news, { strategy: 'excludeAll' })
  }

  public async find(): Promise<NewsEntityDto[]> {
    const result = await this.repository.getAll()
    return plainToClass(NewsEntityDto, result, { strategy: 'excludeAll' })
  }
}
