import { SearchRounded } from '@material-ui/icons'
import React from 'react'

import styles from './search-input.module.scss'

interface SearchInputProps {}

export const SearchInput = ({}) => {
  return (
    <div className={styles.wrapper}>
      <SearchRounded />
      <input className={styles.input} />
    </div>
  )
}
