import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'hero',
  title: 'Hero',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
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
      name: 'mainImage',
      title: 'Main image',
      type: 'array',
      of:[
        {
            name:"image",
            type:"image",
            title:"Image"
        },
      ],

    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },

  },
})
