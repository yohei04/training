import { SearchRounded } from '@material-ui/icons'
import React, { ChangeEvent } from 'react'

import styles from './search-input.module.scss'

interface SearchInputProps {
  placeholder: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const SearchInput = ({ ...rest }: SearchInputProps) => {
  return (
    <div className={styles.wrapper}>
      <SearchRounded />
      <input className={styles.input} {...rest} />
    </div>
  )
}
