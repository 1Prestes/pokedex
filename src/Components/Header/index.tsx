import React from 'react'

import './styles.css'

const Header: React.FC = () => {
  return (
    <header className="main-header">
      <div className="header-container">
        <div className="logo">
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M40 0C17.9441 0 0 17.9441 0 40V41.3332H24.3875V38.6664H2.68984C3.39414 18.6953 19.8602 2.6668 40 2.6668C60.1398 2.6668 76.6059 18.6953 77.3102 38.6668H55.4695V41.3336H80V40C80 17.9441 62.0559 0 40 0Z" fill="#666360" />
            <path d="M78.6668 38.6668H55.4695C54.7336 38.6668 54.1363 39.2641 54.1363 40C54.1363 40.736 54.7336 41.3332 55.4695 41.3332H77.3102C76.6062 61.3047 60.1402 77.3332 40 77.3332C19.8598 77.3332 3.39414 61.3047 2.68984 41.3332H24.9312C25.6672 41.3332 26.2645 40.736 26.2645 40C26.2645 39.2641 25.6672 38.6668 24.9312 38.6668H1.3332C0.597266 38.6668 0 39.2641 0 40C0 62.0559 17.9441 80 40 80C62.0559 80 80 62.0559 80 40C80 39.2641 79.4027 38.6668 78.6668 38.6668Z" fill="#666360" />
            <path d="M40 24C31.1773 24 24 31.1773 24 40C24 48.8227 31.1773 56 40 56C48.8227 56 56 48.8227 56 40C56 31.1773 48.8227 24 40 24ZM40 53.3332C32.648 53.3332 26.6668 47.352 26.6668 40C26.6668 32.648 32.648 26.6668 40 26.6668C47.352 26.6668 53.3332 32.648 53.3332 40C53.3332 47.352 47.352 53.3332 40 53.3332Z" fill="#666360" />
            <path d="M40 29.3332C34.1187 29.3332 29.3332 34.1183 29.3332 40C29.3332 45.8816 34.1183 50.6668 40 50.6668C45.8816 50.6668 50.6668 45.8816 50.6668 40C50.6668 34.1183 45.8812 29.3332 40 29.3332ZM40 48C35.5887 48 32 44.4113 32 40C32 35.5887 35.5887 32 40 32C44.4113 32 48 35.5887 48 40C48 44.4113 44.4113 48 40 48Z" fill="#666360" />
          </svg>
        </div>
        <nav className="main-nav">
          <ul className="main-nav-link">
            <li>
              <a href="/">POKÉMON CHALLENGE</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header