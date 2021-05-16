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
    const { value, className } = event.target
    setTextIndex(Number(value))
    setFocusClass('highlight')
  }
  const handleMouseExit = () => {
    setTextIndex(-1)
    setFocusClass('')
  }


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
          <button className="profile" name="profile" onClick={handlePageChange}></button>
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
            <button className="all-projects">All Projects</button>
          </div>
        </div>
        <div className="homescreen-body-buttons">

          <button className="homescreen-buttons"><a href="http://github.com/JedwardsK">GitHub</a></button>
          <button className="homescreen-buttons">Email</button>
          <button className="homescreen-buttons">LinkedIn</button>
          <button className="homescreen-buttons">CodePen</button>
          <button className="homescreen-buttons">Mobile Site</button>
          <button name="settings" onClick={handlePageChange}className="homescreen-buttons">Settings</button>
          <button className="homescreen-buttons">Return Home</button>
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