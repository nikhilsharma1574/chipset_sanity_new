import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'notice',
  title: 'Notice',
  type: 'document',
  fields: [
    defineField({
      name: 'notice',
      title: 'Notice',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'notice',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'pdf',
      title: 'PDF',
      type: 'file'
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
