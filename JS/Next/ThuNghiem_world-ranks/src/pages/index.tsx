import { InferGetStaticPropsType } from 'next'
import React from 'react'
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
  return (
    <Layout>
      <div className={styles.counts}>Found {countries.length} countries</div>
      <SearchInput placeholder="Filter by Name, Region or SubRegion" />
      <CountriesTable countries={countries} />
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
