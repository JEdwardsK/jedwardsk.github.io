/* eslint-disable no-unused-vars */
import React from 'react'
import allprojectsSVG from '../../assets/svgs/allprojects.svg'
import { projects } from '../../helpers/projectsData'
import Footer from '../Footer'


const AllProjectsPage = () => {
  return (
    <>
      <div className="profile-page-container">
        <div className="profile-header header">
          <img src={allprojectsSVG} alt="profile avatar" />
          <h4>All Software</h4>
        </div>
        <hr />
        <div className="profile-page-body body">
          {projects.map((project, index) => {
            const { image, title } = project
            return (
              <div className="all-projects-project" key={index}>
                {/* <img src={image} alt={`screenshot of project: ${title}`}/> */}
              </div>
            )
          })}
        </div>
        <Footer/>
      </div>

    </>
  )
}

export default AllProjectsPage
