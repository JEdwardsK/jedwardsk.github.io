import React, { useEffect, useState } from 'react'

import { currentSkills, developingSkills, futureSkills } from '../../helpers/skillsData'

import Modal from 'react-bootstrap/esm/Modal'
import Button from 'react-bootstrap/esm/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SkillsModal = ({ isVisible }) => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  useEffect(() => {
    setIsModalVisible(isVisible)
  }, [isVisible])
  const handlCloseModal = () => setIsModalVisible(false)


  return (
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
  )
}

export default SkillsModal
