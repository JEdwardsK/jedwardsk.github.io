import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const ProfilePage = () => {
  return (
    <div className="profile-page-container">
      <div className="profile-sidebar">
        <div className="profile-tab">Profile</div>
        <hr />
        <div className="friends-list">Friend List</div>
        <div className="trending-with-friends">Trending With Friends</div>
        <div className="online-play-invites">Online Play Invitations</div>
        <div className="friends-suggestions">Friend Suggestions</div>
        <div className="add-friend">Add Friend</div>
        <hr />
        <div className="user-settings">User Settings</div>
      </div>
      <div className="profile-main">
        <div className="profile-profile-tab">
          <div className="my-info">
            <div className="profile-pic"></div>
            <div className="my-info-left">
              <p>JEdwardsK</p>
              <div className="current-play">
                <img src="" alt="currently learning" />
                <div>
                  <p>Online</p>
                  <p>Typescript</p>
                </div>
              </div>
              <div>
                <p>Experience With</p>
              </div>
              <div>
                <p>Currently Building knowledge </p>
              </div>
              <div>
                <p>Future Learning Goals</p>
              </div>
            </div>
          </div>
        </div>
        <div className="friends-list-tab">
          {'put linkedin cards of people you\'ve worked with here'}
        </div>
        <div className="trending-with-friends-tab">
          {'put links to articles you\'ve read, what you\'ve found online that is interesting'}
        </div>
        <div className="online-play-invitations-tab">
          <p>If friends invite you to play online with them in applicable software, those invitations will be displayed here</p>
        </div>
        <div className="friend-suggestions-tab">
          <p>If any of your friends in smart device apps such as Super Mario Run also use Nintendo Switch, they will be suggested as friends here</p>
          <small>Your smart device apps must be linked to your Nintendo Account for this to work</small>
        </div>
        <div className="add-friend-tab">
          <div className="add-friend-column">
            <FontAwesomeIcon/>
            <p>Send Email</p>
          </div>
          <div className="add-friend-column">
            <FontAwesomeIcon/>
            <p>Go to my LinkedIn</p>
          </div>
          <div className="add-friend-column">
            <FontAwesomeIcon/>
            <p>Go to my GitHub</p>
          </div>
        </div>
        <div className="user-settings-tab"></div>
      </div>
    </div>
  )
}

export default ProfilePage
