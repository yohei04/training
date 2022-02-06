import { BlogType } from "./blog"

export type UserType = {
  id: string
  name: string
}


export type UserResType = UserType & {
  blogs: BlogType[]
}
