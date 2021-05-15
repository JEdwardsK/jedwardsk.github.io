
import React, { useState } from 'react'

import Footer from './Footer'


import linkPic from '../assets/images/link.png'



import ProfileTab from './profileTabs/ProfileTab'
import FriendsTab from './profileTabs/FriendsTab'

const ProfilePage = () => {

  const [tabVisible, setTabVisible] = useState(0)

  const handleTabToggle = (event) => {
    const { value } = event.target
    const input = parseInt(value)
    setTabVisible(input)
  }

  return (
    <>
      <div className="profile-page-container">
        <div className="profile-header header">
          <img src={linkPic} alt="profile avatar" />
          <h4>JEdwardsKs Page</h4>
        </div>
        <div className="profile-page-body body">
          <div className="profile-sidebar">
            <button value="0" onClick={handleTabToggle} className="profile-tab">Profile</button>
            <hr />
            <button value="1" onClick={handleTabToggle} className="friends-list">Friend List</button>
            <button value="2" onClick={handleTabToggle} className="trending-with-friends">Trending With Friends</button>
            <button value="3" onClick={handleTabToggle} className="online-play-invites">Online Play Invitations</button>
            <button value="4" onClick={handleTabToggle} className="friends-suggestions">Friend Suggestions</button>
            <button value="5" onClick={handleTabToggle} className="add-friend">Add Friend</button>
            <hr />
            <button value="6" onClick={handleTabToggle} className="user-settings">User Settings</button>
            <p>the tab selected is: {tabVisible}</p>
          </div>
          <div className="profile-main">
            {tabVisible === 0 ?
              <ProfileTab />
              : tabVisible === 1 ?
                <FriendsTab />
                : null
            }

          </div>
        </div>
        <Footer />
      </div>

    </>
  )
}

export default ProfilePage
