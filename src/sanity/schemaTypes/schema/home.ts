import {defineType} from 'sanity'

export default defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  groups: [
    {
      name: 'hero',
      title: 'Hero Section',
    },
    {
      name: 'services',
      title: 'Services Section',
    },
    {
      name: 'about',
      title: 'About Section',
    },
    {
      name: 'full_services',
      title: 'Full Services Section',
    },
    {
      name: 'team',
      title: 'Team Section',
    },
    {
      name: 'whyChooseUs',
      title: 'Why Choose Us',
    },
    {
      name: 'testimonials',
      title: 'Testimonials',
    },
    {
      name: 'serviceHighlights',
      title: 'Service Highlights',
    },
    {
      name: 'contact',
      title: 'Contact Section',
    },
    {
      name: 'footer',
      title: 'Footer',
    },
  ],
  fields: [
    // Hero Section
    {
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      group: 'hero',
      fields: [
        {
          name: 'heading',
          title: 'Heading',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'title',
          title: 'Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 4,
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'ctaButton',
          title: 'CTA Button Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'rightImage',
          title: 'Right Side Image',
          type: 'image',
          options: {
            hotspot: true,
          },
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'rightTopText',
          title: 'Right Side Top Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
      ],
    },

    // Services Section
    {
      name: 'services',
      title: 'Services',
      type: 'object',
      group: 'services',
      fields: [
        {
          name: 'categories',
          title: 'Service Categories',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: 'description',
                  title: 'Description',
                  type: 'text',
                  rows: 3,
                  validation: (Rule) => Rule.required(),
                },
              ],
            },
          ],
        },
      ],
    },

    // About Section
    {
      name: 'about',
      title: 'About',
      type: 'object',
      group: 'about',
      fields: [
        {
          name: 'leftImage',
          title: 'Left Side Image',
          type: 'image',
          options: {
            hotspot: true,
          },
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'title',
          title: 'Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 5,
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'approachPoints',
          title: 'Approach Points',
          type: 'array',
          of: [{type: 'block'}],
        },
        {
          name: 'description2',
          title: 'Bottom Description',
          type: 'text',
          rows: 5,
        },
        {
          name: 'yearsExperience',
          title: 'Years of Experience',
          type: 'number',
          validation: (Rule) => Rule.required(),
        },
      ],
    },

    // What We Do Best
    {
      name: 'full_services',
      title: 'Full Services',
      type: 'object',
      group: 'full_services',
      fields: [
        {
          name: 'categories',
          title: 'Service Categories',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: 'description',
                  title: 'Description',
                  type: 'text',
                  rows: 3,
                  validation: (Rule) => Rule.required(),
                },
              ],
            },
          ],
        },
      ],
    },

    // Team Section
    {
      name: 'team',
      title: 'Team',
      type: 'object',
      group: 'team',
      fields: [
        {
          name: 'members',
          title: 'Team Members',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'name',
                  title: 'Name',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: 'position',
                  title: 'Position',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: 'image',
                  title: 'Image',
                  type: 'image',
                  options: {
                    hotspot: true,
                  },
                  validation: (Rule) => Rule.required(),
                },
              ],
            },
          ],
        },
      ],
    },

    // Why Choose Us Section
    {
      name: 'whyChooseUs',
      title: 'Why Choose Us',
      type: 'object',
      group: 'whyChooseUs',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'points',
          title: 'Points',
          type: 'array',
          of: [{type: 'string'}],
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'rightTitle',
          title: 'Right Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
      ],
    },

    // Testimonials Section
    {
      name: 'testimonials',
      title: 'Testimonials',
      type: 'object',
      group: 'testimonials',
      fields: [
        {
          name: 'items',
          title: 'Testimonials',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'quote',
                  title: 'Quote',
                  type: 'text',
                  rows: 3,
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: 'author',
                  title: 'Author',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: 'position',
                  title: 'Position',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                },
              ],
            },
          ],
        },
      ],
    },

    // Service Highlights Section
    {
      name: 'serviceHighlights',
      title: 'Service Highlights',
      type: 'object',
      group: 'serviceHighlights',
      fields: [
        {
          name: 'services',
          title: 'Highlighted Services',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'name',
                  title: 'Service Name',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: 'description',
                  title: 'Description',
                  type: 'text',
                  rows: 3,
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: 'image',
                  title: 'Image',
                  type: 'image',
                  options: {
                    hotspot: true,
                  },
                  validation: (Rule) => Rule.required(),
                },
              ],
            },
          ],
          initialValue: [
            {
              name: 'Interior Painting',
              description: 'Fresh colors, smooth finishes, and clean lines for every room.',
            },
            {
              name: 'Bathroom Remodeling',
              description: 'Modern upgrades, new fixtures, tile work, and complete makeovers.',
            },
          ],
        },
      ],
    },

    // Contact Section
    {
      name: 'contact',
      title: 'Contact',
      type: 'object',
      group: 'contact',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'description',
          title: 'Description',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },

        {
          name: 'services',
          title: 'Services Lists',
          type: 'array',
          of: [{type: 'string'}],
          validation: (Rule) => Rule.required(),
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'header.title',
      media: 'header.logo',
    },
    prepare(selection) {
      return {
        title: 'Home Page',
        subtitle: "Oscar's Home Improvements",
        media: selection.media,
      }
    },
  },
})
