import React from 'react'

import './styles.css'

const Search: React.FC = () => {
  return (
    <div className="container-search">
      <div className="search">
        <label htmlFor="search" className="search-icon"></label>
        <input type="text" className="input-search" name="search" id="search" placeholder="Type the Pokémon name" />
      </div>
    </div>
  )
}

export default Search
