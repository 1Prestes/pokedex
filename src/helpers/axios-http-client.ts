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
}

export const fetchPokemons: any = async (index: number, limit: number) => {
  const endpoint = `https://pokeapi.co/api/v2/pokemon?offset=${index}&limit=${limit}`
  const data = await (await fetch(endpoint)).json()
  return data.results.map((pokemon: Pokemon) => (
    {
      ...pokemon
    }
  ))
}
