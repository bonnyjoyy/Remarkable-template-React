import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Thanks from './views/thanks'
import Contact from './views/contact'
import Success from './views/success'
import Contact1 from './views/contact1'
import Home from './views/home'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Thanks} exact path="/thanks" />
        <Route component={Contact} exact path="/contact" />
        <Route component={Success} exact path="/success" />
        <Route component={Contact1} exact path="/contact1" />
        <Route component={Home} exact path="/" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
