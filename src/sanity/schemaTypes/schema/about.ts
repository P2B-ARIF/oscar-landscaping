import {defineType} from 'sanity'

export default defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  groups: [
    {name: 'hero', title: 'Hero Section'},
    {name: 'mission', title: 'Mission Statement'},
    {name: 'approach', title: 'Approach Section'},
    {name: 'services', title: 'Service Overview'},
    {name: 'grid', title: 'Services Grid'},
    {name: 'experience', title: 'Experience Section'},
    {name: 'social', title: 'Social Media'},
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
          title: 'Main Title',
          type: 'string',
          initialValue: 'About Us',
        },
        {
          name: 'subtitle',
          title: 'Subtitle',
          type: 'string',
          initialValue: 'Your Trusted Partner for Home and Landscape Transformations',
        },
      ],
    },

    // Mission Statement
    {
      name: 'mission',
      title: 'Mission',
      type: 'object',
      group: 'mission',
      fields: [
        {
          name: 'content',
          title: 'Content',
          type: 'text',
          rows: 4,
          initialValue:
            'A focus on the implementation, we prepare to attach highly structured materials to our home industry. To ensure that a new family is committed to creating a safe and inclusive environment in relation to future projects.',
        },
      ],
    },

    // Approach Section
    {
      name: 'approach',
      title: 'Approach',
      type: 'object',
      group: 'approach',
      fields: [
        {
          name: 'title',
          title: 'Section Title',
          type: 'string',
          initialValue: 'Our approach to adults',
        },
        {
          name: 'points',
          title: 'Bullet Points',
          type: 'array',
          of: [{type: 'string'}],
          initialValue: [
            'Create activities to enhance',
            'Enhance your professional skills and wellbeing,',
            'Foster relationships with our communities.',
          ],
        },
        {
          name: 'description',
          title: 'Additional Text',
          type: 'text',
          rows: 3,
          initialValue:
            'Provide an existing and easy practice, connecting our families to local communities and providing opportunities for individuals. Explore any particular ways to maintain adequate living conditions.',
        },
      ],
    },

    // Service Overview
    {
      name: 'serviceOverview',
      title: 'Service Overview',
      type: 'object',
      group: 'services',
      fields: [
        {
          name: 'title',
          title: 'Section Title',
          type: 'string',
          initialValue: 'Your Full-Service Home and Landscape',
        },
        {
          name: 'content',
          title: 'Content',
          type: 'text',
          rows: 4,
          initialValue:
            'We are also working with our home-based organizations, including the University of South Carolina, the University of New York, and the University of Southern California.',
        },
        {
          name: 'subSection',
          title: 'Home & Landscape',
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Subtitle',
              type: 'string',
              initialValue: 'Home Home & Landscape',
            },
            {
              name: 'content',
              title: 'Content',
              type: 'text',
              rows: 3,
              initialValue:
                'Our home and landscape are built by our community and our people, as well as our community and community partners.',
            },
          ],
        },
      ],
    },

    // Services Grid
    {
      name: 'servicesGrid',
      title: 'Services Grid',
      type: 'object',
      group: 'grid',
      fields: [
        {
          name: 'title',
          title: 'Section Title',
          type: 'string',
          initialValue: 'From Fresh Paint to Fresh Sod – We’ve Got You Covered',
        },
        {
          name: 'columns',
          title: 'Service Columns',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'title',
                  title: 'Column Title',
                  type: 'string',
                },
                {
                  name: 'services',
                  title: 'Services',
                  type: 'array',
                  of: [
                    {
                      type: 'object',
                      fields: [
                        {
                          name: 'title',
                          title: 'Service Title',
                          type: 'string',
                        },
                        {
                          name: 'description',
                          title: 'Description',
                          type: 'string',
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
          initialValue: [
            {
              title: 'Innerive Painting',
              services: [
                {
                  title: 'Paint space',
                  description: 'Smooth texture and open texture areas',
                },
              ],
            },
            {
              title: 'Refresour Remodeling',
              services: [
                {
                  title: 'Refresour options',
                  description: 'Use fabrics like using and smooth materials',
                },
              ],
            },
          ],
        },
      ],
    },

    // Experience Section
    {
      name: 'experience',
      title: 'Experience',
      type: 'object',
      group: 'experience',
      fields: [
        {
          name: 'content',
          title: 'Content',
          type: 'text',
          rows: 3,
          initialValue:
            'We are nice people with a lot of experience. Our HR has grown up from 100% in the world, and we have been enjoying these delicious experiences.',
        },
      ],
    },

    // Social Media
    {
      name: 'socialMedia',
      title: 'Social Media',
      type: 'object',
      group: 'social',
      fields: [
        {
          name: 'title',
          title: 'Section Title',
          type: 'string',
          initialValue: 'Contact us with:',
        },
        {
          name: 'links',
          title: 'Social Links',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'platform',
                  title: 'Platform',
                  type: 'string',
                },
                {
                  name: 'url',
                  title: 'URL',
                  type: 'url',
                },
              ],
            },
          ],
          initialValue: [
            {platform: 'Facebook', url: 'www.facebook.com/facebookresearch'},
            {platform: 'Twitter', url: 'www.twitter.com/facebookresearch'},
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'hero.title',
      subtitle: 'hero.subtitle',
    },
    prepare(selection) {
      return {
        title: selection.title || 'About Page',
        subtitle: selection.subtitle || 'Untitled',
      }
    },
  },
})
