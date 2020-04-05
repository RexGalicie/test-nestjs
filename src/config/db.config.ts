import { Logger } from '@nestjs/common'
import { Options } from 'mikro-orm'

import { BaseEntity } from '../infrastructure/domain/entities/base.entity'
import { CategoryEntity } from '../v1/category/domain/entities/category.entity'

const logger = new Logger('MikroORM')

const options: Options = {
  type: 'postgresql',
  host: process.env.PGSQL_INSTANCE_CONNECTION_NAME
    ? `/cloudsql/${process.env.PGSQL_INSTANCE_CONNECTION_NAME}`
    : 'localhost',
  dbName: process.env.PGSQL_DATABASE || 'app',
  user: process.env.PGSQL_USERNAME || 'app',
  port: process.env.PGSQL_PORT ? parseInt(process.env.PGSQL_PORT, 10) : 54321,
  password: process.env.PGSQL_PASSWORD || 'secret',
  entities: [CategoryEntity, BaseEntity],
  tsNode: true,
  debug: true,
  cache: { enabled: process.env.NODE_ENV === 'production' ? false : true },
  logger: logger.log.bind(logger),
  forceUtcTimezone: true,
  strict: true,
  migrations: {
    tableName: 'mikro_orm_migrations', // migrations table name
    path: process.cwd() + '/migrations', // path to folder with migration files
    pattern: /^[\w-]+\d+\.ts$/, // how to match migration files
    transactional: true, // run each migration inside transaction
    disableForeignKeys: false, // try to disable foreign_key_checks (or equivalent)
    allOrNothing: true, // run all migrations in current batch in master transaction
    emit: 'ts', // migration generation mode
  },
  discovery: {
    tsConfigPath: './tsconfig.json',
  },
}

export default options
