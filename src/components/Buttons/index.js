/* eslint-disable react/jsx-no-bind */
/* eslint-disable camelcase */
/* eslint-disable jsx-quotes */
/* eslint-disable react/no-did-update-set-state */
import React from 'react'
import PropTypes from 'prop-types'
import Button from 'antd/lib/button'

import styles from './Buttons.module.scss'

import { blurButtonAfterClick } from '../../data/config/utils'

class Buttons extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      show_all_buttons: false,
      display_buttons_count: props.display_count
    }
  }

  componentDidUpdate(prevProps) {
    const { display_count } = this.props
    if (prevProps.display_count !== display_count) {
      this.setState({ display_buttons_count: display_count })
    }
  }

  handleBtnClick = button => {
    const { handleMsgBtnClick, message } = this.props
    if (handleMsgBtnClick) handleMsgBtnClick({ button, message })
  };

  showAllButtons = () => {
    const { buttons } = this.props
    this.setState({
      show_all_buttons: true,
      display_buttons_count: buttons.length
    })
  };

  showLessButtons = () => {
    const { display_count } = this.props
    this.setState({
      show_all_buttons: false,
      display_buttons_count: display_count
    })
  };

  renderButtonIcon = (icon, iconStyle) => {
    if (!icon) return null
    return <div className={styles.buttonIconContainer} style={iconStyle} dangerouslySetInnerHTML={{__html: icon}} />
  }

  render() {
    const { btn_disabled, buttons, className, showmore, showless } = this.props
    const { display_buttons_count, show_all_buttons } = this.state
    return (
      <span
        className={`${className} buttonsContainer`}
      >
        {buttons.map((btn, index) => {
          if (index < display_buttons_count) {
            return (
              <Button
                key={index}
                icon={this.renderButtonIcon(btn.icon, btn.iconStyle)}
                size="small"
                className={`${
                  btn.displayType === 'paragraph'
                    ? 'ori-btn-paragraph'
                    : btn.displayType === 'secondary'
                      ? 'ori-btn-secondary'
                      : 'ori-btn-bubble-inner'
                } ${styles.button}`}
                block={btn.displayType === 'paragraph'}
                disabled={btn_disabled || btn.disabled}
                onClick={(e) => {
                  this.handleBtnClick.bind(this, btn)(e)
                  blurButtonAfterClick(e)
                }}
                {...btn.btnProps}
              >
                {btn.text}
              </Button>
            )
          }
        })}
        {!show_all_buttons && buttons.length > display_buttons_count && (
          <Button
            size="small"
            className={`ori-btn-bubble-inner ori-btn-showmore ${styles.button}`}
            onClick={this.showAllButtons}
          >
            {showmore}
          </Button>
        )}
        {show_all_buttons && (
          <Button
            size="small"
            className={`ori-btn-bubble-inner ori-btn-showless ${styles.button}`}
            onClick={this.showLessButtons}
          >
            {showless}
          </Button>
        )}
      </span>
    )
  }
}

Buttons.propTypes = {
  className: PropTypes.string,
  buttons: PropTypes.array,
  message: PropTypes.object,
  btn_disabled: PropTypes.bool,
  display_count: PropTypes.number,
  handleMsgBtnClick: PropTypes.func,
  showmore: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  showless: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

Buttons.defaultProps = {
  className: '',
  btn_disabled: false,
  display_count: 4,
  showmore: 'Show more',
  showless: 'Show less'
}

export default Buttons
