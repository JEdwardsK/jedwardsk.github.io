/* eslint-disable no-unused-vars */
import React from 'react'
import Clock from './Clock'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBatteryThreeQuarters, faWifi } from '@fortawesome/free-solid-svg-icons'


const SystemStatus = () => {
  return (
    <div className="date-container">
      <Clock/>
      <FontAwesomeIcon icon={faWifi} />
      <p>75%</p>
      <FontAwesomeIcon icon={faBatteryThreeQuarters} size="lg"/>
    </div>
  )
}

export default SystemStatus
