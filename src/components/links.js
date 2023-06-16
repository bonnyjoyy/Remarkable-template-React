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
      <button className="links-button1 button">{props.button}</button>
      <label className="">{props.text2}</label>
    </nav>
  )
}

Links.defaultProps = {
  button: 'Menu',
  text: 'Contact',
  text1: 'Home',
  rootClassName: '',
  text2: 'Label',
}

Links.propTypes = {
  button: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
  text2: PropTypes.string,
}

export default Links
