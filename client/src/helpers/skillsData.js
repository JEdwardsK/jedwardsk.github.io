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

import botw from '../assets/games/botw.png'
import cupheadPic from '../assets/games/cuphead.jpg'
import oriBlindPic from '../assets/games/oriBlind.jpg'

import apolloLogo from '../assets/logos/apollo-logo.png'

//#region skills Arrays

export class Skill {
  constructor(name, icon, altImage, hours) {
    this.name = name
    this.icon = icon
    this.altImage = altImage
    this.hours = hours
    this.experience =
      hours < 0 ? 'Game on wishlist'
        : hours === 0 ? 'Game Installed'
          : (hours > 0 && hours <= 10) ? 'Just started playing'
            : (hours > 10 && hours <= 20) ? 'Played for a little while'
              : `Played for ${hours} hours or more`
  }
}

const javaScript = new Skill('JavaScript', faJsSquare, null, 480)
const html = new Skill('HTML', faHtml5, null, 480)
const css = new Skill('CSS', faCss3,null, 480)
const react = new Skill('React (Hooks)', faReact, null, 200)
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
const typescript = new Skill('TypeScript', null, typescriptLogo, 10)
const aWS = new Skill('AWS', faAws, null, -1)
const reactNative = new Skill('React Native', faReact, null, -1)
const tailwind = new Skill('Tailwind', null, tailwindLogo, -1)
const nextJS = new Skill('NextJS', null, nextjsLogo, 10)
const apollo = new Skill('Apollo GraphQL', null, apolloLogo, 3)


const zelda = new Skill('The Legend of Zelda: Breath of the Wild', null, botw, 135)
const cuphead = new Skill('Cuphead', null, cupheadPic, 25)
const oriBlindForest = new Skill('Ori and the Blind Forest', null, oriBlindPic, 21)


export const currentSkills = [
  javaScript, html, css, react, nodeJs, express, insomnia, mongoose, yarn, python, postgresql,
  tablePlus, mongodb, django, sCSS, bulma, bootstrap
]

export const developingSkills = [
  python, sCSS, postgresql, typescript
]

export const futureSkills = [
  aWS, reactNative,tailwind, nextJS
]

export const allSkills = [
  javaScript, html, css, cuphead, react, typescript, apollo, oriBlindForest, nodeJs, express, insomnia, mongoose, yarn, zelda, python, postgresql, tablePlus, mongodb, django, sCSS, bulma, bootstrap, aWS, reactNative, tailwind, nextJS
]

export const skillHighlight = apollo
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