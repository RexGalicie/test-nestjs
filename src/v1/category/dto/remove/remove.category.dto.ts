import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'

import { RemoveCategoryDtoInterface } from './remove.category.dto interface'

export class RemoveCategoryDto implements RemoveCategoryDtoInterface {
  @ApiProperty()
  @IsNotEmpty()
  public id: string
}
