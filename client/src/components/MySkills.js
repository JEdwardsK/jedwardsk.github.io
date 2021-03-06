import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import { currentSkills, developingSkills, futureSkills } from '../helpers/skillsData'

const MySkills = () => {
  return (
    <>
      <section>
        {location === 'homepage' ?
          <h4>{'Technologies I\'ve Used'}</h4> :
          <h3>{'Technologies I\'ve Used'}</h3>
        }
        <br />
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
      <br />
      <section>
        {location === 'homepage' ?
          <h4>Current Learning Focuses</h4> :
          <h3>Current Learning Focuses</h3>
        }
        <br />
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
      <br />
      <section>
        {location === 'homepage' ?
          <h4>Future Learning Goals</h4> :
          <h3>Future Learning Goals</h3>
        }
        <br />
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
    </>
  )
}

export default MySkills
