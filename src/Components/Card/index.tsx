import React from 'react'

import './styles.css'

const Card: React.FC<any> = ({ showDetails, url, name }: any) => {
  return (
    <div key={url} className="card" onClick={showDetails}>
      <div className="card-header">
        <p>#1</p>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="buba" />
      </div>
      <div className="card-body">
        <p className="info-name">Name: <span>{name}</span></p>
        <p className="info-type">Types: <span>Grass, Poison</span></p>
      </div>
    </div>
  )
}

export default Card
