import React from 'react'
import Card from 'react-bootstrap/Card'
import MySkills from '../MySkills'

const SiteSummary = () => {
  return (
    <Card style={{ overflow: 'auto', height: '300px' }}>
      <Card.Body>
        <Card.Text>
          <section id="first">
            <p>
              {'Welcome to my portfolio site! The design has been based around the Nintendo Switch UI.'}

            </p>
            <p>
              {'Navigating through the various pages will display information about what I have worked on, who with and how to find me. If you would like to play around, click close and enjoy!'}
            </p>
            <p>
              {'If you would like some information on where things are located, or what elements are interactive, click on the tabs above for a walkthrough of the relevant page'}
            </p>
            <p>
              {'If you would rather just see the information in one go, click the \'About Me\' tab above for my skills and contact details.'}
            </p>
            <p>
              The link to the repo for this site is <a href="https://github.com/JEdwardsK/jedwardsk.github.io">here</a>
            </p>
            <p>
              {'Thanks for visiting my site!'}
            </p>
            <br />
            <hr />
            <br />
          </section>
          <section id="navigation-homepage">
            <h2>HomePage</h2>
            <br />
            <p>
              On the homescreen, substituting installed games, you can scroll through my most recent projects. Clicking on the project will open up a short summary of the project, its repo and deployed link, and links to any collaborators if I worked in a pair or team.
            </p>
            <p>
              {' Clicking on all projects will direct to a view of all of the projects I have worked on and will be updated with any thing I am currently developing.'}
            </p>
            <p>
              Hovering over the homescreen buttons may change the icons. Where icons change, these are links to the relevant sites. Listed below are the buttons with their associated links:
            </p>
            <ul>
              <li>Nintendo Online - GitHub</li>
              <li>News - LinkedIn</li>
              <li>{'Album - CodePen (not yet! I haven\'t started any pens yet)'}</li>
            </ul>
            <p>
              {'The \'B Back\' icon will navigate you back to your last viewed page, unless you are on the homepage, where it will disappear'}
            </p>
            <p>
              {'Clicking on the Icon at the top left will navigate to the Profile Page. Here you can see information about my skills.'}
            </p>
            <p>
              {'Clicking on the Settings Tab will redirect you to the Settings page. At the moment there are not any interactive functions. In the future there will be added functionality such as changing the theme or language.'}
            </p>
            <br />
            <hr />
            <br />
          </section>
          <section id="navigation-profile">
            <h2>Profile</h2>
            <br />
            <p>
              The Profile Page has a number of tabs.
            </p>
            <h5>Profile</h5>

            <p>
              {' Displays the profile tab, with a profile picture and username. The last played section has been replaced with what I\'m currently learning.'}
            </p>
            <p>
              The Play Activity has a list of the technologies that I have either used, or plan on using. The play record contextually notes my experience with them:
            </p>
            <ul>
              <li>{'if I have used them then I have \'Played for a little while\''};</li>
              <li>{'if I am in the process of learning then I have  \'Just started playing\' '}</li>
              <li>{'if I have just started learning something then the \'Game is installed\''}</li>
              <li>{'if I have never played then it is \'Game is on wishlist\''}</li>
            </ul>

            <p>
              {'Hovering over the question mark will highlight \'click to view my skills\'. Doing so will open up a modal displaying a breakdown of what technologies I have used, which I am currently expanding my knowledge on and which am looking learn in the future.'}
            </p>
            <h5>Friends</h5>
            <p>
              {'The Friends tab is an index of each person I have worked with on any projects. The links to their GitHub and LinkedIn pages are with the relevant project. If I am currently working on a project with someone, their status will read \'Online\'.'}
            </p>
            <h5>Works In Progress</h5>
            <p>
              The remaining tabs do not yet have functionality but will hopefully have some in the future. Listed below are speculative functions or ideas.
            </p>

            <p>
              The Trending with Friends Tab could note any particular interesting bits of info I have come across recently

            </p>
            <p>
              The Online play suggestions could be a tab to allow requests for coding projects

            </p>
            <p>
              {'The Friends Suggestions tab could site visitors to post a message recommending a particular technology, or resource for me to learn or explore'}

            </p>
            <p>
              {'User settings could be used for changing profile picture perhaps and other aesthetics for the site.'}
            </p>
            <br />
            <hr />
            <br />
          </section>
          {/* <section id="navigation-settings">
            <h2>Settings</h2>
            <p>
              All of settings is currently WIP.
            </p>
            <br />
            <hr />
            <br /> 
          </section> */}
          <section id="key-info-skills">
            <h2>My Skills</h2>
            <br />
            <MySkills location='homepage'/>
            <br />
            <hr />
            <br />
          </section>
          <section id="key-info-contact">
            <h2>Contact Details</h2>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/jedwardsk/">JEdwardsK</a></p>
            <p>GitHub: <a href="https://github.com/JEdwardsK">JEdwardsK</a></p>
            <br />
            <hr />
            <br />
          </section>
        </Card.Text>
      </Card.Body>
    </Card>


  )
}

export default SiteSummary
