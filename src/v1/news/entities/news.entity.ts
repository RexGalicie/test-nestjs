import { IdTypeInterface } from './../../../infrastructure/entities/id.type.interface';
import { BaseEntity } from '../../../infrastructure/entities/base.entity';
import { NewsInterface } from './news.entity.interface';
import { Column, Entity } from 'typeorm';

@Entity('news')
export class NewsEntity extends BaseEntity implements NewsInterface {
  @Column()
  private title: string

  @Column()
  private url: string

  constructor(id: IdTypeInterface, title: string, url: string) {
    super(id)
    this.title = title
    this.url = url
  }
  setTitle(title: string): void {
    this.title = title
  }
  setUrl(url: string): void {
    this.url = url
  }
  getTitle(): string {
    return this.title
  }
  getUrl(): string {
   return this.url
  }
}