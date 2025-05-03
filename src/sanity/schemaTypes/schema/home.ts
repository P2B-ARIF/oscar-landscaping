import {defineType} from 'sanity'

export default defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  groups: [
    {
      name: 'header',
      title: 'Header Section',
    },
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
    // Header Section
    {
      name: 'header',
      title: 'Header',
      type: 'object',
      group: 'header',
      fields: [
        {
          name: 'address',
          title: 'Address',
          type: 'string',
          initialValue: '92072 Pinnickinick Street, WA 98370',
        },
        {
          name: 'email',
          title: 'Email',
          type: 'string',
          initialValue: 'info@website.com',
        },
        {
          name: 'logo',
          title: 'Logo',
          type: 'image',
        },
        {
          name: 'navigation',
          title: 'Navigation Links',
          type: 'array',
          of: [{type: 'string'}],
          initialValue: [
            'Home',
            'About',
            'Services',
            'Service Details',
            'Blog',
            'Blog Details',
            'Gallery',
          ],
        },
        {
          name: 'ctaButton',
          title: 'CTA Button',
          type: 'string',
          initialValue: 'Get A Quote',
        },
      ],
    },

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
          initialValue: 'Building Beautiful Spaces Inside and Out',
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 4,
          initialValue:
            "At Oscar's Home Improvements, we believe your home from the curb to the kitchen should be a place you love...",
        },
        {
          name: 'ctaButton',
          title: 'CTA Button',
          type: 'string',
          initialValue: 'Call today for a FREE consultation!',
        },
        {
          name: 'backgroundImage',
          title: 'Background Image',
          type: 'image',
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
                },
                {
                  name: 'description',
                  title: 'Description',
                  type: 'text',
                  rows: 3,
                },
                {
                  name: 'icon',
                  title: 'Icon',
                  type: 'image',
                },
              ],
            },
          ],
          initialValue: [
            {
              title: 'Landscaping Services',
              description:
                'Transform your outdoors with retaining walls, sod installation, lawn care, and more...',
            },
            {
              title: 'Home Improvement Services',
              description:
                "Upgrade your home's beauty and value with interior and exterior painting...",
            },
            {
              title: 'Remodeling & Carpentry',
              description:
                'From stunning bathroom remodels to custom deck building and expert carpentry...',
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
          name: 'title',
          title: 'Title',
          type: 'string',
          initialValue: 'Your Trusted Partner for Home and Landscape Transformations',
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 5,
          initialValue:
            "At Oscar's Home Improvements, we're passionate about helping homeowners create spaces they're proud of...",
        },
        {
          name: 'approachPoints',
          title: 'Approach Points',
          type: 'array',
          of: [{type: 'string'}],
          initialValue: [
            'Listen carefully to what you want.',
            'Craft a clear plan tailored to your needs and budget.',
            'Deliver outstanding results, on time and with no surprises.',
          ],
        },
        {
          name: 'yearsExperience',
          title: 'Years of Experience',
          type: 'number',
          initialValue: 25,
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
          name: 'title',
          title: 'Section Title',
          type: 'string',
          initialValue: 'Our Creative Team',
        },
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
                },
                {
                  name: 'position',
                  title: 'Position',
                  type: 'string',
                },
                {
                  name: 'image',
                  title: 'Image',
                  type: 'image',
                },
              ],
            },
          ],
          initialValue: [
            {
              name: 'David Miller',
              position: 'Garden Maintenance Expert',
            },
            {
              name: 'Emily Carter',
              position: 'Horticulture Specialist',
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
          initialValue: "Why Choose Oscar's Home Improvement?",
        },
        {
          name: 'points',
          title: 'Points',
          type: 'array',
          of: [{type: 'string'}],
          initialValue: [
            'Quality Workmanship',
            'Attention to Detail',
            'Affordable, Transparent Pricing',
            'Personalized Service',
            'Fully Licensed & Insured',
          ],
        },
        {
          name: 'ctaButton',
          title: 'CTA Button',
          type: 'string',
          initialValue: 'Call today for a FREE consultation!',
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
          name: 'title',
          title: 'Section Title',
          type: 'string',
          initialValue: 'What our clients say',
        },
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
                },
                {
                  name: 'author',
                  title: 'Author',
                  type: 'string',
                },
                {
                  name: 'position',
                  title: 'Position',
                  type: 'string',
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
          name: 'title',
          title: 'Section Title',
          type: 'string',
          initialValue: "From Fresh Paint to Fresh Sod — We've Got You Covered",
        },
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
                },
                {
                  name: 'description',
                  title: 'Description',
                  type: 'text',
                  rows: 3,
                },
                {
                  name: 'image',
                  title: 'Image',
                  type: 'image',
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
          title: 'Section Title',
          type: 'string',
          initialValue: 'Building Beautiful Spaces Inside and Out',
        },
        {
          name: 'description',
          title: 'Description',
          type: 'string',
          initialValue:
            "Ready to start your landscaping or home improvement project? We're here to help.",
        },
        {
          name: 'address',
          title: 'Address',
          type: 'string',
          initialValue: '6357 Rolling Road, Springfield, VA 22152',
        },
        {
          name: 'phone',
          title: 'Phone',
          type: 'string',
          initialValue: '703-913-7008',
        },
        {
          name: 'email',
          title: 'Email',
          type: 'string',
          initialValue: 'example@gmail.com',
        },
        {
          name: 'formFields',
          title: 'Form Fields',
          type: 'array',
          of: [{type: 'string'}],
          initialValue: ['Name', 'Phone', 'Email Address', 'Services', 'Your Message'],
        },
      ],
    },

    // Footer
    {
      name: 'footer',
      title: 'Footer',
      type: 'object',
      group: 'footer',
      fields: [
        {
          name: 'copyright',
          title: 'Copyright Text',
          type: 'string',
          initialValue: '© 2025 Oscar Landscaping. All rights reserved.',
        },
        {
          name: 'quickLinks',
          title: 'Quick Links',
          type: 'array',
          of: [{type: 'string'}],
          initialValue: ['Home', 'About', 'Services', 'Gallery', 'Contact'],
        },
        {
          name: 'contactInfo',
          title: 'Contact Information',
          type: 'object',
          fields: [
            {
              name: 'address',
              title: 'Address',
              type: 'string',
            },
            {
              name: 'phone',
              title: 'Phone',
              type: 'string',
            },
            {
              name: 'managerPhone',
              title: 'Manager Phone',
              type: 'string',
            },
            {
              name: 'email',
              title: 'Email',
              type: 'string',
            },
          ],
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
