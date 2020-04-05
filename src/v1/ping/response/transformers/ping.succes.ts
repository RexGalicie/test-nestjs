import { ApiResponseProperty } from '@nestjs/swagger'
import { Expose } from 'class-transformer'

export class PingSuccessTransformer {
  @ApiResponseProperty()
  @Expose()
  public ping: string
}
