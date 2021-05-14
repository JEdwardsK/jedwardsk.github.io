import React from 'react'
import LockScreen from './components/LockScreen'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { HomeScreen } from './components/HomeScreen'

const App = () => {
  return (

    <BrowserRouter>
      <Switch>
        <Route path="/home/">
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
