import { Migration } from 'mikro-orm';

export class Migration20200405011712 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "category" drop constraint if exists "category_deleted_at_check";');
    this.addSql('alter table "category" alter column "deleted_at" type timestamptz(0) using ("deleted_at"::timestamptz(0));');
    this.addSql('alter table "category" alter column "deleted_at" set default null;');
  }
}
