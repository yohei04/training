import axios from 'axios'
import { BASE_ENDPOINT } from '../../constant/endpoint'
import { BlogType } from '../../types/blog'

/**
 * ブログ一覧を取得する関数
 */
export const fetchBlogList = async (url: string): Promise<BlogType[]> => {
  const response = await axios.get(url)
  return response.data
}

/**
 * ブログ詳細を取得する関数
 */
export const fetchBlogDetail = async (
  id: number
): Promise<BlogType | undefined> => {
  if (!id) return
  const response = await axios.get(`${BASE_ENDPOINT}/blogs/${id}`)
  return response.data
}

/**
 * ブログ詳細を取得する関数
 */
export const createBlog = async (params: any) => {
  axios.post(`${BASE_ENDPOINT}/blogs`, params)
}
