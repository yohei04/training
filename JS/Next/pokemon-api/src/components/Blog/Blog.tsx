import { useRouter } from 'next/router'
import useSWR from 'swr'
import { fetchBlogDetail } from '../../lib/api/blog'

export const Blog = () => {
  const { id } = useRouter().query

  const { data, error } = useSWR(id, fetchBlogDetail)

  if (!data || (!data && !error)) return <div>Loading...</div>

  if (error) return <div>error</div>

  return (
    <div>
      <p>{data.title}</p>
      <p>{data.body}</p>
      <p>{data.author}</p>
    </div>
  )
}
