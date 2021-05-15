
import React, { useState } from 'react'

import Footer from '../Footer'


import linkPic from '../../assets/images/link.png'

import ProfileTab from '../profileTabs/ProfileTab'
import FriendsTab from '../profileTabs/FriendsTab'
import FriendsTrendingTab from '../profileTabs/FriendsTrendingTab'
import OnlinePlayTab from '../profileTabs/OnlinePlayTab'
import UserSettingsTab from '../profileTabs/UserSettingsTab'
import AddFriendTab from '../profileTabs/AddFriendTab'
import FriendSuggestionsTab from '../profileTabs/FriendSuggestionsTab'

const ProfilePage = () => {

  const [tabVisible, setTabVisible] = useState(0)

  const handleTabToggle = (event) => {
    const { value } = event.target
    const input = parseInt(value)
    setTabVisible(input)
  }

  const sidebarHeaders = ['Profile','Friend List','Trending With Friends','Online Play Invitations','Friend Suggestions','Add Friend','User Settings']
  return (
    <>
      <div className="profile-page-container">
        <div className="profile-header header">
          <img src={linkPic} alt="profile avatar" />
          <h4>JEdwardsKs Page</h4>
        </div>
        <div className="profile-page-body body">
          <div className="profile-sidebar">
            {sidebarHeaders.map((header, index) => {
              return (
                <button
                  className="profile-sidebar-headers"
                  key={index}
                  value={index}
                  onClick={handleTabToggle}>
                  {header}
                </button>
              )
            })}
          </div>
          <div className="profile-main">
            {tabVisible === 0 ?
              <ProfileTab />
              : tabVisible === 1 ?
                <FriendsTab />
                : tabVisible === 2 ?
                  <FriendsTrendingTab />
                  : tabVisible === 3 ?
                    <OnlinePlayTab />
                    : tabVisible === 4 ?
                      <FriendSuggestionsTab />
                      : tabVisible === 5 ?
                        <AddFriendTab />
                        : tabVisible === 6 ?
                          <UserSettingsTab />
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
