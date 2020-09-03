import React from 'react'

import './styles.css'

const Home: React.FC = () => {
  return (
    <div className="container">
      <div className="box">
        <div className="card">
          <div className="card-header">
            <p>#1</p>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="buba" />
          </div>
          <div className="card-body">
            <p className="info-name">Name: <span>Bulbasaur</span></p>
            <p className="info-type">Type: <span>Grass, Poison</span></p>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <p>#2</p>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg" alt="Ivy" />
          </div>
          <div className="card-body">
            <p className="info-name">Name: <span>Venusaur</span></p>
            <p className="info-type">Type: <span>Grass, Poison</span></p>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <p>#3</p>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg" alt="Venu" />
          </div>
          <div className="card-body">
            <p className="info-name">Name: <span>Bulbasaur</span></p>
            <p className="info-type">Type: <span>Grass, Poison</span></p>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <p>#4</p>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg" alt="buba" />
          </div>
          <div className="card-body">
            <p className="info-name">Name: <span>Charmander</span></p>
            <p className="info-type">Type: <span>Fire</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home