import React from 'react'

import './styles.css'
import Search from '../Search'
import Details from '../Details'
import Card from '../Card'

const Home: React.FC = () => {
  const [details, setDetails] = React.useState<boolean>(false)

  const showDetails = (): void => {
    setDetails(!details)
  }

  return (

    <>
      {details && <Details showDetails={showDetails} />}
      <div className="container">
        <div className="box">
          {
            !details &&
            <>
              <Search />
              <Card showDetails={showDetails} />
            </>
          }
        </div>
      </div >
    </>
  )
}

export default Home
