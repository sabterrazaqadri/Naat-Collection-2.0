import { type SchemaTypeDefinition } from 'sanity'
import { lyrics } from '../schemas/lyrics'
import { category } from '../schemas/category'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [lyrics, category],
}
