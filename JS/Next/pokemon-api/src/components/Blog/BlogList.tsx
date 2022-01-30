import useSWR from 'swr'
import { fetchBlogList } from '../../lib/api/blog'

export const BlogList = () => {
  const { data, error } = useSWR('http://localhost:8000/blogs', fetchBlogList)

  if (!data || (!data && !error)) return <div>Loading...</div>

  if (error) return <div>error</div>

  return (
    <div>
      {data.map((b) => (
        <h1 key={b.id}>{b.title}</h1>
      ))}
    </div>
  )
}
