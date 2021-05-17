/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/esm/Nav'
import Modal from 'react-bootstrap/Modal'
import { useHistory, useLocation } from 'react-router-dom'
import aButton from '../assets/nintendo-icons/a-button.png'
import bButton from '../assets/nintendo-icons/b-button.png'
import SiteSummary from './modals/SiteSummary'


const Footer = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)


  const location = useLocation()
  const history = useHistory()

  const handlegoBack = () => {
    history.goBack()
  }

  const handleModal = () => {
    setIsModalVisible(!isModalVisible)
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
          <Nav.Item>
            <Nav.Link href="#navigation-settings">Settings</Nav.Link>
          </Nav.Item>
        </Nav>
        <Modal.Body>
          <SiteSummary/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleModal}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <hr />
      <div className="footer-container footer">
        <button onClick={handleModal} className="footer-switch"/>
        <div className="controller-buttons-container">
          { location.pathname !== '/home' &&
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
