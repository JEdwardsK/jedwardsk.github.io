/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Footer from '../Footer'
import AmiiboTab from '../settingsTabs/AmiiboTab'
import ControllersTab from '../settingsTabs/ControllersTab'
import DataManagementTab from '../settingsTabs/DataManagementTab'
import FlightModeTab from '../settingsTabs/FlightModeTab'
import InternetTab from '../settingsTabs/InternetTab'
import MiiTab from '../settingsTabs/MiiTab'
import NotificationsTab from '../settingsTabs/NotificationsTab'
import ParentalControlTab from '../settingsTabs/ParentalControlTab'
import ScreenBrightnessTab from '../settingsTabs/ScreenBrightnessTab'
import ScreenLockTab from '../settingsTabs/ScreenLockTab'
import SleepModeTab from '../settingsTabs/SleepModeTab'
import SupportTab from '../settingsTabs/SupportTab'
import SystemTab from '../settingsTabs/SystemTab'
import ThemesTab from '../settingsTabs/ThemesTab'
import TVOutputTab from '../settingsTabs/TVOutputTab'
import UserTab from '../settingsTabs/UserTab'

import settingsSVG from '../../assets/svgs/settings.svg'


const SettingsPage = () => {


  const sidebarHeaders = ['Support', 'Flight Mode', 'Screen Brightness', 'Screen Lock', 'Parental Controls', 'Internet', 'Data Management', 'User', 'Mii', 'amibo', 'Themes', 'Notifications', 'Sleep Mode', 'Controllers and Sensors', 'TV Output', 'System']

  const [tabVisible, setTabVisible] = useState(0)
  const [hoverFocus, setHoverFocus] = useState(-1)

  const handleTabToggle = (event) => {
    const { value } = event.target
    const input = parseInt(value)
    setTabVisible(input)
  }

  const handleMouseEnter = (event) => {
    const { value } = event.target
    setHoverFocus(Number(value))
  }
  const handleMouseExit = () => {
    setHoverFocus(-1)
  }

  return (
    <div className="settings-page-container">
      <div className="profile-header header">
        <img src={settingsSVG} alt="settings icon" />
        <h4>Systems Settings</h4>
      </div>
      <hr />
      <div className="settings-page-body body">
        <div className="settings-sidebar">
          {sidebarHeaders.map((header, index) => {
            return (
              <button
                className={`profile-sidebar-headers ${hoverFocus === index && 'highlight'}`}
                key={index}
                value={index}
                onClick={handleTabToggle}
                onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit}
                style={
                  {

                    color: `${hoverFocus === index ? 'blue' : ''}`,
                    backgroundColor: `${hoverFocus === index ? 'white' : 'transparent'}`,
                    borderBottom: `${index === 0 || index === 5 ? '2px solid lightgrey' : ''}`,
                    // borderLeft: `${hoverFocus === index ? '5px solid blue' : '5px solid transparent'}`,
                  }
                }
              >
                {header}
              </button>
            )
          })}
        </div>
        <div className="profile-main">
          {
            tabVisible === 0 ?
              <SupportTab /> :
              tabVisible === 1 ?
                <FlightModeTab /> :
                tabVisible === 2 ?
                  <ScreenBrightnessTab /> :
                  tabVisible === 3 ?
                    <ScreenLockTab /> :
                    tabVisible === 4 ?
                      <ParentalControlTab /> :
                      tabVisible === 5 ?
                        <InternetTab /> :
                        tabVisible === 6 ?
                          <DataManagementTab /> :
                          tabVisible === 7 ?
                            <UserTab /> :
                            tabVisible === 8 ?
                              <MiiTab /> :
                              tabVisible === 9 ?
                                <AmiiboTab /> :
                                tabVisible === 10 ?
                                  <ThemesTab /> :
                                  tabVisible === 11 ?
                                    <NotificationsTab /> :
                                    tabVisible === 12 ?
                                      <SleepModeTab /> :
                                      tabVisible === 13 ?
                                        <ControllersTab /> :
                                        tabVisible === 14 ?
                                          <TVOutputTab /> :
                                          tabVisible === 15 ?
                                            <SystemTab /> :
                                            null
          }
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default SettingsPage
