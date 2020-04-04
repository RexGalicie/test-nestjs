import { ApiProperty } from '@nestjs/swagger'
import { Expose } from 'class-transformer'
import { GetCategoryTransformerInterface } from './get.category.interface'

export class GetCategoryTransformer implements GetCategoryTransformerInterface {
  @ApiProperty()
  @Expose()
  uuid: string

  @ApiProperty()
  @Expose()
  title: string

  @ApiProperty()
  @Expose()
  active: boolean

  @ApiProperty()
  @Expose()
  createdAt: Date

  @ApiProperty()
  @Expose()
  updatedAt: Date
}
