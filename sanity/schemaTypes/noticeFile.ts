import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'notice',
  title: 'notice',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'desc',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'attachment',
      title: 'Attachment',
      type: 'file',
      options: {
        accept: '.pdf',
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
