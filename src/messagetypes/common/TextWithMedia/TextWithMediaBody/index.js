/* eslint-disable camelcase */
import React from 'react'
import PropTypes from 'prop-types'
import Button from 'antd/lib/button'
import Spin from 'antd/lib/spin'
import FullScreen from 'react-icons/lib/md/fullscreen'
import CloseIcon from 'react-icons/lib/md/close'

import styles from './TextWithMediaBody.module.scss'

import Buttons from '../../../../components/buttons'
import HtmlText from '../../../../components/HtmlText'

class TextWithMediaBody extends React.PureComponent {
  state = {
    show_overlay: false,
    video_iframe_loading: true,
    selectedIndex: -1
  }

  showOverlay = () => {
    const { img_popup_disable, onImageRedirect, payload } = this.props
    if (payload.imageRedirectUrl) {
      window.open(payload.imageRedirectUrl)
      if (onImageRedirect) {
        onImageRedirect({
          type: this.props.message.type,
          imageRedirectUrl: payload.imageRedirectUrl
        })
      }
    } else if (!img_popup_disable) {
      this.setState({ show_overlay: true })
    }
  }

  closeOverlay = () => {
    this.setState({ show_overlay: false })
    const {video_iframe_loading} = this.state
    if (!video_iframe_loading) this.setState({video_iframe_loading: true})
  }

  handleEndVideoLoading = () => {
    this.setState({ video_iframe_loading: false })
  }

  render() {
    const {
      btn_disabled,
      message,
      handleMsgBtnClick,
      btn_hidden,
      default_btn_display_count,
      img_popup_disable,
      payload,
      showless,
      image_preview,
      showmore
    } = this.props
    const { selectedIndex, show_overlay, video_iframe_loading } = this.state

    return (
      <div
        className={`${styles.textWithMediaContainer} ${styles.ie10upTextWithMediaContainer}`}
      >
        {!img_popup_disable && show_overlay && (
          <div
            className={`ori-flex-row ori-flex-jc ori-flex-ac ori-align-full ${styles.previewOverlayContainer}`}
          >
            <div className='ori-bg-white ori-relative'>
              {payload.imageUrl && (
                <img
                  src={payload.imageUrl}
                  alt=''
                  style={{ maxWidth: '100%', maxHeight: '70vh' }}
                />
              )}
              {payload.url && (
                <div className='ori-relative ori-display-grid'>
                  <iframe
                    onLoad={this.handleEndVideoLoading}
                    title='video-message'
                    src={payload.url}
                    frameBorder='0'
                    allow='autoplay; encrypted-media'
                    allowFullScreen
                    style={{...(payload.overlayIframeStyle)}}
                  />
                  {video_iframe_loading && (
                    <div className={styles.overlayIframeLoading}>
                      <Spin dotSize={40} />
                    </div>
                  )}
                </div>
              )}
              <div className='ori-lr-pad-10'>

                {!image_preview.hidePreviewContent && payload.title && payload.title.trim().length > 0 && (
                  <p
                    className={`${styles.title} ori-font-default ori-mt-title`}
                  >
                    {payload.title}
                  </p>
                )}
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
          </div>
        )}
        {payload.url && payload.url.trim().length > 0 && (
          <div className='videoContainer ori-relative'>
            <iframe
              title='video-message'
              className='ori-full-width'
              src={payload.url}
              frameBorder='0'
              allow='autoplay; encrypted-media'
              allowFullScreen
            />
            {payload.showOverlayButton && (
              <div onClick={this.showOverlay} className='ori-absolute ori-align-top ori-align-right ori-r-pad-5 ori-t-pad-5 ori-cursor-ptr'>
                {payload.overlayButtonIcon ? (
                  <payload.overlayButtonIcon />
                ) : (
                  <FullScreen className={styles.overlayButton} />
                )}
              </div>
            )}
          </div>
        )}
        {payload.imageUrl && payload.imageUrl.trim().length > 0 && (
          <img
            src={payload.imageUrl}
            alt=''
            className='ori-b-mrgn-5 ori-cursor-ptr ori-full-width oriTextWithMediaImage'
            onClick={this.showOverlay}
          />
        )}
        {payload.title && (
          <HtmlText
            textClass={`${styles.title} ori-mt-title`}
            text={payload.title}
            isHtml={payload.containsHtmlTitle}
          />
        )}
        {payload.subtitle && (
          <HtmlText
            text={payload.subtitle}
            isHtml={payload.containsHtmlSubtitle}
          />
        )}
        {payload.accordian &&
          payload.accordian.map((item, index) => {
            return (
              <div
                className='ori-border-light ori-border-radius-3 ori-b-mrgn-5'
                key={index}
              >
                <div
                  className='ori-tb-pad-5 ori-lr-pad-10 ori-bg-card ori-cursor-ptr ori-font-bold'
                  onClick={() =>
                    this.setState({
                      selectedIndex: selectedIndex === index ? -1 : index
                    })
                  }
                >
                  <HtmlText text={item.title} isHtml={item.containsHtmlTitle} />
                </div>
                {index === selectedIndex && (
                  <div className='ori-animated ori-fade-in ori-lr-pad-10 ori-tb-pad-5'>
                    <HtmlText
                      text={item.description}
                      isHtml={item.containsHtmlDescription}
                    />
                  </div>
                )}
              </div>
            )
          })}
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
        {payload.footer && (
          <div dangerouslySetInnerHTML={{ __html: payload.footer }} />
        )}
      </div>
    )
  }
}

TextWithMediaBody.propTypes = {
  payload: PropTypes.object.isRequired,
  message: PropTypes.object.isRequired,
  handleMsgBtnClick: PropTypes.func,
  img_popup_disable: PropTypes.bool,
  btn_disabled: PropTypes.bool,
  btn_hidden: PropTypes.bool,
  default_btn_display_count: PropTypes.number,
  onImageRedirect: PropTypes.func,
  showmore: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  showless: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  image_preview: PropTypes.object
}

TextWithMediaBody.defaultProps = {
  btn_disabled: false,
  btn_hidden: false,
  img_popup_disable: false,
  default_btn_display_count: 4,
  image_preview: {},
}

export default TextWithMediaBody
