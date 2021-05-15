/* eslint-disable no-unused-vars */
import React from 'react'
import LockScreen from './components/LockScreen'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { HomeScreen } from './components/HomeScreen'
import FeaturedPage from './components/FeaturedPage'
import ProfilePage from './components/ProfilePage'
import SettingsPage from './components/SettingsPage'


const App = () => {
  return (

    <BrowserRouter>
      <Switch>
        <Route path="/settings">
          <SettingsPage/>
        </Route>
        <Route path="/profile">
          <ProfilePage/>
        </Route>
        <Route path="/featured">
          <FeaturedPage/>
        </Route>
        <Route path="/home">
          <HomeScreen />
        </Route>
        <Route path="/">
          <LockScreen />
        </Route>
      </Switch>

    </BrowserRouter>

  )
}

export default App
