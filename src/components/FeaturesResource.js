import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from './PreviewCompatibleImage'

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map((item) => (
      <div key={item.text} className="column is-6">
        <section className="section" style={{backgroundColor: `orange`, borderRadius:`10px`}}>
          <div className="has-text-centered">
            <h3 style={{color:`black`}}>{item.title}</h3>
          </div>
          <p style={{fontSize:`14px`}}>{item.text}</p>
          <a href={item.link} target="_blank" style={{
            fontWeight: `bold`,
            color:`white`,
            borderWidth:`1px`,
            borderStyle: `solid`,
            backgroundColor: `#333333`,
            borderColor: `#333333`,
            borderRadius:`5px`,
            padding: `5px`
          }}>Learn more</a>
        </section>
      </div>
    ))}
  </div>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
      link: PropTypes.string,
    })
  ),
}

export default FeatureGrid
