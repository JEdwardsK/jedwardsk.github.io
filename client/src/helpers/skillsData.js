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
    constructor(name, icon, altImage) {
      this.name = name,
      this.icon = icon,
      this.altImage = altImage
    }
  }

  export const currentSkills = [
    new Skill('Javascript', faJsSquare),
    new Skill('HTML', faHtml5),
    new Skill('CSS', faCss3),
    new Skill('React (Hooks)', faReact),
    new Skill('Nodejs', faNodeJs),
    new Skill('Express', null, expressLogo ),
    new Skill('Insomnia', null,insomniaLogo ),
    new Skill('Mongoose ODM', null, mongooseLogo),
    new Skill('Yarn', faYarn),
    new Skill('Pip', null, pipLogo),
    new Skill('Pipenv', faPython),
    new Skill('Python', faPython),
    new Skill('PostgreSQL', null, postgresqlLogo),
    new Skill('TablePlus', null, tableplusLogo),
    new Skill('MongoDB', null, mongodbLogo),
    new Skill('Django', null, djangoLogo),
    new Skill('SCSS', faSass),
    new Skill('Bulma', null, bulmaLogo),
    new Skill('Bootstrap', faBootstrap)
  ]
  export const developingSkills = [
    new Skill('Python', faPython),
    new Skill('TypeScript', null, typescriptLogo),
    new Skill('SCSS', faSass),
    new Skill('PostgreSQL', null, postgresqlLogo)
  ]
  export const futureSkills = [
    new Skill('AWS', faAws),
    new Skill('React Native', faReact),
    new Skill('Tailwind', null, tailwindLogo),
    new Skill('NextJS', null, nextjsLogo)
  ]
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


