import pubImage from '../assets/project-images/pubHub.png'
import bookImage from '../assets/project-images/bookFinder.png'
import spaceImage from '../assets/project-images/spaceInvaders.png'
import greekImage from '../assets/project-images/pantheon.png'
import luigiPic from '../assets/images/luigi.png'
import princessPic from '../assets/images/princess.png'
import splatoonSplashPic from '../assets/images/splatoonsplash.png'
import bowserPic from '../assets/images/bowser.png'
import casualMarioPic from '../assets/images/casualMario.png'
class Collaborator {
  constructor(name, github, linkedIn, profilePic) {
    this.name = name
    this.github = github
    this.linkedIn = linkedIn
    this.profilePic = profilePic
  }
}

//#region collaborators
const atillaArslan = new Collaborator('Atilla Arslan', 'https://github.com/Atilla-Arslan', 'https://www.linkedin.com/in/atilla-arslan7/', princessPic)

const samiHakim = new Collaborator('Sami Hakim', 'https://www.linkedin.com/in/samihakim/', 'https://github.com/Hamisakim', splatoonSplashPic)

const oliviaFlynn = new Collaborator('Olivia Flynn', 'http://github.com/oliviafpersonal', 'http://bit.ly/oliviaflynn', casualMarioPic)

const harryWarwick = new Collaborator('Harry Warwick', 'http://github.com/hfrwarwick', 'http://linkedin.com/in/harrywarwick', bowserPic)

const georgeShaw = new Collaborator('George Shaw', ' ', 'https://www.linkedin.com/in/georgeshaw1998', luigiPic)

//#endregion
class Project {
  constructor(title, collaborators, tagLine, image, deployed, about,
    repoLink) {
    this.title = title
    this.projectType = collaborators.length === 0 ? 'Solo Project' : collaborators.length === 1 ? 'Pair Programming Project' : 'Group Project'
    this.collaborators = collaborators
    this.tagLine = tagLine
    this.image = image
    this.deployedLink = deployed
    this.about = about
    this.repoLink = repoLink
  }
}


//#region projects
const spaceInvaders = new Project(
  'Space Invaders',
  [],
  'A Grid-based JavaScript game, built as first Project at General Assembly',
  spaceImage,
  'https://jedwardsk.github.io/sei-project-one/',
  ['A Space Invaders Clone created using JavaScript, CSS and HTML. The goal of this project was to consolidate the introductory knowledge gained from the start of the course.'],
  'https://github.com/JEdwardsK/sei-project-one'

)
const pantheon = new Project(
  'Pantheon - Greek Myth Family Tree',
  [ samiHakim ],
  'A 48 hour pair project, whilst at General Assembly',
  greekImage,
  'https://thepantheon.netlify.app/',
  ['A React App that generates an interactive family tree. The focus of this project was to familiarise myself with the process of implementing data from an external API. '],
  'https://github.com/JEdwardsK/Greek-God-Family-Tree'

)

const pubHub = new Project(
  'PubHub',
  [atillaArslan, harryWarwick, oliviaFlynn],
  'A full stack express app with CRUD functionality',
  pubImage,
  'https://pubhub-new.herokuapp.com/',
  ['A clone based on AirBnb, the app allows users to register and search pubs in the UK and among other activities save to favourites, leave comments, rate their experience based on criteria and filter searches based on pub amenities.', 'They could additionally register as a landlord to add their own pubs, with additional associated permissions.', 'My primary tasks in the project were handling the backend production, in addition to assisting with front end requests.'],
  'https://github.com/JEdwardsK/sei-project-three'
)

const bookFinder = new Project(
  'BookFinder',
  [georgeShaw],
  'A full stack django App with CRUD functionality, a searchable book database',
  bookImage,
  'https://project-book-finder.herokuapp.com/',
  ['The app allows users to view a database of books, protagonists, antagonists and supporting characters.', 'Registered users can contribute to the database, and search for books by keywords, returning results based on a match value', 'The aim was to theme the app based on Avatar: the Last Airbender, specifically Wan Shi Tong\'s spirit library.', 'My primary tasks in the project were handling the backend production and the search book component. I also was responsible for styling the character SVG logos'],
  'https://github.com/JEdwardsK/SEI-Project-4'
)
//#endregion

export const projects = [
  bookFinder,
  pubHub,
  pantheon,
  spaceInvaders
]
//#region

export const collaborators = [
  samiHakim,
  atillaArslan,
  oliviaFlynn,
  harryWarwick,
  georgeShaw
]
