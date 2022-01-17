import { faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const ScreenBrightnessTab = () => {
  return (
    <div>
      <div>
        <h4>Automatic Brightness</h4>
        <p>On</p>
      </div>
      <div>
        <FontAwesomeIcon icon={faSun} />
        <div className="slidecontainer">
          <input type="range" min="1" max="100" value="100"/>
        </div>
      </div>
    </div>
  )
}

export default ScreenBrightnessTab
