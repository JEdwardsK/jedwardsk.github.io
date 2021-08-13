import React from 'react'
import AirScooterSVG from '../AirScooterSVG'

const aangColourScheme = {
  primary: '#d4721d',
  secondary: '#e1c002',
  skin: '#fddbb9',
  boots: '#8e715e',
  tattoos: '#90c2e1',
  neckShadow: '#bba085',
  collarShadow: '#f0b90a',
}

const aangSize = '100vh'

const tempHomePageStyling = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

const BookFinderPage = () => {
  return (
    <div 
      className="homepage_container"
      style={tempHomePageStyling}
    >
      <AirScooterSVG 
        colourScheme = {aangColourScheme}
        size= {aangSize}
      />
      <h2>
        This site is currently under construction...
      </h2>
      
    </div>
  )
}

export default BookFinderPage
