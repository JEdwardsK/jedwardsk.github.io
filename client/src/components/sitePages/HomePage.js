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
import eShopPic from '../../assets/nintendo-icons/eshop.png'
import githubSVG from '../../assets/svgs/github.svg'
import linkedinSVG from '../../assets/svgs/linkedin.svg'
const HomePage = () => {
  const [projectToModal, setProjectToModal] = useState('')
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [textIndex, setTextIndex] = useState(-1)
  // const [focusClass, setFocusClass] = useState('')

  const homeSound = new Audio(homeClick)
  const defaultClickSound = new Audio(defaultClick)
  const profileSound = new Audio(userClick)
  const settingsSound = new Audio(settingsClick)

  const history = useHistory()
  const focusClass = 'highlight'
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
    // setFocusClass('highlight')
  }
  const handleMouseExit = () => {
    setTextIndex(-1)
    // setFocusClass('')
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
          <div className="profile-button-container">
            <button
              className={`profile ${textIndex === -2 && focusClass}`}
              name="profile" value="-2"
              onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit}
              onClick={handlePageChange}
            />
            {textIndex === -2 &&
              <p>{'JEdwardsK\'s Page'}</p>
            }
          </div>
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
              <div
                className="carousel-item all-projects"
              >
                { textIndex === -10 &&
                  <p>All Projects</p>
                }
                <button
                  className={`${textIndex === -10 && focusClass}`}
                  value="-10"
                  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit}
                />
              </div>
            </div>
          </div>
          <div className="homescreen-body-buttons">

            <div>
              <button
                className={`homescreen-button ${textIndex === -3 && focusClass}`}
                value="-3"
                onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit}
                style={
                  {
                    backgroundImage: `url(${textIndex === -3 ? githubSVG : nintendoOnline})`,
                  }}
              />
              { textIndex === -3 &&
                <p className="button-tag">GitHub</p>
              }
            </div>
            <div>
              <button
                className={`homescreen-button ${textIndex === -4 && focusClass}`}
                value="-4"
                onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit}
              />
              { textIndex === -4 &&
                <p className="button-tag">LinkedIn</p>
              }
            </div>
            <div>
              <button
                className={`homescreen-button ${textIndex === -5 && focusClass}`}
                value="-5"
                style={
                  { backgroundImage: eShopPic }
                }
                onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit} />
              { textIndex === -5 &&
                <p className="button-tag">Nintendo eShop</p>
              }
            </div>
            <div>
              <button
                className={`homescreen-button ${textIndex === -6 && focusClass}`}
                value="-6"
                onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit} />
              { textIndex === -6 &&
                <p className="button-tag">Codepen</p>
              }
            </div>
            <div>
              <button
                className={`homescreen-button ${textIndex === -7 && focusClass}`}
                value="-7"
                onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit} />
              { textIndex === -7 &&
                <p className="button-tag">Controllers</p>
              }
            </div>
            <div>
              <button
                name="settings" onClick={handlePageChange}
                className={`homescreen-button ${textIndex === -8 && focusClass}`}
                value="-8"
                onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit} />
              { textIndex === -8 &&
                  <p className="button-tag">Settings</p>
              }
            </div>
            <div>
              <button
                className={`homescreen-button ${textIndex === -9 && focusClass}`}
                value="-9"
                onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit} />
              { textIndex === -9 &&
                  <p className="button-tag">Sleep Mode</p>
              }
            </div>
          </div>
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