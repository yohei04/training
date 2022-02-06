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
    </div>
  )
}
