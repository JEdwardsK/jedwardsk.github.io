/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'

import  Modal  from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Toast from 'react-bootstrap/Toast'

import { projects } from '../../helpers/projectsData'

import ProjectsCard from '../ProjectsCard'
import SystemStatus from '../SystemStatus'
import Footer from '../Footer'


import homeClick from '../../assets/sounds/Home.wav'
import userClick from '../../assets/sounds/User.wav'

import openGameSound from '../../assets/sounds/Popup + Run Title.wav'
import errorSound from '../../assets/sounds/Error.wav'
import hoverClick from '../../assets/sounds/Nock.wav'
import allProjectSound from '../../assets/sounds/Icons.wav'


import switchIcon from '../../assets/nintendo-icons/switch.png'
import linkPic from '../../assets/images/windlink.png'
import allprojectsSVG from '../../assets/svgs/allprojects.svg'
import IconButtons from '../homeScreenComponents/IconButtons'

const HomePage = () => {
  const [projectToModal, setProjectToModal] = useState('')
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [isToastVisible, setIsToastVisible] = useState(true)
  const [hoverFocus, setHoverFocus] = useState(-1)

  const homeSound = new Audio(homeClick)
  const profileSound = new Audio(userClick)
  const projectClick = new Audio(openGameSound)
  const projectClose = new Audio(errorSound)
  const defaultHoverSound = new Audio(hoverClick)
  const allProjectsClick = new Audio(allProjectSound)

  const history = useHistory()
  const focusClass = 'highlight'
  useEffect(() => homeSound.play(), [])

  const handleProjectModal = (event) => {
    const { name } = event.target
    setProjectToModal(name)
    projectClick.play()
    setIsModalVisible(true)
  }

  const handleMouseEnter = (event) => {
    const { value } = event.target
    const numValue = Number(value)
    const unusedButtons = [-5, -6, -7, -8, -9]
    if (!unusedButtons.includes(numValue)) {
      defaultHoverSound.play()
      setHoverFocus(numValue)
    }
  }
  const handleMouseExit = () => {
    setHoverFocus(-1)
  }



  const handlePageChange = (event) => {
    const { name } = event.target

    switch (name) {
      case 'profile':
        profileSound.play()
        history.push('/profile')
        break
      case 'all-projects':
        allProjectsClick.play()
        history.push('/all-projects')
        break
      // case 'settings':
        // settingsSound.play()
        // history.push('/settings')
        // break
    }

  }
  const handleCloseModal = () => {
    projectClose.play()
    setIsModalVisible(false)
  }

  const handleToast = () => setIsToastVisible(false)



  return (
    <>
      <div className="homescreen-container">
        <div className="homescreen-header header">
          <div className="profile-button-container">
            <button
              className={`profile ${hoverFocus === -2 && focusClass}`}
              name="profile" value="-2"
              onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit}
              onClick={handlePageChange}
            />
            {hoverFocus === -2 &&
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
                  { hoverFocus === index &&
                    <div className="scrolling-text"><span>{`${title} - ${tagLine}`}</span></div>
                  }
                  <button 
                    onClick={handleProjectModal} 
                    className={
                      `carousel-item ${hoverFocus === index && focusClass}`
                    } 
                    name={title} 
                    style={{ backgroundImage: `url(${image})` }}
                    onMouseEnter={handleMouseEnter} 
                    onMouseLeave={handleMouseExit} 
                    value={index}
                  />
                </div>
              )
            })
            }
            <div className="carousel-item-container">
              <div
                style={{ border: 'none' }}
                className="carousel-item all-projects"
              >
                { hoverFocus === -10 &&
                  <p>All Projects</p>
                }
                <button
                  className={`${hoverFocus === -10 && focusClass}`}
                  name="all-projects"
                  onClick={handlePageChange}
                  value="-10"
                  style={{ backgroundImage: `url(${allprojectsSVG})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'center' }}
                  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit}
                />
              </div>
            </div>
          </div>
          <IconButtons
            handleMouseEnter= {handleMouseEnter}
            focusClass= {focusClass}
            hoverFocus= {hoverFocus}
            handleMouseExit= {handleMouseExit}
            handlePageChange= {handlePageChange}
          />
        </div>
        <Footer />

        <Toast
          delay={5000}
          autohide
          show={isToastVisible}
          onClose={handleToast}
          className="animate__animated animate__slideInLeft"
        >
          <Toast.Header>
            <div style={{ display: 'flex' }}>
              <img
                src={linkPic}
                className="toast-profile"
                alt="profile icon"
              />
              <div className="toast-text-header">
                <strong className="mr-auto">JEdwardsK</strong>
                <small>Just now</small>
              </div>
            </div>
          </Toast.Header>
          <Toast.Body style={{ color: '#6c757d' }}>Hi! Click the Nintendo Switch icon <img src={switchIcon} alt="nintendo switch icon" style={{ width: '37px' }}/> at the bottom left of the screen for some info on site navigation!</Toast.Body>
        </Toast>

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
          </Modal.Footer>
        </Modal>
      </div>
    </>
  )
}

export default HomePage