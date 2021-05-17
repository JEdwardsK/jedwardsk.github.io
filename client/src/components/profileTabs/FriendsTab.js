import React from 'react'
import Card from 'react-bootstrap/esm/Card'
import CardDeck from 'react-bootstrap/esm/CardDeck'
import { collaborators } from '../../helpers/projectsData'

const FriendsTab = () => {

  return (
    <>
      <CardDeck className="collab-card-deck">
        {collaborators.map((person, index) => {
          const { profilePic, name } = person
          return (
            <Card key={index}
              className="collab-card"
            >
              <Card.Img
                variant="top"
                src={profilePic}
              />
              <Card.Body style={{ backgroundColor: 'white' }}>
                <Card.Title style={{ backgroundColor: 'white' }}>
                  {name}
                </Card.Title>
                <Card.Subtitle style={{ backgroundColor: 'white' }}>
                  Offline
                </Card.Subtitle>
              </Card.Body>
            </Card>
          )
        })}
      </CardDeck>

    </>
  )
}

export default FriendsTab
