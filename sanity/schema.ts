import { type SchemaTypeDefinition } from 'sanity'


import hero from './schemaTypes/hero'
import events from './schemaTypes/events'
import notice from './schemaTypes/notice'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [hero,events,notice],
}
