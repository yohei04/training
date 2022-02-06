import { BlogType } from '../models/blog'
import { UserType } from '../models/user'

export type UserResType = UserType & {
  blogs: BlogType[]
}
