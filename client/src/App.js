/* eslint-disable no-unused-vars */
import React from 'react'
// import LockScreen from './components/LockScreen'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import FeaturedPage from './components/sitePages/FeaturedPage'
import ProfilePage from './components/sitePages/ProfilePage'
import SettingsPage from './components/sitePages/SettingsPage'
import HomePage from './components/sitePages/HomePage'
import AllProjectsPage from './components/sitePages/AllProjectsPage'
import BookFinderPage from './components/sitePages/BookFinderPage'


const App = () => {
  return (

    <BrowserRouter>
      <Switch>
        <Route path="/all-projects">
          <AllProjectsPage/>
        </Route>
        <Route path="/settings">
          <SettingsPage/>
        </Route>
        <Route path="/profile">
          <ProfilePage/>
        </Route>
        <Route path="/featured">
          <FeaturedPage/>
        </Route>
        <Route path="/book_finder_v2/">
          <BookFinderPage/>
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
        {/* <Route path="/">
          <LockScreen />
        </Route> */}
      </Switch>

    </BrowserRouter>

  )
}

export default App
