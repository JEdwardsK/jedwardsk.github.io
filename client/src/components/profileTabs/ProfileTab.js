import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import OverlayTrigger from 'react-bootstrap/esm/OverlayTrigger'
import Tooltip from 'react-bootstrap/esm/Tooltip'
import { allSkills, skillHighlight } from '../../helpers/skillsData'

import linkPic from '../../assets/images/windlink.png'
import SkillsModal from '../modals/SkillsModal'

const ProfileTab = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const handleModal = () => {
    setIsModalVisible(true)
  }




  return (
    <div className="profile-profile-tab">
      <div className="my-info">
        <img src={linkPic} alt="profile avatar" className="profile-pic" />
        <div className="my-info-right">
          <h3>JEdwardsK</h3>
          <div className="current-play">

            <div className="current-play-img">
              { !skillHighlight.icon ?
                <img className="play-logo" src={skillHighlight.altImage} alt={`logo for ${name}`} width="100"/>
                :
                <FontAwesomeIcon className="play-logo" icon={skillHighlight.icon} size="5x" />
              }
            </div>
            <div className="current-play-text">
              <p>Online</p>
              <p>Currently playing {skillHighlight.name}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="play-activity">
        <div className="play-activity-header">
          <h5>Play Activity</h5>
          <OverlayTrigger overlay={<Tooltip>
                    Click to see my skills!</Tooltip>}>
            <span className="d-inline-block">
              <FontAwesomeIcon icon={faQuestionCircle} size="2x" onClick={handleModal} />
            </span>
          </OverlayTrigger>
        </div>
        <div className="skills">
          {
            allSkills.map((skill, index) => {
              const { name, icon, altImage, hours, experience } = skill

              return (
                <div className="play-container" key={index}>
                  <div className="logo-container">
                    { !icon ?
                      <img className="play-logo" src={altImage} alt={`logo for ${name}`} width="100"/>
                      :
                      <FontAwesomeIcon className="play-logo" icon={icon} size="5x" />
                    }
                  </div>
                  <div className="skill-description">
                    <p className="skill-name">{name}</p>
                    <p style= {{ color: `${ hours >= 100 ? 'blue' : 'grey'}` }}>{experience}</p>
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
