import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Header'
import About from './About'
import Services from './Services'
import Homepage from './Homepage'

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/autodetail/about'>
          <About />
        </Route>
        <Route path='/autodetail/services'>
          <Services />
        </Route>
        <Route path='/autodetail'>
          <Homepage />
        </Route>
      </Switch>
    </Router>
  )
}
