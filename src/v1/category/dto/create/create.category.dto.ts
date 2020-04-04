import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'
import { CreateCategoryDtoInterface } from './create.category.dto interface'

export class CreateCategoryDto implements CreateCategoryDtoInterface {
  @ApiProperty()
  @IsNotEmpty()
  public title: string
}
