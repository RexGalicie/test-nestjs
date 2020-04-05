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

import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter()
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
  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('api/v1', app, document)

  await app.listen(port, '0.0.0.0')
  console.log('Listening at http://localhost:' + port + '/' + globalPrefix)
}

bootstrap()
