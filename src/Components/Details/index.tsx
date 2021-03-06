import React from 'react'

import Card from '../Card'
import './styles.css'

const Details: React.FC<any> = ({ showDetails }: any) => {
  return (
    <>
      <div className="container-details">
        <button className="btn-back" onClick={showDetails}>
          <span>
            <svg width="27" height="22" viewBox="0 0 27 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M28.3333 11H1.66663" stroke="#FF9000" />
              <path d="M11 20.3334L1.66663 11L11 1.66669" stroke="#FF9000" />
            </svg>
          </span>
            Back
        </button>
        <div className="box-details">
          <div className="card card-details">
            <div className="card-header">
              <p>#2</p>
              <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg" alt="Ivy" />
            </div>
            <div className="card-body card-body-details">
              <p className="name">Ivysaur</p>
              <div className="content">
                <div className="content-info">
                  <p>69 KG</p>
                  <p className="text-muted">Weight</p>
                </div>
                <div className="content-info">
                  <p>0.7 M</p>
                  <p className="text-muted">Height</p>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <h2>Stats</h2>
              <ul className="stats">
                <li>HP <div><p style={{ width: '56%' }}>56/100</p></div></li>
                <li>ATK <div><p style={{ width: '73%' }}>73/100</p></div></li>
                <li>DEF <div><p style={{ width: '30%' }}>30/100</p></div></li>
                <li>SPD <div><p style={{ width: '56%' }}>56/100</p></div></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container-details">
        <h2 className="family-title">Family Tree</h2>
        <div className="box-details box-family">
          <Card />
        </div>
      </div>
    </>
  )
}

export default Details
