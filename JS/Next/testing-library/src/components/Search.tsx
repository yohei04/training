import { ChangeEvent } from 'react'

interface SearchProps {
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const Search: React.FC<SearchProps> = ({ value, onChange, children }) => {
  return (
    <div>
      <label htmlFor="search">{children}</label>
      <input id="search" type="text" value={value} onChange={onChange} />
    </div>
  )
}

export default Search
