import { FormEvent, useState } from 'react'
import useSWR, { useSWRConfig } from 'swr'
import { BlogList } from '.'
import { BASE_ENDPOINT } from '../../constant/endpoint'
import { createBlog, fetchBlogList } from '../../lib/api/blog'
import { BlogType } from '../../types/blog'

export const BlogTemplate = () => {
  const { mutate } = useSWRConfig()
  const { data, error } = useSWR(`${BASE_ENDPOINT}/blogs`, fetchBlogList)
  const [newBlog, setNewBlog] = useState<BlogType | undefined>()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    if (!data) return

    e.preventDefault()
    // update the local data immediately, but disable the revalidation
    mutate(`${BASE_ENDPOINT}/blogs`, [...data, newBlog], false)

    // send a request to the API to update the source
    await createBlog(newBlog)

    // trigger a revalidation (refetch) to make sure our local data is correct
    mutate(`${BASE_ENDPOINT}/blogs`)
    setNewBlog(undefined)
  }

  if (!data || (!data && !error)) return <div>Loading...</div>
  if (error) return <div>error</div>

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className="block" htmlFor="blog-title">
          ブログタイトル
        </label>
        <input
          className="mb-4 border-2 border-gray-700"
          id="blog-title"
          type="text"
          placeholder="placeholder"
          onChange={(e) =>
            setNewBlog({
              title: e.target.value,
              body: `body${data.length + 1}`,
              author: `user${data.length + 1}`,
              id: data.length + 1,
            })
          }
          value={newBlog?.title ?? ''}
        />
        <button
          className="border-2 border-blue-700 bg-blue-500"
          type="submit"
          disabled={!newBlog?.title}
        >
          ブログ追加
        </button>
      </form>
      <BlogList blogList={data} />
    </div>
  )
}
