/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'

import SystemStatus from './SystemStatus'

import defaultClick from '../assets/sounds/Enter & Back.wav'
import turnOnSound from '../assets/sounds/Turn On.wav'
import failSound from '../assets/sounds/Error.wav'
import newsSound from '../assets/sounds/News.wav'



const LockScreen = () => {
  const [continueCounter, setContinueCounter] = useState(0)
  const [featuredCounter, setFeaturedCounter] = useState(0)
  const [sidebarWidth, setSidebarWidth] = useState('25%')
  const [mainWidth, setMainWidth] = useState('75%')

  const defaultClickSound = new Audio(defaultClick)
  const startUpSound = new Audio(turnOnSound)
  const failClick = new Audio(failSound)
  const featuredSound = new Audio(newsSound)


  useEffect(() => {
    document.addEventListener('keyup', handleKeyPress)
    if (continueCounter === 4) {
      document.removeEventListener('keyup', handleKeyPress)
      history.push('/home')
    } else if (featuredCounter === 4) {
      featuredSound.play()
      document.removeEventListener('keydown', handleKeyPress)
      history.push('/featured')
    }
  })

  const history = useHistory()

  const handleClick = (event) => {
    const { name } = event.target
    let newACount = continueCounter
    let newYCount = featuredCounter
    if (name === 'a') {
      newACount++
      setContinueCounter(newACount)
      setFeaturedCounter(0)
    } else if (name === 'y') {
      newYCount++
      setFeaturedCounter(newYCount)
      setContinueCounter(0)
    }
    console.log('testing counter', continueCounter)
  }
  const handleKeyPress = ({ key, keyCode }) => {
    console.log(key + keyCode)
    if (keyCode === 65) {
      if (featuredCounter !== 0) {
        failClick.play()
        setSidebarWidth('25%')
        setMainWidth('75%')
        setFeaturedCounter(0)
        setContinueCounter(0)
      } else {
        defaultClickSound.play()
        let newACount = continueCounter
        newACount++
        setContinueCounter(newACount)
      }
    } else if (keyCode === 89) {
      let newYCount = featuredCounter
      newYCount++
      setSidebarWidth('100%')
      setMainWidth('0')
      setContinueCounter(0)
      setFeaturedCounter(newYCount)
    } else {
      failClick.play()
      setContinueCounter(0)
      setFeaturedCounter(0)
      setSidebarWidth('25%')
    }
  }


  return (
    <div className="lockscreen-container">
      <>{`${continueCounter} | ${featuredCounter}`}</>
      <SystemStatus/>
      { continueCounter < 1 &&
        <section className="sidebar" style={{ width: sidebarWidth }}>
          {sidebarWidth === '100%' ?
            <div className="alt-featured-container">
              <div className="featured"></div>
              <div className="featured"></div>
              <div className="featured"></div>
            </div>
            :
            <div className="featured-container">
              <div className="featured"></div>
              <div className="featured"></div>
              <div className="featured"></div>
            </div>

          }
          <div className="sidebar-featured-button-container">
            <button name="y" onClick={handleClick} className="featured-news-button">Y</button>
            <p>Featured News</p>
          </div>
        </section>
      }
      { featuredCounter < 1 &&
        <div className="main" style={{ width: mainWidth }}>
          <div className="infobar-container"></div>
          <div className="centre-content"></div>
          { mainWidth === '100%' &&
            <p>Press the same button three times.</p>
          }
          <div className="continue-button-container">
            <button className="continue" onClick={handleClick} name="a">A</button>
            <p>Continue</p>
          </div>
        </div>}
    </div>
  )
}

export default LockScreen
