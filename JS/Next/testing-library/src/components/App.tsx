import { useState, useEffect, ChangeEvent } from 'react'
import Search from './Search'

interface User {
  id: string
  name: string
}

function getUser() {
  return Promise.resolve({ id: '1', name: 'Robin' })
}

function App() {
  const [search, setSearch] = useState('')
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const loadUser = async () => {
      const user = await getUser()
      setUser(user)
    }

    loadUser()
  }, [])

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setSearch(event.currentTarget.value)
  }

  return (
    <div>
      {user ? <p>Signed in as {user.name}</p> : null}

      <Search value={search} onChange={handleChange}>
        Search:
      </Search>

      <p>Searches for {search ? search : '...'}</p>
    </div>
  )
}

export default App
