import {defineType} from 'sanity'

export default defineType({
  name: 'servicesPage',
  title: 'Services Page',
  type: 'document',
  groups: [
    {name: 'hero', title: 'Hero Section'},
    {name: 'services', title: 'Services Section'},
    {name: 'footer', title: 'Footer Section'},
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
          name: 'title',
          title: 'Title',
          type: 'string',
          initialValue: 'Your Full-Service Home and Landscape Experts',
        },
        {
          name: 'description',
          title: 'Description',
          type: 'string',
          initialValue: 'We are nice people with a lot of experience.',
        },
      ],
    },
  ],
})
