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

const SettingsPage = () => {


  const sidebarHeaders = ['Support', 'Flight Mode', 'Screen Brightness', 'Screen Lock', 'Parental Controls', 'Internet', 'Data Management', 'User', 'Mii', 'amibo', 'Themes', 'Notifications', 'Sleep Mode', 'Controllers and Sensors', 'TV Output', 'System']

  const [tabVisible, setTabVisible] = useState(0)

  const handleTabToggle = (event) => {
    const { value } = event.target
    const input = parseInt(value)
    setTabVisible(input)
  }
  return (
    <div className="settings-page-container">
      <div className="settings-page-header header">
        <p>Systems Settings</p>
      </div>
      <hr />
      <div className="settings-page-body body">
        <div className="settings-page-sidebar">
          {sidebarHeaders.map((header, index) => {
            return (
              <button
                className="settings-sidebar-headers"
                key={index}
                value={index}
                onClick={handleTabToggle}>
                {header}
              </button>
            )
          })}
        </div>
        <div className="settings-page-main">
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
