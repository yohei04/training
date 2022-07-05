import { factory, manyOf, oneOf, primaryKey } from '@mswjs/data'
import { BlogType } from '../types/blog'
import { UserType } from '../types/user'

export const db = factory({
  // A "blog" model that describes what properties
  // each blog has.
  user: {
    id: primaryKey(String),
    name: String,
    blogs: manyOf('blog'),
  },
  blog: {
    id: primaryKey(String),
    title: String,
    body: String,
    author: oneOf('user'),
  },
})

export const defaultUsers: UserType[] = [
  {
    id: '1',
    name: 'user1',
  },
  {
    id: '2',
    name: 'user2',
  },
]

export const defaultBlogs: BlogType[] = [
  {
    id: '1',
    title: 'title1',
    body: 'body1',
  },
  {
    id: '2',
    title: 'title2',
    body: 'body2',
  },
  {
    id: '3',
    title: 'title3',
    body: 'body3',
  },
]

// The default data created each time you refresh the page.
const blogs = defaultBlogs.map((blog) => db.blog.create(blog))
const users = defaultUsers.map((user) => db.user.create({ ...user, blogs }))

console.log({ users })
