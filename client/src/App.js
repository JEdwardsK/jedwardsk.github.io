import React from 'react'
import LockScreen from './components/LockScreen'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { HomeScreen } from './components/HomeScreen'
import FeaturedPage from './components/FeaturedPage'
import ProfilePage from './components/ProfilePage'

const App = () => {
  return (

    <BrowserRouter>
      <Switch>
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
