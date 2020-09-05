import React from 'react'

import './styles.css'
import Search from '../Search'
import Details from '../Details'
import Card from '../Card'
import { fetchPokemons } from '../../helpers/axios-http-client'

const Home: React.FC = () => {
  const [details, setDetails] = React.useState<boolean>(false)
  const [pokemons, setPokemons] = React.useState<[]>([])
  // const [pokemon, setPokemon] = React.useState<{}>({})

  const showDetails = (): void => {
    setDetails(!details)
  }

  const getPokemons: any = async () => {
    const data = await fetchPokemons(0, 20)
    setPokemons(data)
  }

  // const pokemonDetails: any = async (name: string) => {
  //   const data = await fetchPokemon(name)
  //   console.log(pokemon)
  //   return setPokemon({ ...data })
  // }

  React.useEffect(() => {
    getPokemons()
  }, [])

  // React.useEffect(() => {
  //   pokemons.map(pk => {
  //     const { name } = pk
  //     pokemonDetails(name)
  //   })
  // }, [pokemons])

  return (

    <>
      {details && <Details showDetails={showDetails} />}
      <div className="container">
        <div className="box">
          {
            !details &&
            <>
              <Search />
              {pokemons.map(pokemon => {
                const { name, url } = pokemon
                return <Card showDetails={showDetails} key={url} name={name} />
              })}
            </>
          }
        </div>
      </div >
    </>
  )
}

export default Home
