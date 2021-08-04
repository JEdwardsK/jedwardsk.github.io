import React from 'react'
import codePenLogo from '../../assets/logos/codepen.png'
import linkedInLogo from '../../assets/logos/linkedin.png'
import gitHubLogo from '../../assets/logos/github.png'
import albumSVG from '../../assets/svgs/album.svg'
import controllerSVG from '../../assets/svgs/controller.svg'
import powerSVG from '../../assets/svgs/power.svg'
import settingsSVG from '../../assets/svgs/settings.svg'
import newsSVG from '../../assets/svgs/news.svg'
import eShopPic from '../../assets/nintendo-icons/eshop.png'


import settingsClick from '../../assets/sounds/Settings.wav'
import eShopSound from '../../assets/sounds/Eshop Intro.wav'




const IconButtons = ({ handleMouseEnter, focusClass, hoverFocus, handleMouseExit }) => {
  const eShopSoundClick = new Audio(eShopSound)
  // eslint-disable-next-line no-unused-vars
  const settingsSound = new Audio(settingsClick)


  const eShopPlaySound = () => eShopSoundClick.play()

  const nintendoOnline = 'https://vignette.wikia.nocookie.net/nintendo/images/d/de/Nintendo_Switch_Online_-_App_icon.svg/revision/latest?cb=20170719034029&path-prefix=en'

  class HomeScreenIconButton {
    /**
     * Creates a button for the buttonsArray
     * @param {Boolean} isLink states whether the button is a link
     * @param {Number} hoverValue assigns a value for the hoverFocus state check
     * @param {String} link string for link
     * @param {String} tagName the name of the link displayed on hover if the button isLink === true, on hover the 
     * @param {String} altImage the image source where isLink === true
     * @param {String} defaultImage the default image where isLink !== true
     */
    constructor(isLink, hoverValue, link, tagName, altImage, defaultImage ) {
      this.isLink = isLink
      this.hoverValue = hoverValue
      this.link = link
      this.tagName = tagName
      this.altImage = altImage
      this.defaultImage = defaultImage
    }
  }

  const buttonsArray = [
    new HomeScreenIconButton(true, -3, 'https://github.com/JEdwardsK', 'GitHub', gitHubLogo, nintendoOnline),
    new HomeScreenIconButton(true, -4, 'https://www.linkedin.com/in/jedwardsk/', 'LinkedIn', linkedInLogo, newsSVG ),
    new HomeScreenIconButton(false, -5, '', 'Nintendo eShop','', eShopPic),
    new HomeScreenIconButton(false, -6, '', 'CodePen', codePenLogo, albumSVG),
    new HomeScreenIconButton(false, -7, '', 'Controllers', '', controllerSVG),
    new HomeScreenIconButton(false, -8, '', 'Settings', '', settingsSVG),
    new HomeScreenIconButton(false, -9, '', 'Sleep Mode', '', powerSVG)
  ]
  // TODO: when updating, update to include handlePageChange onCLick to redirect to settings page?

  return (
    <div className="homescreen-body-buttons">
      {
        buttonsArray.map((button, index) => {
          const { isLink, hoverValue, link, tagName, altImage, defaultImage } = button

          if (isLink) {
            return (
              <div 
                className="linked-button-wrapper"
                key={index}
              >
                <a href={link}>
                  <button
                    className={`homescreen-button ${hoverFocus === hoverValue && focusClass}`}
                    value={hoverValue}
                    onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit}
                    style={
                      {
                        backgroundImage: `url(${hoverFocus === hoverValue ? altImage : defaultImage})`,
                      }}
                  />
                </a>
                { hoverFocus === hoverValue &&
                  <p className="button-tag">{tagName}</p>
                }
              </div>
            )
          } else {
            return (
              <div 
                className="linked-button-wrapper"
                key={index}
              >
                <button
                  className={`homescreen-button ${hoverFocus === hoverValue && focusClass}`}
                  value={hoverValue}
                  style={
                    { backgroundImage: `url(${defaultImage})`, cursor: 'default' }
                  }
                  onMouseEnter={handleMouseEnter} 
                  onMouseLeave={handleMouseExit}
                  onClick={eShopPlaySound}/>
                { hoverFocus === hoverValue &&
                <p className="button-tag"> 
                  {tagName}
                </p>
                }
              </div>
            )
          }
        })
      }
    </div>
  )
}

export default IconButtons
