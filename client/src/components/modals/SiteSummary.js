import React from 'react'
import Card from 'react-bootstrap/Card'
import MySkills from '../MySkills'

const SiteSummary = () => {
  return (
    <Card style={{ overflow: 'auto', height: '300px' }}>
      <Card.Header>
      </Card.Header>
      <Card.Body>
        <Card.Text>
          <section id="first">
            <p>
              Welcome to my portfolio site! The design has been based around the Nintendo Switch UI.

            </p>
            <p>
              Navigating through the various pages will display information about what I have worked on, who with and how to find me. If you would like to play around, click close and enjoy!

            </p>
            <p>
              If you would like some information on where things are located, or what elements are interactive, click on the tabs above for a walkthrough of the relevant page
            </p>
            <p>
              If you would rather just see the information in one go, click the ‘About Me’ tab above for my skills and contact details.
            </p>
            <p>
              The link to the repo for this site is here
            </p>
            <p>
              Thanks for visiting my site!
            </p>
          </section>
          <section id="key-info-skills">
            <h2>My Skills</h2>
            <MySkills/>
          </section>
          <section id="key-info-contact">
            <h2>Contact Details</h2>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/jedwardsk/">JEdwardsK</a></p>
          </section>
          <section id="navigation-homepage">
            <h2>HomePage</h2>
            <p>
              On the homescreen, substituting installed games, you can scroll through my most recent projects. Clicking on the project will open up a short summary of the project, its repo and deployed link, and links to any collaborators if I worked in a pair or team.
            </p>
            <p>
              Clicking on all projects will direct to a view of all of the projects I have worked on, what I am currently working on, and any future projects or ideas I have (not yet, I’ve only got a few completed projects, which still need fixing, give me time!).
            </p>
            <p>
              Hovering over the homescreen buttons may change the icons. Where icons change, these are links to the relevant sites. Listed below are the buttons with their associated links:
            </p>
            <ul>
              <li>Nintendo Online - GitHub</li>
              <li>Nintendo eShop - LinkedIn</li>
              <li>Album - CodePen (not yet! I haven’t started any pens yet)</li>
            </ul>
            <p>
              The B Button icon will navigate you back to your last viewed page, unless you are on the homepage, where it will disappear
            </p>
            <p>
              Clicking on the Icon at the top left will navigate to the Profile Page. Here you can see information about my skills.
            </p>
            <p>
              Clicking on the Settings Tab will redirect you to the Settings page. At the moment there are not any interactive functions. In the future there will be added functionality such as changing the theme or language.
            </p>
            <h3>My Projects</h3>
            <p>F</p>
          </section>
          <section id="navigation-profile">
            <h2>Profile</h2>
            <p>
              The Profile Page has a number of tabs.
            </p>
            <h5>Profile</h5>

            <p>
              Displays the profile tab, with a profile picture and username. The last played section has been replaced with what I’m currently learning.
            </p>
            <p>
              The Play Activity has a list of the technologies that I have either used, or plan on using. The play record contextually notes my experience with them:
            </p>
            <ul>
              <li>if I have used them then I have ‘Played for a little while’;</li>
              <li>if I am in the process of learning then I have  ‘Just started playing’ </li>
              <li>if I have just started learning something then the ‘Game is installed’</li>
              <li>if I have never played then it is ‘Game is on wishlist’</li>
            </ul>

            <p>
              Hovering over the question mark will highlight ‘click to view my skills’. Doing so will open up a modal displaying a breakdown of what technologies I have used, which I am currently expanding my knowledge on and which am looking learn in the future.
            </p>
          </section>
        </Card.Text>
      </Card.Body>
    </Card>


  )
}

export default SiteSummary
