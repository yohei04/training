import { UserType } from './user'

export type BlogType = {
  id: string
  title: string
  body: string
}

export type BlogResType = BlogType & {
  author: UserType
}
