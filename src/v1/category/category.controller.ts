import {
  Controller,
  Post,
  Body,
  Delete,
  Param,
  Get,
  Patch,
  Inject,
} from '@nestjs/common'
import {
  ApiTags,
  ApiResponse,
  ApiCreatedResponse,
  ApiBearerAuth,
  ApiForbiddenResponse,
  ApiNotFoundResponse,
} from '@nestjs/swagger'
import { CreateCategoryDto } from './dto/create/create.category.dto'
import { RemoveCategoryDto } from './dto/remove/remove.category.dto'
import { GetCategoryDto } from './dto/get/get.category.dto'
import { GetCategoryTransformer } from './response/transformers/get.category'
import { CategoryServiceInterface } from './category.service.interface'
import { GetCategoryTransformerInterface } from './response/transformers/get.category.interface'

@ApiBearerAuth()
@ApiTags('categories')
@Controller('v1/categories')
export class CategoryController {
  private readonly service: CategoryServiceInterface

  constructor(
    @Inject('CategoryServiceInterface') service: CategoryServiceInterface
  ) {
    this.service = service
  }

  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
  })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  @Post()
  async create(@Body() createCategoryDto: CreateCategoryDto): Promise<void> {
    return this.service.saveCategory(createCategoryDto)
  }

  @ApiResponse({
    status: 200,
    description: 'The records found.',
    type: GetCategoryTransformer,
  })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  @Get('')
  async findAll(): Promise<GetCategoryTransformerInterface[]> {
    return this.service.findAll()
  }

  @ApiResponse({
    status: 200,
    description: 'The record found',
    type: GetCategoryTransformer,
  })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  @ApiNotFoundResponse({ description: 'Category not found' })
  @Get('/:id')
  async get(
    @Param() getCategoryDto: GetCategoryDto
  ): Promise<GetCategoryTransformerInterface> {
    return this.service.getCategory(getCategoryDto)
  }

  @ApiResponse({
    status: 200,
    description: 'Return updated category',
    type: GetCategoryTransformer,
  })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  @ApiNotFoundResponse({ description: 'Category not found' })
  @Patch('/:id/deactivate')
  async deactivate(
    @Param() getCategoryDto: GetCategoryDto
  ): Promise<GetCategoryTransformerInterface> {
    return this.service.deactivate(getCategoryDto)
  }

  @ApiResponse({
    status: 200,
    description: 'Return updated category',
    type: GetCategoryTransformer,
  })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  @ApiNotFoundResponse({ description: 'Category not found' })
  @Patch('/:id/activate')
  async activate(
    @Param() getCategoryDto: GetCategoryDto
  ): Promise<GetCategoryTransformerInterface> {
    return this.service.activate(getCategoryDto)
  }

  @ApiResponse({
    status: 204,
    description: 'The record has been successfully deleted.',
  })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  @ApiNotFoundResponse({ description: 'Category not found' })
  @Delete('/:id')
  async delete(@Param() deleteCategoryDto: RemoveCategoryDto): Promise<void> {
    return this.service.deleteCategory(deleteCategoryDto)
  }
}
