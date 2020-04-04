import config from './config/db.config'
import { Module } from '@nestjs/common'
import { MikroOrmModule } from 'nestjs-mikro-orm'
import { CategoryModule } from './v1/category/category.module'
import { PingModule } from './v1/ping/news.module'

@Module({
  imports: [MikroOrmModule.forRoot({ ...config }), CategoryModule, PingModule],
})
export class AppModule {}
