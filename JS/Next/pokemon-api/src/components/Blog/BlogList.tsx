import Link from 'next/link'
import { useSWRConfig } from 'swr'
import { deleteBlog } from '../../lib/api/blog'
import { BlogType } from '../../types/blog'

type BlogListProps = {
  blogList: BlogType[]
}

export const BlogList = ({ blogList }: BlogListProps) => {
  const { mutate } = useSWRConfig()
  const handleDelete = async (id: number) => {
    await deleteBlog(id)
    mutate('/blogs')
  }

  return (
    <div>
      <ul>
        {blogList.map((blog) => (
          <li className="mb-3" key={blog.id}>
            <Link href={`/blog/${blog.id}`}>
              <a>{blog.title}</a>
            </Link>
            <button
              className="bg-orange-400 px-1"
              data-testid={`delete-button-${blog.id}`}
              onClick={() => handleDelete(blog.id)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
