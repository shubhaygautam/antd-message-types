/* eslint-disable camelcase */
import React from 'react'
import PropTypes from 'prop-types'
import Carousel from 'antd/lib/carousel'
import Button from 'antd/lib/button'
import CloseIcon from 'react-icons/lib/md/close'
import Tag from 'antd/lib/tag'

import styles from './CarouselWithButtonsBody.module.scss'

import Buttons from '../../../../components/buttons'
import HtmlText from '../../../../components/HtmlText'
import { OverflowWrapper } from '../../OverflowWrapper'

import { blurButtonAfterClick } from '../../../../data/config/utils'

class CarouselWithButtonsBody extends React.PureComponent {
  state = {
    show_overlay: false,
    selected_carousel_item: null,
    selected_option_indexes: {},
    isExpanded: false,
    currentSlide: 0
  };

  componentDidMount() {
    const { payload } = this.props
    if (payload.selectable) {
      const indexes = {}
      payload.options.forEach((item, index) => {
        indexes[index] = !!item.selected
      })
      this.setState({ selected_option_indexes: indexes })
    }
  }

  handleOverFlowExpansion = () => {
    this.setState({isExpanded: true})
  }

  handleSlideChange = (current) => {
    this.setState({ currentSlide: current })
  }

  handleOptionSelection = index => {
    const { payload } = this.props
    this.setState(prev => ({
      selected_option_indexes: payload.multiSelect
        ? {
          ...prev.selected_option_indexes,
          [index]: !prev.selected_option_indexes[index]
        }
        : { [index]: !prev.selected_option_indexes[index] }
    }))
  };

  handleSubmitSelectedOptions = () => {
    const { payload, message, onSubmit } = this.props
    const { selected_option_indexes } = this.state
    if (payload.selectable) {
      let selectedData = []
      let text = ''
      let updatedMessage = JSON.parse(JSON.stringify(message))
      payload.options.forEach((item, index) => {
        if (updatedMessage.payload[0]) {
          updatedMessage.payload[0].options[index].selected = !!selected_option_indexes[index]
        } else {
          updatedMessage.payload.options[index].selected = !!selected_option_indexes[index]
        }
        if (selected_option_indexes[index]) {
          selectedData.push(item)
          let html = `<div class='ori-flex-row ori-pad-5'>
                        <img class='ori-box-70 ori-r-mrgn-10' src='${item.mediaUrl}' alt='item' />
                        <div class=''>
                          <p class='ori-font-bold'>${item.title}</p>
                          <p class='ori-font-light'>${item.subtitle}</p>
                        </div>
                      </div>`
          text = `${text}${html}`
        }
      })

      if (selectedData.length > 0) {
        const data = {
          selectedData,
          relayData: payload.relayData,
          text,
          containsHTML: true
        }
        onSubmit(data, updatedMessage)
      }
    }
  };

  closeOverlay = () => {
    this.setState({
      show_overlay: false,
      selected_carousel_item: null
    })
  };

  showCarouselItem = selected_carousel_item => {
    const { img_popup_disable, onImageRedirect } = this.props
    if (selected_carousel_item.imageRedirectUrl) {
      window.open(selected_carousel_item.imageRedirectUrl)
      if (onImageRedirect) {
        onImageRedirect({
          type: this.props.message.type,
          imageRedirectUrl: selected_carousel_item.imageRedirectUrl
        })
      }
    } else if (!img_popup_disable) {
      this.setState({
        show_overlay: true,
        selected_carousel_item
      })
    }
  };

  handleGetOuterButtons = () => {
    const { payload } = this.props
    const { currentSlide } = this.state
    return (payload.options && payload.options[currentSlide] && payload.options[currentSlide].outerButtons) || []
  }

