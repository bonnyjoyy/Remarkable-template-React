import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Contact from './views/contact'
import Home from './views/home'
import Thanks from './views/thanks'
import Success from './views/success'
import Contact1 from './views/contact1'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Contact} exact path="/contact" />
        <Route component={Home} exact path="/" />
        <Route component={Thanks} exact path="/thanks" />
        <Route component={Success} exact path="/success" />
        <Route component={Contact1} exact path="/contact1" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
