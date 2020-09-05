import axios from 'axios'

export type Pokemon = {
  name: string
  url: string
  count: number
  next: string
  previus: string
  results: []
}

export const getApiUrl = (pokemon: ['']) => {
  return `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
}

export const apiGet = async (pokemon: ['']) => {

  const data = await pokemon.map(async (pk: any) => {
    const { name } = pk
    const url = getApiUrl(name)
    const response = await axios.get(url)
    // console.log(response.data)
    return {
      ...response
    }
  })

  return data
}

export const fetchPokemon: any = async (pokemon: []) => {
  const a = await pokemon.map(async (pk: Pokemon) => {
    const { name } = pk
    const endpoint = `https://pokeapi.co/api/v2/pokemon/${name}`
    const data = await (await fetch(endpoint)).json()
    const { id, types, sprites, stats } = data
    const picture = sprites.other.dream_world.front_default
    return { id, name, types, picture, stats }
  })
  return a
  // console.log(id, name, types, picture, stats)
  // return { id, name, types, picture, stats }
  // return data.results.map((pokemon: Pokemon) => (
  //   {
  //     ...pokemon
  //   }
  // ))
}

export const fetchPokemons: any = async (index: number, limit: number) => {
  const endpoint = `https://pokeapi.co/api/v2/pokemon?offset=${index}&limit=${limit}`
  const data = await (await fetch(endpoint)).json()
  // return data
  // const { count, next, previus } = data
  // const pokemons = data.results.map((pokemon: Pokemon) => (
  //   {
  //     ...pokemon
  //   }
  // ))

  // const pokemons = await data.results.map((pokemon: Pokemon) => {
  //   return fetchPokemon(pokemon.name)
  // })

  // console.log(pokemons)

  // return {
  //   count,
  //   previus,
  //   next,
  //   ...pokemons
  // }
  // const other = await fetchPokemon(data.name)
  // other.map((pk: Pokemon) => {
  //   console.log(pk)
  // })
  // other()
  // console.log(data.results)
  const other = await apiGet(data.results)
  // console.log(await other)
  const list = data.results.map((pokemon: Pokemon) => (
    {
      ...pokemon
    }
  ))

  return {
    list,
    other
  }

  // const pokemonList = data.results.map((pokemon: Pokemon) => {
  //   return {
  //     ...pokemon
  //   }
  // })
  // const pokemonDetails = await pokemonList.map((pk: Pokemon) => {
  //   const data = fetchPokemon(pk.name)
  //   return { ...data }
  // })
  // return { pokemonList, pokemonDetails }
}
