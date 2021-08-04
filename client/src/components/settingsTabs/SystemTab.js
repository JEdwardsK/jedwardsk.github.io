import React from 'react'
import Clock from '../Clock'
import DateString from '../DateString'

const SystemTab = () => {
  return (
    <>
      <p>System Update</p>
      <small>Current system version 1.0.0</small>

      <div>
        <h5>Console Nickname</h5>
        <p>{'JEdwardsK\'s Switch'}</p>
      </div>
      <div>
        <h5>Language</h5>
        <p>English</p>
      </div>
      <div>
        <h5>Region</h5>
        <p>Europe</p>
      </div>
      <div>
        <h5>Date and Time</h5>
        <p>Current date and time: {DateString} {Clock} </p>
      </div>
      <div>
        <h5>Console Battery (%)</h5>
        <p>On</p>
      </div>
      <div>
        <h5>Sound</h5>
        <p>Stereo</p>
      </div>
      <div>
        <h5>Mute When HeadPhones Are Disconnected</h5>
        <p>On</p>
      </div>
      div
    </>
  )
}

export default SystemTab
