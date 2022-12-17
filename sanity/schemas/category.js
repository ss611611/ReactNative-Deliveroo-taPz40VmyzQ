export default {
  name: 'category',
  title: 'Mwnu Category',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Category name',
      validation:(Rule) => Rule.required(),      
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image of Category',
      
    },
  ],
}
