/* eslint-disable no-unused-vars */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import Footer from './Footer'
import linkPic from '../assets/images/link.png'
import { allSkills, currentSkills, developingSkills, futureSkills, skillHighlight } from '../helpers/skillsData'
import Modal from 'react-bootstrap/esm/Modal'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/esm/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

const ProfilePage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const handleModal = () => {
    setIsModalVisible(true)
  }
  const handlCloseModal = () => setIsModalVisible(false)

  console.log('test', skillHighlight.altImage)


  return (
    <div className="profile-page-container">
      <div className="profile-header">
        <img src={linkPic} alt="profile avatar" />
        <h4>JEdwardsKs Page</h4>
      </div>
      <div className="profile-page-body">
        <div className="profile-sidebar">
          <h3 className="profile-tab">Profile</h3>
          <hr />
          <h3 className="friends-list">Friend List</h3>
          <h3 className="trending-with-friends">Trending With Friends</h3>
          <h3 className="online-play-invites">Online Play Invitations</h3>
          <h3 className="friends-suggestions">Friend Suggestions</h3>
          <h3 className="add-friend">Add Friend</h3>
          <hr />
          <h3 className="user-settings">User Settings</h3>
        </div>
        <div className="profile-main">
          <div className="profile-profile-tab">
            <div className="my-info">
              <img src={linkPic} alt="profile avatar" className="profile-pic"/>
              <div className="my-info-right">
                <h3>JEdwardsK</h3>
                <div className="current-play">
                  <div styles={{ backgroundImage: `url(${skillHighlight.altImage})` }} className="current-play-img"/>
                  <div className="current-play-text">
                    <p>Online</p>
                    <p>Typescript</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="play-activity">
              <div className="play-activity-header">
                <h5>Play Activity</h5>
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">
                  Click to see my skills!</Tooltip>}>
                  <span className="d-inline-block">
                    <FontAwesomeIcon icon={faQuestionCircle} onClick={handleModal}/>
                  </span>
                </OverlayTrigger>
              </div>
              <div className="skills">
                {
                  allSkills.map((skill, index) => {
                    const { name, icon, altImage } = skill

                    return (
                      <div className="skill-container" key={index}>
                        { !icon ?
                          <img className="skill-logo" src={altImage} alt={`logo for ${name}`} width="60" />
                          :
                          <FontAwesomeIcon className="skill-logo" icon={icon} size="5x" />
                        }
                        <div className="skill-description">
                          <p className="skill-name">{name}</p>
                          <p>Played for 60 hours</p>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Modal
        show={isModalVisible}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={handlCloseModal}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          Skills/Technologies
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <section>
            <h3>Experience With</h3>
            <Row lg="5" md="3" className="skills-container">
              {currentSkills.map((skill, index) => {
                const { name, icon, altImage } = skill
                return (
                  <Col className="skill" key={index}>
                    { !icon ?
                    // <div className="test" style={styleObject(altImage)}
                    // ></div>

                      <img className="skill-logo" src={altImage} alt={`logo for ${name}`} width="60" />
                      :
                      <FontAwesomeIcon className="skill-logo" icon={icon} size="5x" />
                    }
                    <p className="skill-name">{ name }</p>
                  </Col>
                )
              })}
            </Row>
          </section>
          <section>
            <h3>Current Learning Focuses</h3>
            <div className="skills-container">
              {developingSkills.map((skill, index) => {
                const { name, icon, altImage } = skill
                return (
                  <div className="skill" key={index}>
                    { !icon ?
                      <img className="skill-logo" src={altImage} alt={`logo for ${name}`} width="60" /> :
                      <FontAwesomeIcon className="skill-logo" icon={icon} size="5x"/>}
                    <p className="skill-name">{ name }</p>
                  </div>
                )
              })}
            </div>
          </section>
          <section>
            <h3>Future Learning Goals</h3>
            <div className="skills-container">
              {futureSkills.map((skill, index) => {
                const { name, icon, altImage } = skill
                return (
                  <div className="skill" key={index}>
                    { !icon ?
                      <img className="skill-logo" src={altImage} alt={`logo for ${name}`} width="60"/> :
                      <FontAwesomeIcon className="skill-logo" icon={icon} size="5x"/>}
                    <p className="skill-name">{ name }</p>
                  </div>
                )
              })}
            </div>
          </section>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handlCloseModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ProfilePage
