import {
  BadRequestException,
  ValidationError,
  ValidationPipe,
} from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { FastifyRequest } from 'fastify';
import { v4 } from 'uuid';

import { AppModule } from './app.module'
import { MetaDataTransformExtra } from './infrastructure/transformers/metadata.transform';
import { GetCategoryTransformer } from './v1/category/response/transformers/get.category';
import { PingSuccessTransformer } from './v1/ping/response/transformers/ping.succes';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({
      logger: [],
      // move to separat infrastructure use keys as const, not case sensative
      genReqId: (req: FastifyRequest) => req.headers['x-request-id'] || req.headers['x-correlation-id'] || v4(),
      modifyCoreObjects: true
    })
  )
  const globalPrefix = 'api'
  app.setGlobalPrefix(globalPrefix)
  app.useGlobalPipes(
    new ValidationPipe({
      validationError: { target: false, value: true },
      transform: true,
      exceptionFactory: (errors: ValidationError[]) =>
        new BadRequestException(errors),
    })
  )
  const port: number = Number(process.env.PORT) || 3000

  const options = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('The slack news bot')
    .setDescription('The slack news bot API description')
    .setVersion('1.0')
    .build()
  const document = SwaggerModule.createDocument(app, options, {
    // not good idea to use duplicates here but for waiting for issue response will leave as it is
    // this just for extrass should work via model schema
    extraModels: [
      MetaDataTransformExtra,
      PingSuccessTransformer,
      GetCategoryTransformer // remove when will resolved
    ]
  })
  SwaggerModule.setup('api/v1', app, document)
  await app.listen(port, '0.0.0.0')
  // tslint:disable-next-line: no-console
  console.log('Listening at http://localhost:' + port + '/' + globalPrefix)
}

bootstrap()
