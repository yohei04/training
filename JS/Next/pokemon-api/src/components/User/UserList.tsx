import Link from 'next/link'
import { UserResType } from '../../types/user'

type UserListProps = {
  userList: UserResType[]
}

export const UserList = ({ userList }: UserListProps) => {
  return (
    <div>
      <ul>
        {userList.map((user) => (
          <li className="mb-3" key={user.id}>
            <Link href={`/user/${user.id}`}>
              <a>{user.name}</a>
            </Link>
            <ul className="flex">
              {user.blogs.map((blog) => (
                <li className="mr-3" key={blog.id}>
                  {blog.title}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  )
}
