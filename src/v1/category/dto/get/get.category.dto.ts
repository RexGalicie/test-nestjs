import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'
import { GetCategoryDtoInterface } from './get.category.dto interface'

export class GetCategoryDto implements GetCategoryDtoInterface {
  @ApiProperty()
  @IsNotEmpty()
  public id: string
}
