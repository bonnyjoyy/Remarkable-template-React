import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './links.css'

const Links = (props) => {
  return (
    <nav className={`links-links ${props.rootClassName} `}>
      <Link to="/contact" className="links-navlink button">
        <span className="">{props.text}</span>
      </Link>
      <button className="links-button button">
        <Link to="/" className="links-navlink1">
          {props.text1}
        </Link>
      </button>
    </nav>
  )
}

Links.defaultProps = {
  rootClassName: '',
  button: 'Menu',
  text2: 'Label',
  text: 'Contact',
  text1: 'Home',
}

Links.propTypes = {
  rootClassName: PropTypes.string,
  button: PropTypes.string,
  text2: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
}

export default Links
