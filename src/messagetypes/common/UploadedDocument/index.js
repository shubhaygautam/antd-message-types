/* eslint-disable camelcase */
import React from 'react'
import PropTypes from 'prop-types'

import MessageWrapper from '../../../components/MessageWrapper'
import UploadedDocumentBody from './UploadedDocumentBody'

const UploadedDocument = props => (
  <MessageWrapper component={UploadedDocumentBody} {...props} />
)

UploadedDocument.propTypes = {
  message: PropTypes.object.isRequired,
  image_preview: PropTypes.object
}

UploadedDocument.defaultProps = {
  image_preview: {},
}

export { UploadedDocument }
