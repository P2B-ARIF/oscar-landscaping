import {defineType} from 'sanity'

export default defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  groups: [
    {name: 'getintouch', title: 'Get In Touch Section'},
    {name: 'experience', title: 'Experience Section'},
  ],
  fields: [
    // Get In Touch Section
    {
      name: 'getintouch',
      title: 'Get In Touch Section',
      type: 'object',
      group: 'getintouch',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
          initialValue: 'Your Full-Service Home and Landscape Experts',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
          initialValue:
            'Ready to start your landscaping or home improvement project? We"re here to help. Contact us today for a free estimate and personalized consultation.',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'experienceText',
          title: 'Experience Text',
          type: 'text',
          initialValue:
            'Lorem Ipsum is simply dummy text of free available market type setting industry',
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
      ],
    },

    {
      name: 'experience',
      title: 'Experience Section',
      type: 'document',
      group: 'experience',
      fields: [
        {
          name: 'bgImage',
          title: 'Background Image',
          type: 'image',
          options: {
            hotspot: true,
          },
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'heading',
          title: 'Heading',
          type: 'string',
          initialValue: 'We are nice people with a lot of experience.',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 3,
          initialValue:
            'Junk MTV quiz graced by fox whelps.\nBawds jog, flick quartz, vex nymphs.\nWaltz, bad nymph',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'stats',
          title: 'Statistics',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'value',
                  title: 'Value',
                  type: 'string',
                  initialValue: '10+',
                },
                {
                  name: 'label',
                  title: 'Label',
                  type: 'string',
                  initialValue: 'Years of Experience',
                },
              ],
            },
          ],
          initialValue: [
            {value: '10+', label: 'Years of Experience'},
            {value: '100+', label: 'Projects Completed'},
            {value: '50+', label: 'Happy Clients'},
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
