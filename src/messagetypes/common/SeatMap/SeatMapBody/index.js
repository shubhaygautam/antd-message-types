/* eslint-disable camelcase */
import React from 'react'
import PropTypes from 'prop-types'
import Tooltip from 'antd/lib/tooltip'
import Button from 'antd/lib/button'
import Checkbox from 'antd/lib/checkbox'
import CloseIcon from 'react-icons/lib/md/close'
import SeatIcon from 'react-icons/lib/md/event-seat'

import Buttons from '../../../../components/buttons'
import Select from 'antd/lib/select'

import { blurButtonAfterClick } from '../../../../data/config/utils'

class SeatMapBody extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      selectedPassenger: '',
      selectedSeats: props.payload.selectedSeats,
      randomChecked: '',
      submitButtonText: props.payload.submitButtonText
    }
  }

  handleSeatSelection = (seat, passenger) => {
    const { disabled } = this.props
    var reserved = false
    if (seat.isAllowed && !disabled) {
      this.state.selectedSeats.map((rseat) => {
        if (seat.name === rseat.seatNo) {
          reserved = true
        }
      })
      this.state.selectedSeats.map((rseat) => {
        if (rseat.name === passenger && !reserved) {
          rseat.seatNo = seat.name
          rseat.cost = seat.cost
          rseat.type = seat.type
          rseat.color = seat.color
          rseat.isAllowed = seat.isAllowed
          rseat.status = seat.status
        }
      })
      this.setState(prevState => ({
        selectedSeats: [
          ...prevState.selectedSeats
        ],
        submitButtonText: 'Proceed for all',
        randomChecked: false
      }))
    }
  }

  handleSubmit = () => {
    const { message, onSubmit } = this.props
    const {selectedSeats} = this.state
    const list = []
    selectedSeats.map((item) => {
      var obj = {}
      obj.label = item.name
      obj.value = item.seatNo + ' ' + item.cost
      list.push(obj)
    })
    if (selectedSeats.length > 0) {
      const data = {
        relayData: message.payload.relayData,
        selectedData: this.state.selectedSeats,
        list
      }
      onSubmit(data, message)
    }
  }

  getInitials = (name) => {
    var parts = name.split(' ')
    var initials = ''
    for (var i = 0; i < parts.length; i++) {
      if (parts[i].length > 0 && parts[i] !== '') {
        initials += parts[i][0]
      }
    }
    return initials
  }

  randomOnChange = (e) => {
    this.setState({
      randomChecked: e.target.checked,
      submitButtonText: 'Proceed to All'
    })
    if (e.target.checked === true) {
      this.state.selectedSeats.map((rseat) => {
        if (rseat.name === this.state.selectedPassenger) {
          rseat.seatNo = ''
          rseat.cost = ''
          rseat.random = true
          rseat.type = ''
          rseat.color = ''
          rseat.isAllowed = ''
          rseat.status = ''
        }
      })
    } else {
      this.state.selectedSeats.map((rseat) => {
        if (rseat.name === this.state.selectedPassenger) {
          rseat.random = false
        }
      })
    }
  }

  handleClear = () => {
    this.state.selectedSeats.map((rseat) => {
      if (rseat.name === this.state.selectedPassenger) {
        rseat.seatNo = ''
        rseat.cost = ''
        rseat.type = ''
        rseat.color = ''
        rseat.isAllowed = ''
        rseat.status = ''
      }
      this.setState(prevState => ({
        selectedSeats: [
          ...prevState.selectedSeats
        ]
      }))
    })
  }

  handleChange = (value) => {
    this.setState({
      selectedPassenger: value,
      randomChecked: false
    })
    this.state.selectedSeats.map((rseat) => {
      if (rseat.name === value && rseat.random === true) {
        this.setState({
          randomChecked: true
        })
      }
    })
  }

  renderSeats = (rseats, seat) => {
    for (let rseat of rseats) {
      if (rseat.seatNo === seat.name) {
        return (
          <div
            style={{
              width: 25,
              height: 25
            }}
            className={`ori-flex ori-flex-center ori-border-radius-3 ${
              rseat.name === this.state.selectedPassenger
                ? 'ori-seat-selected'
                : 'ori-seat-default'
            }`}
          >
            <p className='ori-font-default ori-font-xxs ori-font-bold'>{this.getInitials(rseat.name)}</p>
          </div>
        )
      }
    }
    if (seat.isAllowed === true) {
      return (
        <SeatIcon />
      )
    } else {
      return (
        <CloseIcon />
      )
    }
  }

  render() {
    const {
      btn_disabled,
      message,
      handleMsgBtnClick,
      btn_hidden,
      default_btn_display_count,
      payload,
      disabled,
      showless,
      showmore
    } = this.props

    return (
      <div className='ori-word-break ori-mt-SeatMapContainer'>
        {payload.title && (
          <div
            className='ori-font-bold ori-no-b-mrgn ori-font-sm ori-word-break-all'
            dangerouslySetInnerHTML={{ __html: payload.title }}
          />
        )}
        {payload.subtitle && (
          <div
            className='ori-font-13 ori-no-b-mrgn ori-word-break-all'
            dangerouslySetInnerHTML={{ __html: payload.subtitle }}
          />
        )}
        <div className='ori-flex-row ori-b-mrgn-10'>
          {payload.passengerSelect && payload.passengerSelect.options.length > 0 && (
            <Select
              className='ori-full-width'
              size='small'
              {...payload.passengerSelect}
              getPopupContainer={triggerNode =>
                triggerNode.parentNode
              }
              onChange={this.handleChange}
            />)}
          {payload.clearSelection && (
            <Button
              onClick={this.handleClear}
              size='small'
              className='ori-l-mrgn-5 ori-btn-clear'
            >
              Clear
            </Button>)}
        </div>
        {payload.seatArrangement && payload.seatArrangement.length > 0 && (
          <React.Fragment>
            <p className='ori-text-center ori-font-xxs ori-b-mrgn-5 ori-t-mrgn-3'>
              <span className='ori-bg-default ori-font-bold ori-lr-pad-10 ori-border-radius-10 ori-tb-pad-3'>
                FRONT
              </span>
            </p>
            {payload.seatArrangement.map((row, index) => (
              <div key={index} className='ori-b-pad-5 ori-flex-row'>
                <div
                  className='ori-flex ori-flex-center'
                  style={{
                    height: 25,
                    width: 25
                  }}>
                  {row.rowName}
                </div>
                {row.seats.map((seat, cindex) => {
                  return (
                    <React.Fragment key={cindex}>
                      <Tooltip
                        placement='top'
                        mouseEnterDelay={1}
                        title={
                          <React.Fragment>
                            <span>Type: {seat.type}</span> <br />
                            <span>Seat Number: {seat.name} </span>
                            <br />
                            <span>Status: {seat.status}</span> <br />
                            {seat.isAllowed && <span>Cost: {seat.cost}</span>}
                          </React.Fragment>
                        }
                        destroyTooltipOnHide
                      >
                        <div
                          style={{
                            backgroundColor: seat.color,
                            opacity: seat.isAllowed && !disabled ? '' : '0.5',
                            marginRight: 3,
                            height: 25,
                            width: 25
                          }}
                          className={`ori-flex ori-flex-center ori-border-radius-3 ori-font-white ${
                            seat.isAllowed && !disabled
                              ? 'ori-cursor-ptr'
                              : 'ori-cursor-not-allowed'
                          }`}
                          onClick={() => this.handleSeatSelection(seat, this.state.selectedPassenger)}
                        >
                          {this.renderSeats(this.state.selectedSeats, seat)}
                        </div>
                      </Tooltip>
                      {seat.isNextGap && (
                        <div
                          className='ori-full-flex'
                          style={{
                            height: 25,
                            width: 30
                          }}
                        />
                      )}
                    </React.Fragment>
                  )
                })}
              </div>
            ))}
            {payload.randomSelection && (
              <div>
                <Checkbox
                  onChange={this.randomOnChange}
                  checked={this.state.randomChecked}
                  className='ori-r-mrgn-5'
                />
                <span>Randomly assign a seat</span>
              </div>)}
            <Button
              size='small'
              className='ori-t-mrgn-5 ori-btn-submit'
              style={{width: '270px'}}
              onClick={(e) => {
                this.handleSubmit(e)
                blurButtonAfterClick(e)
              }}
              block
            >
              {this.state.submitButtonText}
            </Button>
          </React.Fragment>
        )}
        {!btn_hidden && payload.buttons && payload.buttons.length > 0 && (
          <Buttons
            buttons={payload.buttons}
            display_count={
              payload.btnDisplayCount
                ? payload.btnDisplayCount
                : default_btn_display_count
            }
            message={message}
            btn_disabled={btn_disabled}
            handleMsgBtnClick={handleMsgBtnClick}
            showmore={showmore}
            showless={showless}
          />
        )}
      </div>
    )
  }
}

SeatMapBody.propTypes = {
  payload: PropTypes.object.isRequired,
  message: PropTypes.object.isRequired,
  handleMsgBtnClick: PropTypes.func,
  btn_disabled: PropTypes.bool,
  disabled: PropTypes.bool,
  btn_hidden: PropTypes.bool,
  default_btn_display_count: PropTypes.number,
  onSubmit: PropTypes.func,
  showmore: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  showless: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

SeatMapBody.defaultProps = {
  btn_disabled: false,
  btn_hidden: false,
  disabled: false,
  checkbox_disabled: false,
  default_btn_display_count: 4
}

export default SeatMapBody
