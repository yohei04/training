import React from 'react'
import { CountryProps, ICountry } from '../../pages'

import styles from './countries-table.module.scss'

export const CountriesTable = ({ countries }: CountryProps) => {
  return (
    <>
      <div className={styles.heading}>
        <button className={styles.heading__name}>Name</button>
        <button className={styles.heading__population}>Population</button>
      </div>

      {countries.map((c, i) => (
        <div className={styles.row} key={i}>
          <div className={styles.name}> {c.name} </div>
          <div className={styles.population}> {c.population} </div>
        </div>
      ))}
    </>
  )
}
