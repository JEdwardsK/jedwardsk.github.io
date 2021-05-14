import React from 'react'
import LockScreen from './components/LockScreen'
import { BrowserRouter, Route } from 'react-router-dom'
import Switch from 'react-bootstrap/esm/Switch'
const App = () => {
  return (

    <BrowserRouter>
      <Switch>
        <Route path="/">
          <LockScreen />
        </Route>
      </Switch>
    </BrowserRouter>

  )
}

export default App
