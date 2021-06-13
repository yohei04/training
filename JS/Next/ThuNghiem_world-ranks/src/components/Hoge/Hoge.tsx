import React from 'react'

import styles from './hoge.module.scss'

interface HogeProps {}

const Hoge: React.FC<HogeProps> = ({}) => {
  return (
    <>
      <h1 className={styles.hoge}>hoge</h1>
      <h1 className={styles.fuga}>fuga</h1>
      <h1 className={styles['hoge-fuga']}>hoge-fuga</h1>
      <h1 className={styles.hoge_fuga}>hoge_fuga</h1>
    </>
  )
}

export default Hoge
