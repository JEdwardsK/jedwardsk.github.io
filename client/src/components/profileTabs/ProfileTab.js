import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import OverlayTrigger from 'react-bootstrap/esm/OverlayTrigger'
import Tooltip from 'react-bootstrap/esm/Tooltip'
import { allSkills, skillHighlight } from '../../helpers/skillsData'

import linkPic from '../../assets/images/link.png'
import SkillsModal from '../modals/SkillsModal'

const ProfileTab = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const handleModal = () => {
    setIsModalVisible(true)
  }

  console.log(allSkills[0])

  return (
    <div className="profile-profile-tab">
      <div className="my-info">
        <img src={linkPic} alt="profile avatar" className="profile-pic" />
        <div className="my-info-right">
          <h3>JEdwardsK</h3>
          <div className="current-play">
            <div styles={{ backgroundImage: `url(${skillHighlight.altImage})` }} className="current-play-img" />
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
              <FontAwesomeIcon icon={faQuestionCircle} onClick={handleModal} />
            </span>
          </OverlayTrigger>
        </div>
        <div className="skills">
          {
            allSkills.map((skill, index) => {
              const { name, icon, altImage, experience } = skill
              return (
                <div className="play-container" key={index}>
                  { !icon ?
                    <img className="play-logo" src={altImage} alt={`logo for ${name}`} width="60" />
                    :
                    <FontAwesomeIcon className="skill-logo" icon={icon} size="5x" />
                  }
                  <div className="skill-description">
                    <p className="skill-name">{name}</p>
                    <p>{experience}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
      <SkillsModal isVisible={isModalVisible}/>
    </div>

  )
}

export default ProfileTab
