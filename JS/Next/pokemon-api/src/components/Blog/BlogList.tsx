import Link from 'next/link'
import useSWR from 'swr'
import { fetchBlogList } from '../../lib/api/blog'

export const BlogList = () => {
  const { data, error } = useSWR('blogs', fetchBlogList)

  if (!data || (!data && !error)) return <div>Loading...</div>

  if (error) return <div>error</div>

  return (
    <div>
      <ul>
        {data.map((blog) => (
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
