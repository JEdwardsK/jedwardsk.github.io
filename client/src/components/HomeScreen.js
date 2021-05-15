import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { projects } from '../helpers/projectsData'
import ProjectsCard from './ProjectsCard'
import SystemStatus from './SystemStatus'

export const HomeScreen = () => {
  const [projectToModal, setProjectToModal] = useState('')
  const [isModalVisible, setIsModalVisible] = useState(false)
  // on page load, play bloop sound
  const handleProjectModal = (event) => {
    const { name } = event.target
    setProjectToModal(name)
    setIsModalVisible(true)
  }
  return (
    <>
      <div className="homescreen-container">
        <div className="homescreen-header">
          <Link to="/profile"><button className="profile">profilepic</button></Link>
          <SystemStatus/>
        </div>
        <div className="homescreen-body">
          <div className="carousel">
            {projects.map((project, index) => {
              const { image, title } = project
              return (
                <button key={index} onClick={handleProjectModal} className="carousel-items" name={title} style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                  {/* <img className="carousel-items" src={image} alt={`preview of project: ${title}`} name='test' ></img> */}
                </button>
              )
            })
            }
            <button className="all-projects">All Projects</button>
          </div>
        </div>
        <div className="homescreen-body-buttons">
          <button className="homescreen-buttons">GitHub</button>
          <button className="homescreen-buttons">Email</button>
          <button className="homescreen-buttons">LinkedIn</button>
          <button className="homescreen-buttons">CodePen</button>
          <button className="homescreen-buttons">Mobile Site</button>
          <button className="homescreen-buttons">Settings</button>
          <button className="homescreen-buttons">Return Home</button>
        </div>
        <div className="homescreen-footer">
          <div className="placeholder-switch"></div>
          <div className="ok-button-container"><button className="a-button"></button></div>
        </div>
        <Modal show={isModalVisible}>
          <ProjectsCard projectToDisplay={projectToModal}/>
        </Modal>
      </div>
    </>
  )
}
