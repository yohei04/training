import { FC } from 'react'
import useSWR, { useSWRConfig } from 'swr'
import { BlogList } from '.'
import { BASE_ENDPOINT } from '../../constant/endpoint'
import { createBlog, fetchBlogList } from '../../lib/api/blog'

export const BlogTemplate = () => {
  const { mutate } = useSWRConfig()
  const { data, error } = useSWR(`${BASE_ENDPOINT}/blogs`, fetchBlogList)

  console.log({ data })

  if (!data || (!data && !error)) return <div>Loading...</div>

  if (error) return <div>error</div>

  const addBlog = async () => {
    const newBlog = {
      title: 'post4',
      body: 'body4',
      author: 'user4',
    }
    // update the local data immediately, but disable the revalidation
    mutate(`${BASE_ENDPOINT}/blogs`, [...data, newBlog], false)

    // send a request to the API to update the source
    await createBlog(newBlog)

    // trigger a revalidation (refetch) to make sure our local data is correct
    mutate(`${BASE_ENDPOINT}/blogs`)
  }
  return (
    <div>
      <BlogList blogList={data} />
      <button onClick={addBlog}>ブログ追加</button>
    </div>
  )
}
