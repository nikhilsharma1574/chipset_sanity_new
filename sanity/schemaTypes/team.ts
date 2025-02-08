import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'team',
  title: 'Team',
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
      name: 'members',
      title: 'Members',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              type: 'image',
              name: 'image',
              title: 'Image',
              options: {
                hotspot: true, // Optional: Enable hotspot for image cropping
              },
            },
            {
              type: 'string',
              name: 'name',
              title: 'Name',
            },
            {
              type: 'string', // Add a new field for the role
              name: 'role',
              title: 'Role',
            },
          ],
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
});