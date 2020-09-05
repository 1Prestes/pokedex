import React from 'react'

import './styles.css'
import Search from '../Search'
import Details from '../Details'
import Card from '../Card'
import { fetchPokemons } from '../../helpers/axios-http-client'

const Home: React.FC = () => {
  const [details, setDetails] = React.useState<boolean>(false)
  const [pokemons, setPokemons] = React.useState<[]>([])

  const showDetails = (): void => {
    setDetails(!details)
  }

  const getPokemons: any = async () => {
    const data = await fetchPokemons(0, 20)
    setPokemons(data)
  }

  React.useEffect(() => {
    getPokemons()
  }, [])

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
