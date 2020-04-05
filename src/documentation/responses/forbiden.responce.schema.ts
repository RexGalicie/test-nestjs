import { getSchemaPath } from '@nestjs/swagger';
import { SchemaObject } from '@nestjs/swagger/dist/interfaces/open-api-spec.interface';

import { MetaDataTransformExtra } from '../../infrastructure/transformers/metadata.transform';

export const ForbidenResopnseSchema: SchemaObject = {
  type: 'object',
  required: ['_meta', 'message', 'status', 'code'],
  properties: {
    _meta: { $ref: getSchemaPath(MetaDataTransformExtra) },
    message: {
      default: 'Invalid permissions',
      description: 'Error message for a client',
      type: 'string'
    },
    code: {
      default: 'core.invalidPermissions',
      description: 'Error code',
      type: 'string'
    },
    status: {
      default: 'error',
      description: 'response status',
      type: 'string'
    }
  }
}