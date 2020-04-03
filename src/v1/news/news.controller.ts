import { NewsEntityDto } from './response/news.list';
import { CreateDto } from './dto/createDto';
import { NewsService } from './news.service';
import { Controller, Post, Body, Get } from '@nestjs/common';
import { ApiTags, ApiResponse, ApiCreatedResponse, ApiBearerAuth } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('news')
@Controller('v1/news')
export class NewsController {
  private service: NewsService

  constructor(service: NewsService) {
    this.service = service
  }

  @ApiCreatedResponse({ status: 201, description: 'The record has been successfully created.'})
  @ApiResponse({ status: 403, description: 'Forbidden.'})
  @Post()
   async create(@Body() createNewsDto: CreateDto): Promise<NewsEntityDto> {
    return this.service.saveNews(createNewsDto);
  }

  @ApiResponse({
    status: 200,
    description: 'The record has been successfully created.',
    type: NewsEntityDto,
    isArray: true
  })
  @Get()
  async all(): Promise<NewsEntityDto[]> {
    return this.service.find();
  }

}
