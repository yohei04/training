import { useEffect, useState } from 'react'

export const PokemonList = () => {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=2')
      .then((res) => res.json())
      // .then((data) => console.log(data))
      .then((data) => setPokemons(data.results))
  }, [])

  return (
    <div>
      {pokemons.map((p) => (
        <h1 key={p.name}>{p.name}</h1>
      ))}
    </div>
  )
}
