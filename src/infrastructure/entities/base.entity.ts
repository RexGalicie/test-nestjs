import { IdTypeInterface } from './id.type.interface';
import {Exclude} from "class-transformer";
import { Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';
import { BaseEntityInterface } from './base.entity.interface';
import { IdType } from './id.type';

export class BaseEntity implements BaseEntityInterface {

  constructor(id: IdTypeInterface) {
    this.uuid = id
  }

  @Exclude()
  @Column({ type: 'uuid', primary: true, transformer: IdType.transformer })
  private uuid: IdTypeInterface

  @Exclude()
  @CreateDateColumn({ name: 'created_at' })
  protected createdDate: Date

  @Exclude()
  @UpdateDateColumn({ name: 'updated_at' })
  protected updatedDate: Date

  @Exclude()
  @DeleteDateColumn({ name: 'deleted_at' })
  protected deletedDate: Date

  public get id(): string {
    return this.uuid.getValue()
  }
}