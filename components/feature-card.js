import React from 'react'

import PropTypes from 'prop-types'

const FeatureCard = (props) => {
  return (
    <>
      <div className={`feature-card-feature-card ${props.rootClassName} `}>
        <div className="feature-card-container">
          <h3 className="feature-card-text">{props.title}</h3>
          <p>{props.description}</p>
        </div>
      </div>
      <style jsx>
        {`
          .feature-card-feature-card {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .feature-card-container {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .feature-card-text {
            font-weight: 600;
            margin-bottom: var(--dl-space-space-unit);
          }

          @media (max-width: 1600px) {
            .feature-card-feature-card {
              box-shadow: 2px 2px 2px 0px #d4d4d4;
              padding-left: 0px;
            }
          }
          @media (max-width: 767px) {
            .feature-card-feature-card {
              flex-direction: row;
            }
            .feature-card-container {
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .feature-card-container {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

FeatureCard.defaultProps = {
  rootClassName: '',
  description: 'description',
  title: 'title',
}

FeatureCard.propTypes = {
  rootClassName: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
}

export default FeatureCard
