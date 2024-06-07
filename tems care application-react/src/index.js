import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Shadow from './views/shadow'
import Group79 from './views/group79'
import Group80 from './views/group80'
import Frame82 from './views/frame82'
import BottomNavigation from './views/bottom-navigation'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Shadow} exact path="/" />
        <Route component={Group79} exact path="/group79" />
        <Route component={Group80} exact path="/group80" />
        <Route component={Frame82} exact path="/frame82" />
        <Route component={BottomNavigation} exact path="/bottom-navigation" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
