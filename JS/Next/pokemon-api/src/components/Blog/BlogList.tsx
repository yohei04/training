import { useEffect, useState } from 'react'
import { BlogType } from '../../types/blog'

export const BlogList = () => {
  const [blogs, setBlogs] = useState<BlogType[] | undefined>(undefined)

  useEffect(() => {
    fetch('http://localhost:8000/blogs')
      .then((res) => res.json())
      .then((data) => setBlogs(data))
  }, [])

  return (
    <div>
      {blogs?.map((b) => (
        <h1 key={b.id}>{b.title}</h1>
      ))}
    </div>
  )
}
