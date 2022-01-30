import { BlogType } from '../../types/blog'

/**
 * ブログ一覧を取得する関数
 */
export const fetchBlogList = async (
  url: string
): Promise<BlogType[] | undefined> => {
  const response = await fetch(url)
  return response.json()
}
