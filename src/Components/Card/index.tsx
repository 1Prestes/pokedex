import React from 'react'

import './styles.css'

const Card: React.FC<any> = ({ showDetails }: any) => {
  console.log(showDetails)
  return (
    <div className="card" onClick={showDetails}>
      <div className="card-header">
        <p>#1</p>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="buba" />
      </div>
      <div className="card-body">
        <p className="info-name">Name: <span>Bulbasaur</span></p>
        <p className="info-type">Types: <span>Grass, Poison</span></p>
      </div>
    </div>
  )
}

export default Card
