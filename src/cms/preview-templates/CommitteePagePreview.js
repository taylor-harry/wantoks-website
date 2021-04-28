import React from 'react'
import PropTypes from 'prop-types'
import { CommitteePageTemplate } from '../../templates/committee-page'

const CommitteePagePreview = ({ entry, widgetFor }) => (
  <CommitteePageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

CommitteePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default CommitteePagePreview
