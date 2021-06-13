import { SearchRounded } from '@material-ui/icons'
import React from 'react'

import styles from './search-input.module.scss'

interface SearchInputProps {
  placeholder: string
}

export const SearchInput = ({ ...rest }: SearchInputProps) => {
  return (
    <div className={styles.wrapper}>
      <SearchRounded />
      <input className={styles.input} {...rest} />
    </div>
  )
}
