import { Controller, Get } from '@nestjs/common'
import { ApiResponse, ApiTags, getSchemaPath } from '@nestjs/swagger'

import { MetaDataTransformExtra } from './../../infrastructure/transformers/metadata.transform';
import { PingSuccessTransformer } from './response/transformers/ping.succes'

@ApiTags('General about')
@Controller('ping')
export class PingController {
  @ApiResponse({
    schema: {
      type: 'object',
      properties: {
        _meta: { $ref: getSchemaPath(MetaDataTransformExtra) },
        status: {
          default: 'success',
          description: 'response status',
          type: 'string'
        },
        data: { $ref: getSchemaPath(PingSuccessTransformer) },
      }
    },
    status: 200,
    description: 'Success Ping',
  })
  @Get()
  async ping(): Promise<PingSuccessTransformer> {
    return { ping: 'pong' }
  }
}
