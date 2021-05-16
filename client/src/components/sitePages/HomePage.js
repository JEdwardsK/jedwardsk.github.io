/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'

import  Modal  from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

import { projects } from '../../helpers/projectsData'

import ProjectsCard from '../ProjectsCard'
import SystemStatus from '../SystemStatus'


import homeClick from '../../assets/sounds/Home.wav'
import defaultClick from '../../assets/sounds/Enter & Back.wav'
import userClick from '../../assets/sounds/User.wav'
import settingsClick from '../../assets/sounds/Settings.wav'
import Footer from '../Footer'

import linkPic from '../../assets/images/link.png'

const HomePage = () => {
  const [projectToModal, setProjectToModal] = useState('')
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [textIndex, setTextIndex] = useState(-1)
  const [focusClass, setFocusClass] = useState('')

  const homeSound = new Audio(homeClick)
  const defaultClickSound = new Audio(defaultClick)
  const profileSound = new Audio(userClick)
  const settingsSound = new Audio(settingsClick)

  const history = useHistory()

  useEffect(() => homeSound.play(), [])

  const handleProjectModal = (event) => {
    const { name } = event.target
    setProjectToModal(name)
    defaultClickSound.play()
    setIsModalVisible(true)
  }

  const handleMouseEnter = (event) => {
    const { value } = event.target
    setTextIndex(Number(value))
    setFocusClass('highlight')
  }
  const handleMouseExit = () => {
    setTextIndex(-1)
    setFocusClass('')
  }

  const nintendoOnline = 'https://vignette.wikia.nocookie.net/nintendo/images/d/de/Nintendo_Switch_Online_-_App_icon.svg/revision/latest?cb=20170719034029&path-prefix=en'


  const handlePageChange = (event) => {
    const { name } = event.target
    if (name === 'profile') {
      profileSound.play()
      history.push('/profile')
    } else if (name === 'settings') {
      settingsSound.play()
      history.push('/settings')
    }
  }
  const handleCloseModal = () => setIsModalVisible(false)
  return (
    <>
      <div className="homescreen-container">
        <div className="homescreen-header header">
          <button
            className={`profile ${textIndex === -2 && focusClass}`}
            name="profile" value="-2"
            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit}
            onClick={handlePageChange}
          ></button>
          {textIndex === -2 &&
            <p>{'JEdwardsK\'s Page'}</p>
          }
          <SystemStatus/>
        </div>
        <div className="homescreen-body body">
          <div className="carousel">
            {projects.map((project, index) => {
              const { image, title, tagLine } = project
              return (
                <div className="carousel-item-container" key={index}>
                  { textIndex === index &&
                    <div className="scrolling-text"><span>{`${title} - ${tagLine}`}</span></div>
                  }

                  <button onClick={handleProjectModal} className={`carousel-item ${textIndex === index && focusClass}`} name={title} style={{ backgroundImage: `url(${image})` }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit} value={index}>
                  </button>
                </div>
              )
            })
            }
            <div className="carousel-item-container">
              <div className="carousel-item all-projects">
                <p>All Software</p>
                <button></button>
              </div>
            </div>
          </div>
        </div>
        <div className="homescreen-body-buttons">

          <button
            id="nintendo-online"
            className={`homescreen-button ${textIndex === -3 && focusClass}`}
            value="-3"
            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit}
          ></button>
          <button
            // id="news-button"
            className={`homescreen-button ${textIndex === -4 && focusClass}`}
            value="-4"
            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit}
          >Email</button>
          <button
            id={textIndex === -5 && 'eshop-button'}
            className={`homescreen-button ${textIndex === -5 && focusClass}`}
            value="-5"
            style={{ backgroundImage: `url(${linkPic})` }}
            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit}>LinkedIn</button>
          <button
            id="album-button"
            className={`homescreen-button ${textIndex === -6 && focusClass}`}
            value="-6"
            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit}>CodePen</button>
          <button
            id="controller-button"
            className={`homescreen-button ${textIndex === -7 && focusClass}`}
            value="-7"
            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit}>Mobile Site</button>
          <button
            id="settings-button"
            name="settings" onClick={handlePageChange}
            className={`homescreen-button ${textIndex === -8 && focusClass}`}
            value="-8"
            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit}>Settings</button>
          <button
            id="sleep-button"
            className={`homescreen-button ${textIndex === -9 && focusClass}`}
            value="-9"
            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit}>Return Home</button>
        </div>
        <hr />
        <Footer/>
        {/* <div className="homescreen-footer">
          <div className="placeholder-switch"></div>
          <div className="ok-button-container"><button className="a-button"></button></div>
        </div> */}
        <Modal
          show={isModalVisible}
          onHide={handleCloseModal}
          centered
        >
          <Modal.Header>
            <Modal.Title>{projectToModal}</Modal.Title>
          </Modal.Header>
          <ProjectsCard projectToDisplay={projectToModal} />
          <Modal.Footer>

            <Button variant="secondary" onClick={handleCloseModal}>
            Close
            </Button>
            <Button variant="primary" onClick={handleCloseModal}>
            Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  )
}

export default HomePage