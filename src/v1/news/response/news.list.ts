import { ApiProperty } from '@nestjs/swagger'
import { Expose } from 'class-transformer'

export class NewsEntityDto {
  @ApiProperty()
  @Expose()
  id: string
  
  @ApiProperty()
  @Expose()
  title: string
  
  @ApiProperty()
  @Expose()
  url: string
}