  renderPreviewOverlay = () => {
    const { show_overlay, selected_carousel_item } = this.state
    const { img_popup_disable, image_preview } = this.props
    if (!img_popup_disable && show_overlay && selected_carousel_item) {
      return (
        <div
          className={`ori-flex-row ori-flex-jc ori-flex-ac ori-align-full ${styles.previewOverlayContainer}`}
        >
          <div className='ori-bg-white ori-relative'>
            <img
              src={selected_carousel_item.mediaUrl}
              alt=''
              style={{ width: '100%', maxHeight: '70vh' }}
            />
            {!image_preview.hidePreviewContent &&
            <div className='ori-l-mrgn-5 ori-t-mrgn-5'>
              {selected_carousel_item.title &&
              selected_carousel_item.title.trim().length > 0 && (
                <HtmlText
                  textClass='ori-no-b-mrgn ori-font-bold ori-lr-pad-10 ori-capitalize ori-word-wrap ori-word-break'
                  text={selected_carousel_item.title}
                  isHtml={selected_carousel_item.containsHtmlTitle}
                />
              )}
              {selected_carousel_item.subtitle &&
              selected_carousel_item.subtitle.trim().length > 0 && (
                <HtmlText
                  textClass='ori-t-mrgn-3 ori-no-b-mrgn ori-lr-pad-10 ori-capitalize ori-word-wrap ori-word-break'
                  text={selected_carousel_item.subtitle}
                  isHtml={selected_carousel_item.containsHtmlSubtitle}
                />
              )}
            </div>
            }
            {image_preview.showPreviewCrossIcon
              ? <Button size='small' className={`${styles.previewClose} ori-image-preview-icon`} icon={<CloseIcon />} onClick={this.closeOverlay} />
              : <div className='ori-flex-row ori-flex-jc ori-pad-10'>
                <Button type='danger' size='small' className='ori-image-preview-btn' onClick={this.closeOverlay}>
                  Close
                </Button>
              </div>
            }
          </div>
        </div>
      )
    }
  };

  renderCarouselImage = carousel_item => {
    const { display_type } = this.props
    if (display_type === 'fixed') {
      return (
        <div
          className={styles.imageContainer}
          style={{
            backgroundImage: `url(${carousel_item.mediaUrl})`
          }}
          onClick={() => this.showCarouselItem(carousel_item)}
        />
      )
    }
    if (display_type === 'actual') {
      return (
        <div className='ori-carousel-img-container'>
          <img
            src={carousel_item.mediaUrl}
            alt=''
            className='ori-cursor-ptr ori-full-width'
            onClick={() => this.showCarouselItem(carousel_item)}
          />
        </div>
      )
    }
    return (
      <img
        src={carousel_item.mediaUrl}
        alt=''
        className='ori-cursor-ptr ori-full-width'
        style={{ height: '200px' }}
        onClick={() => this.showCarouselItem(carousel_item)}
      />
    )
  };

