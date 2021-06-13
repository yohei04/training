import { InferGetStaticPropsType } from 'next'
import React from 'react'
import { Layout } from '../components/layout'

import styles from '../styles/home.module.scss'

interface ICountry {
  name: string
  region: string
  subregion: string
}

const Home = ({
  countries,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log({ countries })
  return (
    <Layout>
      <div className={styles.counts}>Found {countries.length} countries</div>
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
