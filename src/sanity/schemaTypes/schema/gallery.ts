import {defineType} from 'sanity'

export default defineType({
  name: 'galleryPage',
  title: 'Gallery Page',
  type: 'document',
  groups: [
    {name: 'hero', title: 'Hero Section'},
    {name: 'intro', title: 'Introduction'},
    {name: 'content', title: 'Gallery Content'},
    {name: 'footer', title: 'Footer Section'},
  ],
  fields: [
    // Hero Section
    {
      name: 'hero',
      title: 'Hero',
      type: 'object',
      group: 'hero',
      fields: [
        {
          name: 'title',
          title: 'Page Title',
          type: 'string',
          initialValue: 'Gallery',
        },
        {
          name: 'breadcrumb',
          title: 'Breadcrumb Navigation',
          type: 'string',
          initialValue: 'Home / Gallery',
        },
      ],
    },

    // Introduction Section
    {
      name: 'introduction',
      title: 'Introduction',
      type: 'object',
      group: 'intro',
      fields: [
        {
          name: 'heading',
          title: 'Heading',
          type: 'string',
          initialValue: 'Discover the Beauty We’ve Created',
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 3,
          initialValue:
            'Browse through our gallery of completed landscaping and home improvement projects. Each image is a variety of transformation, creativity, and quality craftsmanship, for three visuals: inspire your next project.',
        },
      ],
    },

    // Gallery Content
    {
      name: 'galleryContent',
      title: 'Gallery Content',
      type: 'object',
      group: 'content',
      fields: [
        {
          name: 'images',
          title: 'Gallery Images',
          type: 'array',
          of: [{type: 'image'}],
          options: {
            layout: 'grid',
          },
        },
        {
          name: 'additionalText',
          title: 'Additional Content',
          type: 'text',
          rows: 3,
          initialValue:
            'Lorem ipsum dolor sit amet consectetur adipiscing elit. Aid est massa aliquip fosmod enim. Nonestimatum est ligera-netit augid bland. Nibhuis eius sed in magnum purtamnisi.',
        },
      ],
    },

    // Footer Section
    {
      name: 'footer',
      title: 'Footer',
      type: 'object',
      group: 'footer',
      fields: [
        {
          name: 'linksSection',
          title: 'Guilds Links',
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Section Title',
              type: 'string',
              initialValue: 'Guilds Links',
            },
            {
              name: 'links',
              title: 'Links',
              type: 'array',
              of: [{type: 'string'}],
              initialValue: ['Home', 'News', 'Galaxy', 'Contact'],
            },
          ],
        },
        {
          name: 'contactSection',
          title: 'Contacts Us',
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Section Title',
              type: 'string',
              initialValue: 'Contacts Us',
            },
            {
              name: 'address',
              title: 'Address',
              type: 'string',
              initialValue: 'S&P Mining (Gold, Spring) Jobs, WCPSE5',
            },
            {
              name: 'phone',
              title: 'Phone',
              type: 'string',
              initialValue: '70-347-3700',
            },
            {
              name: 'messageNumber',
              title: 'Message Number',
              type: 'string',
              initialValue: '57-314-6704',
            },
            {
              name: 'email',
              title: 'Email',
              type: 'string',
              initialValue: 'compt@gpse.com',
            },
          ],
        },
        {
          name: 'copyright',
          title: 'Copyright Text',
          type: 'string',
          initialValue: '© 2023 TV Quest Landscaping, all rights reserved.',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'hero.title',
      subtitle: 'introduction.heading',
    },
    prepare(selection) {
      return {
        title: selection.title || 'Gallery Page',
        subtitle: selection.subtitle || 'No introduction heading',
      }
    },
  },
})
