import { Module } from '@nestjs/common'
import { APP_INTERCEPTOR } from '@nestjs/core';
import { MikroOrmModule } from 'nestjs-mikro-orm'

import config from './config/db.config'
import { ResponseTransformInterceptor } from './infrastructure/interceptors/response.transformer';
import { CategoryModule } from './v1/category/category.module'
import { PingModule } from './v1/ping/news.module'

@Module({
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseTransformInterceptor,
    },
  ],
  imports: [MikroOrmModule.forRoot({ ...config }), CategoryModule, PingModule],
})
export class AppModule {}
