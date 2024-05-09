import { type SchemaTypeDefinition } from 'sanity'
import hero from './schemaTypes/hero'
import events from './schemaTypes/events'
import gallery from './schemaTypes/gallery'
import team from './schemaTypes/team'
import noticeFile from './schemaTypes/noticeFile'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [hero,events,team,noticeFile,gallery],
}
