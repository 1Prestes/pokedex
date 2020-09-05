export type Pokemon = {
  name: string
  url: string
  count: number
  next: string
  previus: string
  results: []
}

export const fetchPokemon: any = async (pokemon: string) => {
  const endpoint = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
  const data = await (await fetch(endpoint)).json()
  const { id, name, types, sprites, stats } = data
  const picture = sprites.other.dream_world.front_default
  // console.log(id, name, types, picture, stats)
  return { id, name, types, picture, stats }
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

  return data.results.map((pokemon: Pokemon) => (
    {
      ...pokemon
    }
  ))

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
