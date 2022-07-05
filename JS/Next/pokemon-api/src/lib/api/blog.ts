import axios from 'axios'
import { BlogResType, BlogType } from '../../types/blog'

/**
 * ブログ一覧を取得する関数
 */
export const fetchBlogList = async (): Promise<BlogResType[]> => {
  const response = await axios.get(`/blogs`)
  return response.data
}

/**
 * ブログ詳細を取得する関数
 */
export const fetchBlogDetail = async (
  id: string
): Promise<BlogResType | undefined> => {
  if (!id) return
  const response = await axios.get(`/blogs/${id}`)
  return response.data
}

/**
 * ブログを作成する関数
 */
export const createBlog = async (params: BlogType) => {
  axios.post(`/blogs`, params)
}
/**
 * ブログを削除する関数
 */
export const deleteBlog = async (id: string) => {
  axios.delete(`/blogs/${id}`)
}