  render() {
    const {
      btn_disabled,
      handleMsgBtnClick,
      message,
      btn_hidden,
      default_btn_display_count,
      payload,
      showmore,
      showless
    } = this.props
    const { selected_option_indexes, isExpanded } = this.state

    return (
      <div className='ori-relative ori-word-break ori-mt-carouselWithButtonsContainer'>
        {this.renderPreviewOverlay()}
        {payload && payload.title && (
          <HtmlText
            textClass='ori-no-t-mrgn ori-no-b-mrgn ori-font-bold ori-capitalize-first ori-mt-title'
            text={payload.title}
            isHtml={payload.containsHtmlTitle}
          />
        )}
        {payload && payload.subtitle && (
          <HtmlText
            textClass='ori-no-b-mrgn ori-no-t-mrgn ori-mt-subtitle'
            text={payload.subtitle}
            isHtml={payload.containsHtmlSubtitle}
          />
        )}
        {payload && payload.options && payload.options.length > 0 && (
          <Carousel
            className={`ori-mt-CarouselContainer ${styles.carouselContainer}`}
            arrows={true}
            infinite={!payload.disableLoop}
            dots={!payload.disableSliderDots}
            afterChange={this.handleSlideChange}
          >
            {payload.options.map((carousel_item, index) => {
              return (
                <OverflowWrapper key={index} {...payload.overflowWrapperProps} isExpanded={isExpanded} handleExpand={this.handleOverFlowExpansion}>
                  <div
                    className={`carouselItem ${styles.carouselItem} ${
                      selected_option_indexes[index]
                        ? 'carouselItemSelected'
                        : ''
                    }`}
                    style={payload.carouselStyle}
                    key={index}
                  >
                    {carousel_item.mediaType &&
                      carousel_item.mediaUrl &&
                      carousel_item.mediaType === 'video' &&
                      carousel_item.mediaUrl.trim().length > 0 && (
                      <div className='videoContainer'>
                        <iframe
                          title='video-message'
                          className='ori-full-width'
                          src={carousel_item.mediaUrl}
                          frameBorder='0'
                          allow='autoplay; encrypted-media'
                          allowFullScreen
                        />
                      </div>
                    )}
                    {carousel_item.mediaType &&
                      carousel_item.mediaUrl &&
                      carousel_item.mediaType === 'image' &&
                      carousel_item.mediaUrl.trim().length > 0 &&
                      this.renderCarouselImage(carousel_item)}
                    {carousel_item.title && (
                      <HtmlText
                        text={carousel_item.title}
                        isHtml={carousel_item.containsHtmlTitle}
                        textClass={`ori-t-mrgn-3 ori-no-b-mrgn ori-font-bold ori-lr-pad-10 ori-word-wrap ori-word-break ori-mt-title ${
                          payload.selectable
                            ? 'ori-carousel-selectable-title'
                            : 'ori-carousel-title'
                        }`}
                      />
                    )}
                    {carousel_item.subtitle && (
                      <HtmlText
                        text={carousel_item.subtitle}
                        isHtml={carousel_item.containsHtmlSubtitle}
                        textClass={`ori-no-b-mrgn ori-lr-pad-10 ${
                          payload.selectable
                            ? 'ori-carousel-selectable-subtitle'
                            : 'ori-carousel-subtitle'
                        }`}
                      />
                    )}
                    {payload.selectable && (
                      <Button
                        size='small'
                        className={`ori-btn-carousel-select-option ${
                          selected_option_indexes[index]
                            ? 'ori-btn-carousel-item-selected'
                            : 'ori-btn-carousel-item'
                        }`}
                        btn_disabled={btn_disabled}
                        onClick={(e) => {
                          this.handleOptionSelection(index)
                          blurButtonAfterClick(e)
                        }}
                      >
                        {selected_option_indexes[index] ? 'Selected' : 'Select'}
                      </Button>
                    )}
                    {carousel_item.buttons && carousel_item.buttons.length > 0 && (
                      <Buttons
                        // className='ori-lr-pad-10'
                        buttons={carousel_item.buttons}
                        display_count={
                          carousel_item.btnDisplayCount
                            ? carousel_item.btnDisplayCount
                            : default_btn_display_count
                        }
                        message={message}
                        handleMsgBtnClick={handleMsgBtnClick}
                        btn_disabled={btn_disabled}
                        showmore={showmore}
                        showless={showless}
                      />
                    )}
                    {carousel_item.tag && carousel_item.tag.text && (
                      <Tag className='oriCarouselTagContainer' {...carousel_item.tag.props}>
                        {carousel_item.tag.text}
                      </Tag>
                    )}
                  </div>
                </OverflowWrapper>
              )
            })}
          </Carousel>
        )}
        {payload.showSlideNumbers && (
          <div className={`ori-carousel-slide-number-container ${styles.slideNumberContainer}`}>
            <span className='ori-slide-number-numerator'>{this.state.currentSlide + 1}/</span>
            <span className='ori-slide-number-denominator'>{payload.options.length}</span>
          </div>
        )}
        <Buttons
          className='carouselCommonBtnContainer'
          buttons={this.handleGetOuterButtons()}
          display_count={
            payload.options && payload.options[this.state.currentSlide] && payload.options[this.state.currentSlide].outerBtnDisplayCount
              ? payload.options[this.state.currentSlide].outerBtnDisplayCount
              : default_btn_display_count
          }
          message={message}
          handleMsgBtnClick={handleMsgBtnClick}
          btn_disabled={btn_disabled}
          showmore={showmore}
          showless={showless}
        />

        {payload.selectable && (
          <Button
            size='small'
            className='ori-carousel-btn-submit'
            disabled={btn_disabled}
            onClick={(e) => {
              this.handleSubmitSelectedOptions(e)
              blurButtonAfterClick(e)
            }}
          >
            {payload.submitText ? payload.submitText : 'Submit'}
          </Button>
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

CarouselWithButtonsBody.propTypes = {
  image_preview: PropTypes.object,
  payload: PropTypes.object.isRequired,
  message: PropTypes.object.isRequired,
  handleMsgBtnClick: PropTypes.func,
  btn_disabled: PropTypes.bool,
  btn_hidden: PropTypes.bool,
  display_type: PropTypes.string,
  img_popup_disable: PropTypes.bool,
  default_btn_display_count: PropTypes.number,
  onImageRedirect: PropTypes.func,
  onSubmit: PropTypes.func,
  showmore: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  showless: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  image_preview: PropTypes.object,
}

CarouselWithButtonsBody.defaultProps = {
  btn_disabled: false,
  btn_hidden: false,
  img_popup_disable: false,
  default_btn_display_count: 4,
  image_preview: {}
}

export default CarouselWithButtonsBody
