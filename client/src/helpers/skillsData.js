/* eslint-disable indent */
/* eslint-disable no-unused-vars */
import { faAws, faBootstrap, faCss3, faHtml5, faJsSquare, faNodeJs, faPython, faReact, faSass, faYarn } from '@fortawesome/free-brands-svg-icons'

import bulmaLogo from '../assets/logos/bulma.png'
import djangoLogo from '../assets/logos/django.png'
import expressLogo from '../assets/logos/express.png'
import insomniaLogo from '../assets/logos/insomnia.png'
import mongodbLogo from '../assets/logos/mongodb.png'
import mongooseLogo from '../assets/logos/mongoose.png'
import nextjsLogo from '../assets/logos/nextjs.png'
import pipLogo from '../assets/logos/pip.png'
import postgresqlLogo from '../assets/logos/postgres.png'
import tableplusLogo from '../assets/logos/tableplus.png'
import tailwindLogo from '../assets/logos/tailwind.png'
import typescriptLogo from '../assets/logos/typescript.png'

  //#region skills Arrays
  class Skill {
  constructor(name, icon, altImage, time) {
    this.name = name
    this.icon = icon
    this.altImage = altImage
    this.experience =
      time < 0 ? 'Game on wishlist'
      : time === 0 ? 'Game Installed'
        : (time > 0 && time <= 10) ? 'Just started playing'
          : (time > 10 && time <= 20) ? 'Played for a little while'
            : `Played for ${time} hours`
  }
}
  const javaScript = new Skill('JavaScript', faJsSquare, null, 20)
  const html = new Skill('HTML', faHtml5, null, 20)
  const css = new Skill('CSS', faCss3,null, 20)
  const react = new Skill('React (Hooks)', faReact, null, 20)
  const nodeJs = new Skill('Nodejs', faNodeJs, null, 20)
  const express = new Skill('Express', null, expressLogo, 20)
  const insomnia = new Skill('Insomnia', null,insomniaLogo, 20 )
  const mongoose = new Skill('Mongoose ODM', null, mongooseLogo, 20)
  const yarn = new Skill('Yarn', faYarn, null, 20)
  const pip = new Skill('Pip', null, pipLogo, 20)
  const pipenv = new Skill('Pipenv', faPython, null, 20)
  const python = new Skill('Python', faPython, null, 20)
  const postgresql = new Skill('PostgreSQL', null, postgresqlLogo, 10)
  const tablePlus = new Skill('TablePlus', null, tableplusLogo, 10)
  const mongodb = new Skill('MongoDB', null, mongodbLogo, 20)
  const django = new Skill('Django', null, djangoLogo, 20)
  const sCSS = new Skill('SCSS', faSass, null, 20)
  const bulma = new Skill('Bulma', null, bulmaLogo, 20)
  const bootstrap = new Skill('Bootstrap', faBootstrap, null, 20)
  const typescript = new Skill('TypeScript', null, typescriptLogo, 0)
  const aWS = new Skill('AWS', faAws, null, -1)
  const reactNative = new Skill('React Native', faReact, null, -1)
  const tailwind = new Skill('Tailwind', null, tailwindLogo, -1)
  const nextJS = new Skill('NextJS', null, nextjsLogo, -1)

export const currentSkills = [
  javaScript, html, css, react, nodeJs, express, insomnia, mongoose, yarn, pip, pipenv, python, postgresql,
  tablePlus, mongodb, django, sCSS, bulma, bootstrap
]

export const developingSkills = [
    python, sCSS, postgresql, typescript
]

export const futureSkills = [
  aWS, reactNative,tailwind, nextJS
]

export const allSkills = [
  javaScript, html, css, react, nodeJs, express, insomnia, mongoose, yarn, pip, pipenv, python, postgresql, tablePlus, mongodb, django, sCSS, bulma, bootstrap, typescript, aWS, reactNative, tailwind, nextJS
]

export const skillHighlight = typescript
  //#endregion

  const styleObject = (altImage) => {
    const styleObj = {
      background: `no-repeat center/contain url(${altImage})`,
      height: '60',
      width: '60',
      flex: 2,

}
    return styleObj
  }

//   return (
//     <>
//       <section>
//         <h2>
//           Hi! I am a full stack developer looking for the opportunity to <TypeText/>
//         </h2>
//       </section>
//       <section>
//         <h3>Experience With</h3>
//         <Row lg="5" md="3" className="skills-container">
//           {currentSkills.map((skill, index) => {
//             const { name, icon, altImage } = skill
//             return (
//               <Col className="skill" key={index}>
//                 { !icon ?
//                   // <div className="test" style={styleObject(altImage)}
//                   // ></div>

//                   <img className="skill-logo" src={altImage} alt={`logo for ${name}`} width="60" />
//                     :
//                   <FontAwesomeIcon className="skill-logo" icon={icon} size="5x" />
//                 }
//                 <p className="skill-name">{ name }</p>
//               </Col>
//             )
//           })}
//         </Row>
//       </section>
//       <section>
//         <h3>Current Learning Focuses</h3>
//         <div className="skills-container">
//           {developingSkills.map((skill, index) => {
//             const { name, icon, altImage } = skill
//             return (
//               <div className="skill" key={index}>
//                 { !icon ?
//                   <img className="skill-logo" src={altImage} alt={`logo for ${name}`} width="60" /> :
//                   <FontAwesomeIcon className="skill-logo" icon={icon} size="5x"/>}
//                 <p className="skill-name">{ name }</p>
//               </div>
//             )
//           })}
//         </div>
//       </section>
//       <section>
//         <h3>Future Learning Goals</h3>
//         <div className="skills-container">
//           {futureSkills.map((skill, index) => {
//             const { name, icon, altImage } = skill
//             return (
//               <div className="skill" key={index}>
//                 { !icon ?
//                   <img className="skill-logo" src={altImage} alt={`logo for ${name}`} width="60"/> :
//                   <FontAwesomeIcon className="skill-logo" icon={icon} size="5x"/>}
//                 <p className="skill-name">{ name }</p>
//               </div>
//             )
//           })}
//         </div>
//       </section>
//     </>
//   )
// }


