import { factory, primaryKey } from '@mswjs/data'
import { BlogType } from '../types/blog'

export const db = factory({
  // A "blog" model that describes what properties
  // each blog has.
  blog: {
    id: primaryKey(Number),
    title: String,
    body: String,
  },
})

export const defaultBlogs: BlogType[] = [
  {
    id: 1,
    title: 'title1',
    body: 'body1',
    author: 'author1',
  },
  {
    id: 2,
    title: 'title2',
    body: 'body2',
    author: 'author2',
  },
  {
    id: 3,
    title: 'title3',
    body: 'body3',
    author: 'author3',
  },
]

defaultBlogs.forEach((blog) => db.blog.create(blog))

// // The default blogs created each time you refresh the page.
// db.blog.create({ id: 1, title: 'title1', body: 'body1' })
// db.blog.create({ id: 2, title: 'Explore the sandbox', body: 'body' })
// db.blog.create({ id: 3, title: 'Learn about Data', body: 'body' })
// db.blog.create({
//   id: 4,
//   title: 'Install and try it out yourself',
//   body: 'body',
// })
