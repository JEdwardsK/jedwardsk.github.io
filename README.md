# projectv2
trying something out

  {/* <div className="friends-list-tab">
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
      </div> */}


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