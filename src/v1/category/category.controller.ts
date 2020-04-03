import { CategoryService } from './category.service';

import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags, ApiResponse, ApiCreatedResponse, ApiBearerAuth } from '@nestjs/swagger';
import { CreateCategoryDtoInterface } from './dto/create/create.category.dto.interface';

// @ApiBearerAuth()
@ApiTags('categories')
@Controller('v1/categories')
export class CategoryController {
  private readonly service: CategoryService

  constructor(service: CategoryService) {
    this.service = service
  }

  @ApiCreatedResponse({ status: 201, description: 'The record has been successfully created.'})
  @ApiResponse({ status: 403, description: 'Forbidden.'})
  @Post()
   async create(@Body() CreateCategoryDto: CreateCategoryDtoInterface): Promise<void> {
    return this.service.saveCategory(CreateCategoryDto);
  }
}
