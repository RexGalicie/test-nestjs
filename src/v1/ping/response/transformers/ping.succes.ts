import { ApiProperty } from '@nestjs/swagger'
import { Expose } from 'class-transformer'

export class PingSuccessTransformer {
  @ApiProperty()
  @Expose()
  public ping: string
}
