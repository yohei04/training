import axios from 'axios'
import { UserResType } from '../../types/user'

/**
 * ユーザー一覧を取得する関数
 */
export const fetchUserList = async (): Promise<UserResType[]> => {
  const response = await axios.get(`/users`)
  return response.data
}
