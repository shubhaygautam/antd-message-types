/* eslint-disable camelcase */
import React from 'react'
import PropTypes from 'prop-types'
import Tooltip from 'antd/lib/tooltip'

import { linkify, isEmptyObject } from '../../../../data/config/utils'

import styles from './TextMessageBody.module.scss'

class TextMessageBody extends React.PureComponent {
  state = {
    tooltip_visible: false
  }

  handleTextClick = () => {
    const { message, show_nlp_snapshot, editMessageNLPSnapshot } = this.props
    if (
      editMessageNLPSnapshot &&
      show_nlp_snapshot &&
      message.NLPSnapshot &&
      !isEmptyObject(message.NLPSnapshot)
    ) {
      editMessageNLPSnapshot(message)
    }
  }

  showTooltip = () => {
    this.setState({ tooltip_visible: true })
  }

  hideTooltip = () => {
    this.setState({ tooltip_visible: false })
  }

  renderHighLightedText = (text, entity, key) => {
    const start = text.substr(0, entity.startIndex)
    const value = text.substr(
      entity.startIndex,
      entity.endIndex - entity.startIndex + 1
    )
    const end = text.substr(entity.endIndex + 1)
    return (
      <div key={key} className={styles.overlayContainer}>
        <span>{start}</span>
        <Tooltip
          overlayClassName='entityTooltip'
          title={entity.type}
          placement={
            key % 3 === 0
              ? 'bottomRight'
              : key % 3 === 1
                ? 'topRight'
                : 'bottomLeft'
          }
          visible={this.state.tooltip_visible}
        >
          <span
            className={`default-entity entity-${key}`}
            style={{ opacity: '0.3' }}
          >
            {value}
          </span>
        </Tooltip>
        <span>{end}</span>
      </div>
    )
  }

  render() {
    const { message, show_nlp_snapshot, disable_html_parser, payload } = this.props
    const intent_visibility =
      show_nlp_snapshot &&
      message.NLPSnapshot &&
      !isEmptyObject(message.NLPSnapshot)
    const msgText =
      message.containsHTML || disable_html_parser
        ? payload.text
        : linkify(payload.text)
    return (
      <div
        className={styles.textMessageContainer}
        onMouseOver={this.showTooltip}
        onMouseOut={this.hideTooltip}
      >
        <div
          className={`${styles.messageWrapper} ${
            intent_visibility ? styles.cursorPointer : ''
          } ${!message.containsHTML ? styles.WSPreWrap : ''}`}
          onClick={this.handleTextClick}
        >
          {disable_html_parser ? (
            msgText
          ) : (
            <span dangerouslySetInnerHTML={{ __html: msgText }} />
          )}
        </div>
        {!message.containsHtml &&
          intent_visibility &&
          message.NLPSnapshot.entitySnapshot &&
          message.NLPSnapshot.entitySnapshot.length > 0 &&
          message.NLPSnapshot.entitySnapshot.map((entity, index) => {
            return this.renderHighLightedText(
              payload.text,
              entity,
              index
            )
          })}
      </div>
    )
  }
}

TextMessageBody.propTypes = {
  payload: PropTypes.object.isRequired,
  message: PropTypes.object.isRequired,
  show_nlp_snapshot: PropTypes.bool,
  editMessageNLPSnapshot: PropTypes.func,
  disable_html_parser: PropTypes.bool
}

TextMessageBody.defaultProps = {
  show_nlp_snapshot: false,
  disable_html_parser: false
}

export default TextMessageBody
