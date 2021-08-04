/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import allprojectsSVG from '../../assets/svgs/allprojects.svg'
import { projects } from '../../helpers/projectsData'
import Footer from '../Footer'
import hoverClick from '../../assets/sounds/Nock.wav'
import openGameSound from '../../assets/sounds/Popup + Run Title.wav'
import errorSound from '../../assets/sounds/Error.wav'
import Modal from 'react-bootstrap/esm/Modal'
import Button from 'react-bootstrap/esm/Button'
import ProjectsCard from '../ProjectsCard'



const AllProjectsPage = () => {
  const [hoverFocus, setHoverFocus] = useState(-1)
  const [projectToModal, setProjectToModal] = useState('')
  const [isModalVisible, setIsModalVisible] = useState(false)

  const focusClass = 'highlight2'
  const defaultHoverSound = new Audio(hoverClick)
  const projectClick = new Audio(openGameSound)
  const projectClose = new Audio(errorSound)


  const handleMouseEnter = (event) => {
    const { value } = event.target
    const numValue = Number(value)
    defaultHoverSound.play()
    setHoverFocus(numValue)
  }
  const handleMouseExit = () => {
    setHoverFocus(-1)
  }

  const handleProjectModal = (event) => {
    const { name } = event.target
    setProjectToModal(name)
    projectClick.play()
    setIsModalVisible(true)
  }

  const handleCloseModal = () => {
    projectClose.play()
    setIsModalVisible(false)
  }

  return (
    <>
      <div className="profile-page-container">
        <div className="profile-header header">
          <img src={allprojectsSVG} alt="profile avatar" />
          <h4>All Projects</h4>
        </div>
        <hr />
        <div className="all-projects-body body">
          {projects.map((project, index) => {
            const { image, title } = project
            return (

              <div
                className={`all-projects-project ${ hoverFocus === index && focusClass}`}
                key={index}
              >
                { hoverFocus === index &&
                  <p>{title}</p>
                }
                <button
                  onClick={handleProjectModal}
                  className={hoverFocus === index && focusClass}
                  name={title}
                  style={{ backgroundImage: `url(${image})` }}
                  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit}
                  value={index}/>
              </div>

            )
          })}
        </div>
        <Footer/>
      </div>
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

    </>
  )
}

export default AllProjectsPage
