import axios from 'axios'
import { BASE_ENDPOINT } from '../../constant/endpoint'
import { BlogType } from '../../types/blog'

/**
 * ブログ一覧を取得する関数
 */
export const fetchBlogList = async (): Promise<BlogType[]> => {
  const response = await axios.get(`/blogs`)
  return response.data
}

/**
 * ブログ詳細を取得する関数
 */
export const fetchBlogDetail = async (
  id: number
): Promise<BlogType | undefined> => {
  if (!id) return
  const response = await axios.get(`/blogs/${id}`)
  return response.data
}

/**
 * ブログを作成する関数
 */
export const createBlog = async (params: any) => {
  axios.post(`/blogs`, params)
}
