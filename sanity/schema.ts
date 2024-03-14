import { type SchemaTypeDefinition } from 'sanity'


import hero from './schemaTypes/hero'
import events from './schemaTypes/events'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [hero,events],
}
