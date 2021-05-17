/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'

import  Modal  from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Toast from 'react-bootstrap/Toast'

import { projects } from '../../helpers/projectsData'

import ProjectsCard from '../ProjectsCard'
import SystemStatus from '../SystemStatus'


import homeClick from '../../assets/sounds/Home.wav'
import userClick from '../../assets/sounds/User.wav'
import settingsClick from '../../assets/sounds/Settings.wav'
import eshopSound from '../../assets/sounds/Eshop Intro.wav'
import openGameSound from '../../assets/sounds/Popup + Run Title.wav'
import errorSound from '../../assets/sounds/Error.wav'
import hoverClick from '../../assets/sounds/Nock.wav'
import allProjectSound from '../../assets/sounds/Icons.wav'

import Footer from '../Footer'


import codepenlogo from '../../assets/logos/codepen.png'
import linkedinlogo from '../../assets/logos/linkedin.png'
import githublogo from '../../assets/logos/github.png'


import eShopPic from '../../assets/nintendo-icons/eshop.png'
import linkPic from '../../assets/images/windlink.png'



import albumSVG from '../../assets/svgs/album.svg'
import controllerSVG from '../../assets/svgs/controller.svg'
import powerSVG from '../../assets/svgs/power.svg'
import settingsSVG from '../../assets/svgs/settings.svg'
import allprojectsSVG from '../../assets/svgs/allprojects.svg'
import newsSVG from '../../assets/svgs/news.svg'

const HomePage = () => {
  const [projectToModal, setProjectToModal] = useState('')
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [isToastVisible, setIsToastVisible] = useState(true)
  const [hoverFocus, setHoverFocus] = useState(-1)

  const homeSound = new Audio(homeClick)
  const profileSound = new Audio(userClick)
  const settingsSound = new Audio(settingsClick)
  const eshopSoundClick = new Audio(eshopSound)
  const projectClick = new Audio(openGameSound)
  const projectClose = new Audio(errorSound)
  const defaultHoverSound = new Audio(hoverClick)
  const allProjectsClick = new Audio(allProjectSound)

  const history = useHistory()
  const focusClass = 'highlight'
  useEffect(() => homeSound.play().catch((error) => console.warn('unable to play sound', error)), [])

  const handleProjectModal = (event) => {
    const { name } = event.target
    setProjectToModal(name)
    projectClick.play().catch((error) => console.warn('unable to play sound', error))
    setIsModalVisible(true)
  }

  const handleMouseEnter = (event) => {
    const { value } = event.target
    const numValue = Number(value)
    defaultHoverSound.play().catch((error) => console.warn('unable to play sound', error))
    setHoverFocus(numValue)
  }
  const handleMouseExit = () => {
    setHoverFocus(-1)
  }

  const nintendoOnline = 'https://vignette.wikia.nocookie.net/nintendo/images/d/de/Nintendo_Switch_Online_-_App_icon.svg/revision/latest?cb=20170719034029&path-prefix=en'


  const handlePageChange = (event) => {
    const { name } = event.target
    if (name === 'profile') {
      profileSound.play().catch((error) => console.warn('unable to play sound', error))
      history.push('/profile')
    } else if (name === 'settings') {
      settingsSound.play().catch((error) => console.warn('unable to play sound', error))
      history.push('/settings')
    }
  }
  const handleCloseModal = () => {
    projectClose.play().catch((error) => console.warn('unable to play sound', error))
    setIsModalVisible(false)
  }

  const handleToast = () => setIsToastVisible(false)
  const eshopPlaySound = () => eshopSoundClick.play().catch((error) => console.warn('unable to play sound', error))
  const handleAllProjects = () => {
    allProjectsClick.play().catch((error) => console.warn('unable to play sound', error))
  }

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

                  <button onClick={handleProjectModal} className={`carousel-item ${hoverFocus === index && focusClass}`} name={title} style={{ backgroundImage: `url(${image})` }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit} value={index}>
                  </button>
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
                  onClick={handleAllProjects}
                  value="-10"
                  style={{ backgroundImage: `url(${allprojectsSVG})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'center' }}
                  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit}
                />
              </div>
            </div>
          </div>
          <div className="homescreen-body-buttons">

            <div>
              <a href="https://github.com/JEdwardsK">
                <button
                  className={`homescreen-button ${hoverFocus === -3 && focusClass}`}
                  value="-3"
                  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit}
                  style={
                    {
                      backgroundImage: `url(${hoverFocus === -3 ? githublogo : nintendoOnline})`,
                    }}
                />
              </a>
              { hoverFocus === -3 &&
                <p className="button-tag">GitHub</p>
              }
            </div>
            <div>
              <a href="https://www.linkedin.com/in/jedwardsk/">
                <button
                  className={`homescreen-button ${hoverFocus === -4 && focusClass}`}
                  value="-4"
                  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit}
                  style={
                    {
                      backgroundImage: `url(${hoverFocus === -4 ? linkedinlogo : newsSVG})`,
                    }}
                />
              </a>
              { hoverFocus === -4 &&
                <p className="button-tag">LinkedIn</p>
              }
            </div>
            <div>
              <button
                className={`homescreen-button ${hoverFocus === -5 && focusClass}`}
                value="-5"
                style={
                  { backgroundImage: `url(${eShopPic})` }
                }
                onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit}
                onClick={eshopPlaySound}/>
              { hoverFocus === -5 &&
                <p className="button-tag">Nintendo eShop</p>
              }
            </div>
            <div>
              <button
                className={`homescreen-button ${hoverFocus === -6 && focusClass}`}
                value="-6"
                onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit}
                style={
                  {
                    backgroundImage: `url(${hoverFocus === -6 ? codepenlogo : albumSVG})`,
                  }}

              />
              { hoverFocus === -6 &&
                <p className="button-tag">Codepen</p>
              }
            </div>
            <div>
              <button
                className={`homescreen-button ${hoverFocus === -7 && focusClass}`}
                value="-7"
                style={
                  { backgroundImage: `url(${controllerSVG})` }
                }
                onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit} />
              { hoverFocus === -7 &&
                <p className="button-tag">Controllers</p>
              }
            </div>
            <div>
              <button
                name="settings" onClick={handlePageChange}
                className={`homescreen-button ${hoverFocus === -8 && focusClass}`}
                value="-8"
                style={
                  { backgroundImage: `url(${settingsSVG})` }
                }
                onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit} />
              { hoverFocus === -8 &&
                  <p className="button-tag">Settings</p>
              }
            </div>
            <div>
              <button
                className={`homescreen-button ${hoverFocus === -9 && focusClass}`}
                value="-9"
                style={
                  { backgroundImage: `url(${powerSVG})` }
                }
                onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit} />
              { hoverFocus === -9 &&
                  <p className="button-tag">Sleep Mode</p>
              }
            </div>
          </div>
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
          <Toast.Body styles={{ color: '#6c757d' }}>Hi! Click the switch icon at the bottom left of the screen for some info on site navigation!</Toast.Body>
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