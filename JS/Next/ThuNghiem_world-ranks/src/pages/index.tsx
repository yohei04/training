import { InferGetStaticPropsType } from 'next'
import React, { ChangeEvent, useState } from 'react'
import { CountriesTable } from '../components/CountriesTable'
import { Layout } from '../components/Layout'
import { SearchInput } from '../components/SearchInput'

import styles from '../styles/home.module.scss'

export interface ICountry {
  name: string
  region: string
  subregion: string
  population: number
}

export type CountryProps = InferGetStaticPropsType<typeof getStaticProps>

const Home = ({ countries }: CountryProps) => {
  console.log(countries)

  const [keyword, setKeyWord] = useState('')
  const filteredCountries = countries.filter(
    (c) =>
      c.name.toLowerCase().includes(keyword) ||
      c.region.toLowerCase().includes(keyword) ||
      c.subregion.toLowerCase().includes(keyword)
  )

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setKeyWord(e.target.value.toLowerCase())
  }

  return (
    <Layout>
      <div className={styles.counts}>Found {countries.length} countries</div>
      <SearchInput
        placeholder="Filter by Name, Region or SubRegion"
        onChange={onInputChange}
      />
      <CountriesTable countries={filteredCountries} />
    </Layout>
  )
}

export const getStaticProps = async () => {
  const res = await fetch('https://restcountries.eu/rest/v2/all')
  const countries: ICountry[] = await res.json()

  return {
    props: {
      countries,
    },
  }
}

export default Home
