import { BASE_ENDPOINT } from '../../constant/endpoint'
import { BlogType } from '../../types/blog'

/**
 * ブログ一覧を取得する関数
 */
export const fetchBlogList = async (): Promise<BlogType[]> => {
  const response = await fetch(`${BASE_ENDPOINT}/blogs`)
  return response.json()
}

/**
 * ブログ詳細を取得する関数
 */
export const fetchBlogDetail = async (
  id: number
): Promise<BlogType | undefined> => {
  if (!id) return
  const response = await fetch(`${BASE_ENDPOINT}/blogs/${id}`)
  return response.json()
}
