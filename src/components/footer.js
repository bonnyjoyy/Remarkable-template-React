import React from 'react'

import PropTypes from 'prop-types'

import Branding from './branding'
import './footer.css'

const Footer = (props) => {
  return (
    <footer className="footer-footer">
      <div className="footer-information">
        <div className="footer-content">
          <div className="footer-header">
            <Branding></Branding>
            <p className="footer-text">{props.text}</p>
          </div>
          <div className="footer-contact-list">
            <div className="footer-contact">
              <img
                alt={props.image_alt}
                src={props.image_src}
                className="footer-image"
              />
              <span className="footer-text1">{props.text1}</span>
            </div>
            <div className="footer-contact1">
              <img
                alt={props.image_alt1}
                src={props.image_src1}
                className="footer-image1"
              />
              <span className="footer-text2">{props.text2}</span>
            </div>
          </div>
        </div>
        <span className="footer-copyright">{props.Copyright}</span>
      </div>
      <div className="footer-links">
        <div className="footer-column"></div>
        <div className="footer-column1">
          <span className="link">{props.Text6}</span>
          <span className="link">{props.Text7}</span>
          <span className="link">{props.Text8}</span>
          <span className="link">{props.Text9}</span>
        </div>
      </div>
    </footer>
  )
}

Footer.defaultProps = {
  Text5: 'Contact',
  Text9: 'Facebook',
  Text1: 'Training\n',
  Copyright: '©2023 Artistree. All Rights Reserved.',
  image_alt: 'image',
  Text: 'About',
  text: 'Art is what you make it.',
  image_src: '/group%201639.svg',
  Text3: 'Membership',
  text1: 'artistress@proton.me',
  Text8: 'Twitter',
  Text4: 'Blog',
  Text6: 'Linkedin',
  Text2: 'Events',
  text2: '+0 222.345.987',
  image_alt1: 'image',
  image_src1: '/group%201640.svg',
  Text7: 'Instagram',
}

Footer.propTypes = {
  Text5: PropTypes.string,
  Text9: PropTypes.string,
  Text1: PropTypes.string,
  Copyright: PropTypes.string,
  image_alt: PropTypes.string,
  Text: PropTypes.string,
  text: PropTypes.string,
  image_src: PropTypes.string,
  Text3: PropTypes.string,
  text1: PropTypes.string,
  Text8: PropTypes.string,
  Text4: PropTypes.string,
  Text6: PropTypes.string,
  Text2: PropTypes.string,
  text2: PropTypes.string,
  image_alt1: PropTypes.string,
  image_src1: PropTypes.string,
  Text7: PropTypes.string,
}

export default Footer
