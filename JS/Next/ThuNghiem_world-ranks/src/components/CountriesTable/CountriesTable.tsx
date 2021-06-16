import React from 'react'
import { CountryProps, ICountry } from '../../pages'

import styles from './countries-table.module.scss'

const orderBy = (countries: ICountry[], direction: 'asc' | 'desc') => {
  if (direction === 'asc') {
    return [...countries].sort((a, b) => (a.population > b.population ? 1 : -1))
  } else if (direction === 'desc') {
    return [...countries].sort((a, b) => (a.population > b.population ? -1 : 1))
  }
  return countries
}

export const CountriesTable = ({ countries }: CountryProps) => {
  const orderCountries = orderBy(countries, 'desc')

  return (
    <>
      <div className={styles.heading}>
        <button className={styles.heading__name}>Name</button>
        <button className={styles.heading__population}>Population</button>
      </div>

      {orderCountries.map((c, i) => (
        <div className={styles.row} key={i}>
          <div className={styles.name}>{c.name}</div>
          <div className={styles.population}>{c.population}</div>
        </div>
      ))}
    </>
  )
}
