import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from './PreviewCompatibleImage'

const FeatureGridWidget = ({ gridItems }) => (
  <div className="columns is-multiline ">
    {gridItems.map((item) => (
      <div key={item.text} className="column is-4 ">
        <section className="section" style={{ backgroundColor: '#333333', padding: `20px`, borderRadius: `10px` }}>
          <div className="has-text-centered">
            <div
              style={{
                width: '100%',
                minWidth: `180px`,
                display: 'inline-block',
              }}
            >
              <PreviewCompatibleImage imageInfo={item} />
            </div>
          </div>
          <p style={{
            fontWeight: `bold`,
            color: `#FFFFFF`,
            borderWidth: `1px`,
            borderStyle: `solid`,
            borderColor: `#f40`,
            borderRadius: `5px`,
            padding: `5px`,
            width: `auto`,
            margin: `0 auto`
          }} className="has-text-centered">{item.header}</p>
          <p style={{
            fontWeight: `bold`,
            color: `#FFFFFF`,
            padding: `5px`,
            width: `auto`,
            margin: `0 auto`
          }} className="has-text-centered">{item.text}</p>
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
