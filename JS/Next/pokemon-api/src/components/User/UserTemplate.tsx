import Link from 'next/link'
import { useState } from 'react'
import useSWR from 'swr'
import { UserList } from '.'
import { fetchUserList } from '../../lib/api/user'

export const UserTemplate = () => {
  const { data, error } = useSWR(`/users`, fetchUserList)

  if (!data) return <div>Loading...</div>
  if (error) return <div>error</div>

  return (
    <div>
      <UserList userList={data} />
      <Link href={'/'}>
        <a>ホームへ戻る</a>
      </Link>
    </div>
  )
}
