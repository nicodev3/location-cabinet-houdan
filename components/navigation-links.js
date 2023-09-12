import React from 'react'

import PropTypes from 'prop-types'

const NavigationLinks = (props) => {
  return (
    <>
      <nav className={`navigation-links-nav ${props.rootClassName} `}>
        <a href="#portfolio" className="navigation-links-link">
          {props.portfolio}
        </a>
        <a href="#tarifs" className="navigation-links-link1">
          {props.tarifs}
        </a>
        <a href="#contact" className="navigation-links-link2">
          {props.contact}
        </a>
      </nav>
      <style jsx>
        {`
          .navigation-links-nav {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .navigation-links-link {
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .navigation-links-link1 {
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .navigation-links-link2 {
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }

          @media (max-width: 767px) {
            .navigation-links-nav {
              align-items: flex-start;
              flex-direction: column;
            }
            .navigation-links-link {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links-link1 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links-link2 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

NavigationLinks.defaultProps = {
  text4: 'Blog',
  portfolio: 'Portfolio',
  contact: 'Contact',
  text: 'About',
  rootClassName: '',
  tarifs: 'Tarifs',
}

NavigationLinks.propTypes = {
  text4: PropTypes.string,
  portfolio: PropTypes.string,
  contact: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  tarifs: PropTypes.string,
}

export default NavigationLinks
