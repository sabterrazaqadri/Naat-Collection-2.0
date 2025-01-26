import {defineField, defineType} from 'sanity'

export const lyrics = defineType({
    name: 'lyrics',
    title: 'Lyrics',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'lyrics',
            title: 'Lyrics',
            type: 'text',
        }),
        defineField({
            name: 'author',
            title: 'Author',
            type: 'string',
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: "reference",
  to: [{ type: "category" }]
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

    ],
})