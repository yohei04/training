import Link from 'next/link'
import { BlogType } from '../../types/blog'

type BlogListProps = {
  blogList: BlogType[]
}

export const BlogList = ({ blogList }: BlogListProps) => {
  return (
    <div>
      <ul>
        {blogList.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>
              <a>{blog.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
