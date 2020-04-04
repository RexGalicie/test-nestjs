import { Migration } from 'mikro-orm';

export class Migration20200404211457 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "category" ("uuid" uuid not null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "deleted_at" timestamptz(0) null default null, "title" varchar(255) not null, "active" bool not null, "soft_deleted" bool not null default false);');
    this.addSql('alter table "category" add constraint "category_pkey" primary key ("uuid");');
  }

}
