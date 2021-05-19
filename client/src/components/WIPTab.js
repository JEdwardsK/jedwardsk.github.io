import React from 'react'

const WIPTab = ({ header }) => {
  return (
    <div>
      <h2>{header}</h2>
      <h3>{'We\'re Sorry!'}</h3>
      <br />
      <br />
      <p>{'This page is currently a work-in-progress, there isn\'t any content yet, but some will soon follow. Please check later '}</p>
    </div>
  )
}

export default WIPTab
