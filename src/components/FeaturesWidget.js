import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from './PreviewCompatibleImage'

const FeatureGridWidget = ({ gridItems }) => (
  <div className="columns is-multiline ">
    {gridItems.map((item) => (
      <div key={item.text} className="column is-6 ">
        <section className="section">
          <div style={{backgroundColor:'#080808', padding: `20px`, display:`inline-block`, borderRadius:`10px` }}>
          <div className="has-text-centered">
            <div
              style={{
                width: '240px',
                display: 'inline-block',
              }}
            >
              <PreviewCompatibleImage imageInfo={item} />
            </div>
          </div>
          <p style={{color:`white`}} className="has-text-centered">{item.header}</p>
          <p style={{color:`white`}} className="has-text-centered">{item.text}</p>
          </div>
        </section>
      </div>
    ))}
  </div>
)

FeatureGridWidget.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      header: PropTypes.string,
      text: PropTypes.string,
    })
  ),
}

export default FeatureGridWidget
