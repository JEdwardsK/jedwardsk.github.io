/* eslint-disable no-unused-vars */
import React from 'react'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { projects } from '../helpers/projectsData'

const ProjectsCard = ({ projectToDisplay }) => {
  const project = projects.filter(project => project.title === projectToDisplay)


  const { title, projectType, collaborators, tagLine, about, image, deployedLink, repoLink } = project



  return (
    <Col>
      <Card style={{ width: '18rem' }}>
        <Card.Img
          variant="top"
          src={`../../assets/project-images/${image}`}
          alt={`preview for ${title} project`}
          className="bg-image hover-overlay ripple"
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <small className="text-muted card-subtitle mb-2">
            {tagLine}
          </small> <br/>
          <small className="text-muted card-subtitle mb-2">
            ({projectType})
          </small>
          {/* <Accordion>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
        Click for more/less info...
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <>
                <Card.Text>
                  {about.map((p, index)=> {

                    return <p key={index}>{p}</p>
                  })}
                </Card.Text>
                <Card.Text><a href={deployedLink}>view project</a></Card.Text>
                {collaborators.length > 0 &&

                      <ListGroup variant="flush"> <h5>Team Members</h5>
                        {collaborators.map((collaborator, index) => {
                          const { name, github, linkedIn } = collaborator
                          return (
                            <ListGroup.Item key={index} className="team-member">
                              <p>{name}</p>
                              <a href={github}>
                                <FontAwesomeIcon icon={faGithubSquare} size="2x"/>
                              </a>
                              <a href={linkedIn}>
                                <FontAwesomeIcon icon={faLinkedin} size="2x"/>
                              </a>
                            </ListGroup.Item>
                          )
                        })}
                      </ListGroup>
                }
              </>
            </Accordion.Collapse>
          </Accordion> */}

        </Card.Body>
        <Card.Footer>
          <a href={repoLink}>Project Repo</a>
        </Card.Footer>
      </Card>

    </Col>
  )
}

export default ProjectsCard