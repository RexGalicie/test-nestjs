import { Controller, Get } from '@nestjs/common'
import { ApiResponse, ApiTags } from '@nestjs/swagger'

import { PingSuccessTransformer } from './response/transformers/ping.succes'

@ApiTags('General about')
@Controller('ping/v1')
export class PingController {
  @ApiResponse({
    status: 200,
    description: 'Success Ping',
    type: PingSuccessTransformer,
  })
  @Get()
  async ping(): Promise<PingSuccessTransformer> {
    return { ping: 'pong' }
  }
}
