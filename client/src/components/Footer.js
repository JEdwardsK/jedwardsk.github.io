/* eslint-disable no-unused-vars */
import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
const Footer = () => {
  const location = useLocation()
  const history = useHistory()

  const handlegoBack = () => {
    history.goBack()
  }
  return (
    <div className="footer-container">
      { location.pathname !== '/home' &&
        <button onClick={handlegoBack}>Back</button>
      }
    </div>
  )
}

export default Footer
