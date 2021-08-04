/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
// import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
// import Tooltip from 'react-bootstrap/Tooltip'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/esm/Nav'
import Modal from 'react-bootstrap/Modal'
import { useHistory, useLocation } from 'react-router-dom'
import aButton from '../assets/nintendo-icons/a-button.png'
import bButton from '../assets/nintendo-icons/b-button.png'
import SiteSummary from './modals/SiteSummary'

import defaultClick from './../assets/sounds/Enter & Back.wav'
import errorSound from './../assets/sounds/Error.wav'



const Footer = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const defaultClickSound = new Audio(defaultClick)
  const projectClose = new Audio(errorSound)


  const location = useLocation()
  const history = useHistory()


  const handlegoBack = () => {
    history.goBack()
  }

  const handleModal = () => {
    setIsModalVisible(!isModalVisible)
    !isModalVisible ? defaultClickSound.play()
      : projectClose.play()
  }



  return (
    <>
      <Modal
        id="site-summary-modal"
        show={isModalVisible}
        onHide={handleModal}
        centered
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Site Navigation</Modal.Title>
        </Modal.Header>
        <Nav variant="tabs" defaultActiveKey="#first">
          <Nav.Item>
            <Nav.Link href="#first">Start</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#key-info-skills">My Skills</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#key-info-contact">My Contact Details</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#navigation-homepage">HomePage</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#navigation-profile">Profile</Nav.Link>
          </Nav.Item>
          {/* <Nav.Item>
            <Nav.Link href="#navigation-settings">Settings</Nav.Link>
          </Nav.Item> */}
        </Nav>
        <Modal.Body>
          <SiteSummary/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <hr />
      <div className="footer-container footer">
        {/* <OverlayTrigger overlay={<Tooltip>
                    Click for info on site navigation!</Tooltip>}>
          <span> */}
        <button onClick={handleModal} className="footer-switch"/>
        {/* </span>
        </OverlayTrigger> */}
        <div className="controller-buttons-container">
          { location.pathname !== '/' &&
              <button onClick={handlegoBack} className="footer-button">
                <img className="footer-button-image"
                  src={bButton} alt="b-button" />
                <p>Back</p>
              </button>
          }
          <button className="footer-button">
            <img className="footer-button-image" src={aButton} alt="a-button" />
            <p>Ok</p>
          </button>
        </div>
      </div>
    </>
  )
}

export default Footer
