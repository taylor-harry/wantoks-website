import React from 'react'
import PropTypes from 'prop-types'

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map((item) => (
      <div key={item.text} className="column is-6">
        <section className="section" style={{ backgroundColor: `#f7d9cc`, borderRadius: `10px` }}>
          <div className="has-text-centered">
            <h3 style={{ color: `black` }}>{item.title}</h3>
          </div>
          <p style={{ fontSize: `14px` }}>{item.text}</p>
          <a href={item.link} target="_blank" rel="noreferrer" style={{
            fontWeight: `bold`,
            color: `white`,
            borderWidth: `1px`,
            borderStyle: `solid`,
            backgroundColor: `#333333`,
            borderColor: `#333333`,
            borderRadius: `5px`,
            padding: `5px`,
            marginLeft: `auto`,
            marginRight: `auto`,
            display: `block`,
            textAlign: `center`

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
