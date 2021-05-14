/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'

const LockScreen = () => {
  const [continueCounter, setContinueCounter] = useState(0)
  const [featuredCounter, setFeaturedCounter] = useState(0)
  const [pressedButton, setPressedButton] = useState(null)

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress)
    if (continueCounter === 4) {
      document.removeEventListener('keydown', handleKeyPress)
      history.push('/home/')
    }
  })

  const history = useHistory()

  const handleContinueClick = ({ keyCode }) => {
    let newCount = continueCounter
    // keyCode === 65 && newCount++
    newCount++
    setContinueCounter(newCount)
    console.log('testing counter', continueCounter)
  }
  const handleKeyPress = ({ key, keyCode }) => {
    console.log(key + keyCode)
    if (keyCode === 65) {
      let newACount = continueCounter
      newACount++
      if (featuredCounter !== 0) {
        setFeaturedCounter(0)
        setContinueCounter(0)
      } else setContinueCounter(newACount)
    } else if (keyCode === 89) {
      let newYCount = featuredCounter
      newYCount++
      setContinueCounter(0)
      setFeaturedCounter(newYCount)
    } else {
      setContinueCounter(0)
      setFeaturedCounter(0)
    }
  }


  return (
    <div className="lockscreen-container">
      { continueCounter < 1 &&
        <section className="sidebar">
          <div className="featured"><h1>clicked a {continueCounter} times</h1></div>
          <h1>clicked y {featuredCounter} times</h1>
          <div className="featured"></div>
          <div className="featured"></div>
          <div className="sidebar-featured-button-container">
            <button className="featured-news-button">Y</button>
            <p>Featured News</p>

          </div>
        </section>
      }
      { featuredCounter < 1 &&
        <div className="main">
          <div className="infobar-container"></div>
          <h1>clicked a {continueCounter} times</h1>
          <h1>clicked y {featuredCounter} times</h1>
          <div className="centre-content"></div>
          <div className="continue-button-container">
            <button className="continue" onClick={handleContinueClick} onKeyDown={handleContinueClick}>A</button>
            <p>Continue</p>
          </div>
        </div>}
    </div>
  )
}

export default LockScreen
