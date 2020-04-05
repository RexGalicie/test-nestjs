import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class MetaDataTransformExtra {
  @Expose()
  @ApiProperty({ name: 'response_id' })
  readonly requestId: string;

  @Expose()
  @ApiProperty()
  readonly date: Date;
}