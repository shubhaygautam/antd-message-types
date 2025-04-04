'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var PropTypes = _interopDefault(require('prop-types'));
var Tooltip = _interopDefault(require('antd/lib/tooltip'));
var Button = _interopDefault(require('antd/lib/button'));
var Spin = _interopDefault(require('antd/lib/spin'));
var FullScreen = _interopDefault(require('react-icons/lib/md/fullscreen'));
var CloseIcon = _interopDefault(require('react-icons/lib/md/close'));
var Carousel = _interopDefault(require('antd/lib/carousel'));
var Tag = _interopDefault(require('antd/lib/tag'));
var Checkbox = _interopDefault(require('antd/lib/checkbox'));
var Upload = _interopDefault(require('antd/lib/upload'));
var UploadIcon = _interopDefault(require('react-icons/lib/md/cloud-upload'));
var FileIcon = _interopDefault(require('react-icons/lib/fa/file-o'));
var dayjs = _interopDefault(require('dayjs'));
var DatePicker = _interopDefault(require('antd/lib/date-picker'));
var Radio = _interopDefault(require('antd/lib/radio'));
var Rate = _interopDefault(require('antd/lib/rate'));
var Select = _interopDefault(require('antd/lib/select'));
var Input = _interopDefault(require('antd/lib/input'));
var customParseFormat = _interopDefault(require('dayjs/plugin/customParseFormat'));
var advancedFormat = _interopDefault(require('dayjs/plugin/advancedFormat'));
var localeData = _interopDefault(require('dayjs/plugin/localeData'));
var weekday = _interopDefault(require('dayjs/plugin/weekday'));
var weekOfYear = _interopDefault(require('dayjs/plugin/weekOfYear'));
var weekYear = _interopDefault(require('dayjs/plugin/weekYear'));
require('dayjs/locale/ar');
var SeatIcon = _interopDefault(require('react-icons/lib/md/event-seat'));
var PdfIcon = _interopDefault(require('react-icons/lib/md/picture-as-pdf'));
var ExcelIcon = _interopDefault(require('react-icons/lib/fa/file-excel-o'));
var TextIcon = _interopDefault(require('react-icons/lib/fa/file-text-o'));
var FileIcon$1 = _interopDefault(require('react-icons/lib/fa/file'));
var ImageIcon = _interopDefault(require('react-icons/lib/fa/image'));
var LoadingIcon = _interopDefault(require('react-icons/lib/md/rotate-right'));
var DownloadIcon = _interopDefault(require('react-icons/lib/md/file-download'));

var asyncToGenerator = function (fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new Promise(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          return Promise.resolve(value).then(function (value) {
            step("next", value);
          }, function (err) {
            step("throw", err);
          });
        }
      }

      return step("next");
    });
  };
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

var OverflowWrapper = function (_React$Component) {
  inherits(OverflowWrapper, _React$Component);

  function OverflowWrapper(props) {
    classCallCheck(this, OverflowWrapper);

    var _this = possibleConstructorReturn(this, (OverflowWrapper.__proto__ || Object.getPrototypeOf(OverflowWrapper)).call(this, props));

    _this.handleShowMoreAndLessClick = function () {
      _this.setState({
        expanded: true
      });
      _this.props.handleExpand();
    };

    _this.containerRef = React.createRef(null);
    _this.state = {
      childrenContentHeight: 0,
      expanded: false
    };
    return _this;
  }

  createClass(OverflowWrapper, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var enabled = this.props.enabled;

      if (enabled && this.containerRef.current) {
        this.setState({
          childrenContentHeight: this.containerRef.current.clientHeight
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          enabled = _props.enabled,
          containerHeight = _props.containerHeight,
          children = _props.children,
          showMoreChild = _props.showMoreChild,
          showMoreText = _props.showMoreText,
          isExpanded = _props.isExpanded;
      var _state = this.state,
          childrenContentHeight = _state.childrenContentHeight,
          expanded = _state.expanded;

      if (enabled && !isExpanded) {
        var isChildrenHeightGreater = childrenContentHeight > containerHeight;
        return React.createElement(
          React.Fragment,
          null,
          React.createElement(
            'div',
            {
              style: {
                overflow: 'hidden',
                height: expanded ? childrenContentHeight + 'px' : isChildrenHeightGreater ? containerHeight + 'px' : 'auto'
              }
            },
            React.createElement(
              'div',
              { ref: this.containerRef },
              children
            )
          ),
          isChildrenHeightGreater && !expanded && React.createElement(
            'span',
            { onClick: this.handleShowMoreAndLessClick },
            showMoreText ? React.createElement(
              'span',
              { className: 'ori-cursor-ptr ori-font-light ori-font-xs oriOverflowWrapperText' },
              showMoreText
            ) : showMoreChild
          )
        );
      }
      return children;
    }
  }]);
  return OverflowWrapper;
}(React.Component);

OverflowWrapper.propTypes = {
  enabled: PropTypes.bool,
  containerHeight: PropTypes.number,
  children: PropTypes.node,
  showMoreChild: PropTypes.node,
  showMoreText: PropTypes.string,
  isExpanded: PropTypes.bool,
  handleExpand: PropTypes.func
};

OverflowWrapper.defaultProps = {
  enabled: false,
  containerHeight: 250,
  children: null,
  showMoreText: '',
  isExpanded: false,
  handleExpand: function handleExpand() {},
  showMoreChild: React.createElement(
    'span',
    {
      className: 'ori-cursor-ptr ori-font-light ori-font-xs oriOverflowWrapperText',
      style: {
        textDecoration: 'underline',
        userSelect: 'none'
      }
    },
    'show more'
  )
};

var MessageWrapper = function MessageWrapper(_ref) {
  var message = _ref.message,
      preferLang = _ref.preferLang,
      ChildComponent = _ref.component,
      primaryMessageProps = _ref.primaryMessageProps,
      rest = objectWithoutProperties(_ref, ['message', 'preferLang', 'component', 'primaryMessageProps']);

  if (message.payload && Array.isArray(message.payload) && message.payload.length > 0) {
    return message.payload.map(function (item, index) {
      if (item.lang === preferLang || index === 0) {
        return React.createElement(
          React.Fragment,
          { key: index },
          index > 0 && React.createElement(
            'div',
            {
              className: 'ori-relative ori-tb-mrgn-5 ori-flex ori-flex-jc',
              style: {
                height: '16px'
              }
            },
            React.createElement('span', {
              className: 'ori-absolute ori-bg-default',
              style: {
                left: 0,
                right: 0,
                top: '50%',
                height: '1px',
                backgroundColor: '#e6e6e6'
              }
            }),
            React.createElement(
              'span',
              { className: 'ori-absolute ori-bg-default ori-lr-pad-5 ori-border-default ori-capitalize ori-border-radius-10 ori-font-xxs' },
              item.lang
            )
          ),
          React.createElement(ChildComponent, _extends({
            payload: item,
            message: message
          }, index === 0 && primaryMessageProps ? primaryMessageProps : {}, rest))
        );
      }
    });
  }

  return React.createElement(ChildComponent, _extends({
    payload: message.payload,
    message: message
  }, primaryMessageProps || {}, rest));
};

MessageWrapper.propTypes = {
  message: PropTypes.object.isRequired,
  component: PropTypes.func.isRequired,
  preferLang: PropTypes.string,
  primaryMessageProps: PropTypes.object
};

MessageWrapper.defaultProps = {
  component: null,
  preferLang: ''
};

/* eslint-disable no-undef */

var fileToBase64 = function fileToBase64(file) {
  return new Promise(function (resolve) {
    var reader = new FileReader();
    // Read file content on file loaded event
    reader.onload = function (event) {
      resolve(event.target.result);
    };
    // Convert data to base64
    reader.readAsDataURL(file);
  });
};

var linkify = function linkify(inputText) {
  var linkifiedText = inputText;

  // URLs starting with http://, https://, or ftp://
  var urlPattern = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
  linkifiedText = inputText.replace(urlPattern, '<a href="$1" target="_blank">$1</a>');

  // URLs starting with "www." (without // before it, or it'd re-link the ones done above).
  var pseudoUrlPattern = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
  linkifiedText = linkifiedText.replace(pseudoUrlPattern, '$1<a href="http://$2" target="_blank">$2</a>');

  // Change email addresses to mailto:: links.
  var emailPattern = /(([a-zA-Z0-9\-\_\.])+@[a-zA-Z\_]+?(\.[a-zA-Z]{2,6})+)/gim;
  linkifiedText = linkifiedText.replace(emailPattern, '<a href="mailto:$1">$1</a>');

  // Phone numbers to tel: links
  var phonePattern = /(\+?[0-9\s\-().]{7,15})/gim;
  linkifiedText = linkifiedText.replace(phonePattern, '<a href="tel:$1">$1</a>');
  return linkifiedText;
};

var isEmptyObject = function isEmptyObject(obj) {
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      return false;
    }
  }
  return true;
};

var isEmail = function isEmail(address) {
  var regex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
  return regex.test(address);
};

var validateField = function validateField(address, regexPattern) {
  var regex = new RegExp(regexPattern);
  return regex.test(address);
};

var getFileMimeType = function getFileMimeType(file) {
  return new Promise(function (resolve) {
    var filereader = new FileReader();
    filereader.onloadend = function (evt) {
      if (evt.target.readyState === FileReader.DONE) {
        var uint = new Uint8Array(evt.target.result);
        var bytes = [];
        uint.forEach(function (byte) {
          bytes.push(byte.toString(16));
        });
        var hex = bytes.join('').toUpperCase();
        resolve(getMimetype(hex));
      }
    };
    var blob = file.slice(0, 4);
    filereader.readAsArrayBuffer(blob);
  });
};

var getMimetype = function getMimetype(signature) {
  switch (signature) {
    case '89504E47':
      return 'image/png';
    case '47494638':
      return 'image/gif';
    case '25504446':
      return 'application/pdf';
    case 'FFD8FFDB':
    case 'FFD8FFE0':
    case 'FFD8FFE1':
      return 'image/jpeg';
    case '504B0304':
      return 'application/zip';
    default:
      return 'Unknown filetype';
  }
};
var formatSizeUnits = function formatSizeUnits(bytes) {
  var decimals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

  if (!+bytes) return '0 Bytes';
  var k = 1024;
  var dm = decimals < 0 ? 0 : decimals;
  var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  var i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
};

/**
 * Used to blur click event after the button is clicked
 * @param {*} e
 */
var blurButtonAfterClick = function blurButtonAfterClick(e) {
  var target = e.target;
  if (target && target.tagName !== 'BUTTON') target = target.parentElement;
  if (target && target.blur) target.blur();
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ".TextMessageBody-module_textMessageContainer__1nG-Y {\n  position: relative; }\n\n.TextMessageBody-module_messageWrapper__JknSg {\n  word-break: break-word; }\n\n.TextMessageBody-module_cursorPointer__1Oz_u {\n  cursor: pointer; }\n\n.TextMessageBody-module_WSPreWrap__3oG-a {\n  white-space: pre-wrap; }\n\n.TextMessageBody-module_overlayContainer__ojzGO {\n  position: absolute;\n  top: 0;\n  left: 0;\n  color: transparent;\n  pointer-events: none;\n  word-break: break-word; }\n";
var styles = { "textMessageContainer": "TextMessageBody-module_textMessageContainer__1nG-Y", "messageWrapper": "TextMessageBody-module_messageWrapper__JknSg", "cursorPointer": "TextMessageBody-module_cursorPointer__1Oz_u", "WSPreWrap": "TextMessageBody-module_WSPreWrap__3oG-a", "overlayContainer": "TextMessageBody-module_overlayContainer__ojzGO" };
styleInject(css);

/* eslint-disable camelcase */

var TextMessageBody = function (_React$PureComponent) {
  inherits(TextMessageBody, _React$PureComponent);

  function TextMessageBody() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, TextMessageBody);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = TextMessageBody.__proto__ || Object.getPrototypeOf(TextMessageBody)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      tooltip_visible: false
    }, _this.handleTextClick = function () {
      var _this$props = _this.props,
          message = _this$props.message,
          show_nlp_snapshot = _this$props.show_nlp_snapshot,
          editMessageNLPSnapshot = _this$props.editMessageNLPSnapshot;

      if (editMessageNLPSnapshot && show_nlp_snapshot && message.NLPSnapshot && !isEmptyObject(message.NLPSnapshot)) {
        editMessageNLPSnapshot(message);
      }
    }, _this.showTooltip = function () {
      _this.setState({ tooltip_visible: true });
    }, _this.hideTooltip = function () {
      _this.setState({ tooltip_visible: false });
    }, _this.renderHighLightedText = function (text, entity, key) {
      var start = text.substr(0, entity.startIndex);
      var value = text.substr(entity.startIndex, entity.endIndex - entity.startIndex + 1);
      var end = text.substr(entity.endIndex + 1);
      return React.createElement(
        'div',
        { key: key, className: styles.overlayContainer },
        React.createElement(
          'span',
          null,
          start
        ),
        React.createElement(
          Tooltip,
          {
            overlayClassName: 'entityTooltip',
            title: entity.type,
            placement: key % 3 === 0 ? 'bottomRight' : key % 3 === 1 ? 'topRight' : 'bottomLeft',
            visible: _this.state.tooltip_visible
          },
          React.createElement(
            'span',
            {
              className: 'default-entity entity-' + key,
              style: { opacity: '0.3' }
            },
            value
          )
        ),
        React.createElement(
          'span',
          null,
          end
        )
      );
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(TextMessageBody, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          message = _props.message,
          show_nlp_snapshot = _props.show_nlp_snapshot,
          disable_html_parser = _props.disable_html_parser,
          payload = _props.payload;

      var intent_visibility = show_nlp_snapshot && message.NLPSnapshot && !isEmptyObject(message.NLPSnapshot);
      var msgText = message.containsHTML || disable_html_parser ? payload.text : linkify(payload.text);
      return React.createElement(
        'div',
        {
          className: styles.textMessageContainer,
          onMouseOver: this.showTooltip,
          onMouseOut: this.hideTooltip
        },
        React.createElement(
          'div',
          {
            className: styles.messageWrapper + ' ' + (intent_visibility ? styles.cursorPointer : '') + ' ' + (!message.containsHTML ? styles.WSPreWrap : ''),
            onClick: this.handleTextClick
          },
          disable_html_parser ? msgText : React.createElement('span', { dangerouslySetInnerHTML: { __html: msgText } })
        ),
        !message.containsHtml && intent_visibility && message.NLPSnapshot.entitySnapshot && message.NLPSnapshot.entitySnapshot.length > 0 && message.NLPSnapshot.entitySnapshot.map(function (entity, index) {
          return _this2.renderHighLightedText(payload.text, entity, index);
        })
      );
    }
  }]);
  return TextMessageBody;
}(React.PureComponent);

TextMessageBody.propTypes = {
  payload: PropTypes.object.isRequired,
  message: PropTypes.object.isRequired,
  show_nlp_snapshot: PropTypes.bool,
  editMessageNLPSnapshot: PropTypes.func,
  disable_html_parser: PropTypes.bool
};

TextMessageBody.defaultProps = {
  show_nlp_snapshot: false,
  disable_html_parser: false
};

/* eslint-disable camelcase */

var TextMessage = function TextMessage(_ref) {
  var preferLang = _ref.preferLang,
      message = _ref.message,
      show_nlp_snapshot = _ref.show_nlp_snapshot,
      disable_html_parser = _ref.disable_html_parser,
      editMessageNLPSnapshot = _ref.editMessageNLPSnapshot;
  return React.createElement(MessageWrapper, {
    message: message,
    preferLang: preferLang,
    component: TextMessageBody,
    primaryMessageProps: {
      show_nlp_snapshot: show_nlp_snapshot,
      disable_html_parser: disable_html_parser,
      editMessageNLPSnapshot: editMessageNLPSnapshot
    }
  });
};

TextMessage.propTypes = {
  message: PropTypes.object.isRequired,
  show_nlp_snapshot: PropTypes.bool,
  editMessageNLPSnapshot: PropTypes.func,
  disable_html_parser: PropTypes.bool,
  preferLang: PropTypes.string
};

TextMessage.defaultProps = {
  show_nlp_snapshot: false,
  disable_html_parser: false
};

var css$1 = ".TextWithMediaBody-module_textWithMediaContainer__klUH8 {\n  word-break: break-word; }\n\n.TextWithMediaBody-module_previewOverlayContainer__2RwNR {\n  z-index: 9999999;\n  position: fixed;\n  flex: 1;\n  padding: 30px;\n  background-color: rgba(0, 0, 0, 0.2); }\n\n.TextWithMediaBody-module_title__wiuC3 {\n  margin-top: 0;\n  margin-bottom: 5px;\n  font-weight: 600; }\n\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  .TextWithMediaBody-module_ie10upTextWithMediaContainer__18kcd {\n    max-width: 265px; } }\n\n.TextWithMediaBody-module_overlayButton__28esb {\n  width: 30px;\n  height: 30px;\n  fill: white; }\n\n.TextWithMediaBody-module_overlayButton__28esb:hover {\n  filter: drop-shadow(0px 0px 4px black); }\n\n.TextWithMediaBody-module_overlayIframeLoading__2jW2T {\n  display: grid;\n  place-content: center;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  background: rgba(0, 0, 0, 0.2); }\n\n.TextWithMediaBody-module_previewClose__19eVU {\n  position: absolute !important;\n  top: -25px !important;\n  right: -25px !important;\n  border-radius: 50% !important; }\n";
var styles$1 = { "textWithMediaContainer": "TextWithMediaBody-module_textWithMediaContainer__klUH8", "previewOverlayContainer": "TextWithMediaBody-module_previewOverlayContainer__2RwNR", "title": "TextWithMediaBody-module_title__wiuC3", "ie10upTextWithMediaContainer": "TextWithMediaBody-module_ie10upTextWithMediaContainer__18kcd", "overlayButton": "TextWithMediaBody-module_overlayButton__28esb", "overlayIframeLoading": "TextWithMediaBody-module_overlayIframeLoading__2jW2T", "previewClose": "TextWithMediaBody-module_previewClose__19eVU" };
styleInject(css$1);

var css$2 = ".Buttons-module_button__3kQl1 {\n  white-space: normal !important;\n  height: auto !important; }\n\n.Buttons-module_buttonIconContainer__fmT5b {\n  display: inline-flex;\n  margin-right: 4px;\n  vertical-align: text-top; }\n";
var styles$2 = { "button": "Buttons-module_button__3kQl1", "buttonIconContainer": "Buttons-module_buttonIconContainer__fmT5b" };
styleInject(css$2);

/* eslint-disable react/jsx-no-bind */

var Buttons = function (_React$PureComponent) {
  inherits(Buttons, _React$PureComponent);

  function Buttons(props) {
    classCallCheck(this, Buttons);

    var _this = possibleConstructorReturn(this, (Buttons.__proto__ || Object.getPrototypeOf(Buttons)).call(this, props));

    _this.handleBtnClick = function (button) {
      var _this$props = _this.props,
          handleMsgBtnClick = _this$props.handleMsgBtnClick,
          message = _this$props.message;

      if (handleMsgBtnClick) handleMsgBtnClick({ button: button, message: message });
    };

    _this.showAllButtons = function () {
      var buttons = _this.props.buttons;

      _this.setState({
        show_all_buttons: true,
        display_buttons_count: buttons.length
      });
    };

    _this.showLessButtons = function () {
      var display_count = _this.props.display_count;

      _this.setState({
        show_all_buttons: false,
        display_buttons_count: display_count
      });
    };

    _this.renderButtonIcon = function (icon, iconStyle) {
      if (!icon) return null;
      return React.createElement('div', { className: styles$2.buttonIconContainer, style: iconStyle, dangerouslySetInnerHTML: { __html: icon } });
    };

    _this.state = {
      show_all_buttons: false,
      display_buttons_count: props.display_count
    };
    return _this;
  }

  createClass(Buttons, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var display_count = this.props.display_count;

      if (prevProps.display_count !== display_count) {
        this.setState({ display_buttons_count: display_count });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          btn_disabled = _props.btn_disabled,
          buttons = _props.buttons,
          className = _props.className,
          showmore = _props.showmore,
          showless = _props.showless;
      var _state = this.state,
          display_buttons_count = _state.display_buttons_count,
          show_all_buttons = _state.show_all_buttons;

      return React.createElement(
        'span',
        {
          className: className + ' buttonsContainer'
        },
        buttons.map(function (btn, index) {
          if (index < display_buttons_count) {
            return React.createElement(
              Button,
              _extends({
                key: index,
                icon: _this2.renderButtonIcon(btn.icon, btn.iconStyle),
                size: 'small',
                className: (btn.displayType === 'paragraph' ? 'ori-btn-paragraph' : btn.displayType === 'secondary' ? 'ori-btn-secondary' : 'ori-btn-bubble-inner') + ' ' + styles$2.button,
                block: btn.displayType === 'paragraph',
                disabled: btn_disabled || btn.disabled,
                onClick: function onClick(e) {
                  _this2.handleBtnClick.bind(_this2, btn)(e);
                  blurButtonAfterClick(e);
                }
              }, btn.btnProps),
              btn.text
            );
          }
        }),
        !show_all_buttons && buttons.length > display_buttons_count && React.createElement(
          Button,
          {
            size: 'small',
            className: 'ori-btn-bubble-inner ori-btn-showmore ' + styles$2.button,
            onClick: this.showAllButtons
          },
          showmore
        ),
        show_all_buttons && React.createElement(
          Button,
          {
            size: 'small',
            className: 'ori-btn-bubble-inner ori-btn-showless ' + styles$2.button,
            onClick: this.showLessButtons
          },
          showless
        )
      );
    }
  }]);
  return Buttons;
}(React.PureComponent);

Buttons.propTypes = {
  className: PropTypes.string,
  buttons: PropTypes.array,
  message: PropTypes.object,
  btn_disabled: PropTypes.bool,
  display_count: PropTypes.number,
  handleMsgBtnClick: PropTypes.func,
  showmore: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  showless: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};

Buttons.defaultProps = {
  className: '',
  btn_disabled: false,
  display_count: 4,
  showmore: 'Show more',
  showless: 'Show less'
};

var HtmlText = function HtmlText(_ref) {
  var text = _ref.text,
      isHtml = _ref.isHtml,
      textClass = _ref.textClass;

  if (isHtml) {
    return React.createElement('div', { dangerouslySetInnerHTML: { __html: text } });
  }
  return React.createElement(
    'p',
    { className: 'ori-word-wrap ori-word-break ' + textClass },
    text
  );
};

HtmlText.propTypes = {
  text: PropTypes.string.isRequired,
  isHtml: PropTypes.bool,
  textClass: PropTypes.string
};

HtmlText.defaultProps = {
  isHtml: false,
  textClass: 'ori-no-b-mrgn'
};

/* eslint-disable camelcase */

var TextWithMediaBody = function (_React$PureComponent) {
  inherits(TextWithMediaBody, _React$PureComponent);

  function TextWithMediaBody() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, TextWithMediaBody);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = TextWithMediaBody.__proto__ || Object.getPrototypeOf(TextWithMediaBody)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      show_overlay: false,
      video_iframe_loading: true,
      selectedIndex: -1
    }, _this.showOverlay = function () {
      var _this$props = _this.props,
          img_popup_disable = _this$props.img_popup_disable,
          onImageRedirect = _this$props.onImageRedirect,
          payload = _this$props.payload;

      if (payload.imageRedirectUrl) {
        window.open(payload.imageRedirectUrl);
        if (onImageRedirect) {
          onImageRedirect({
            type: _this.props.message.type,
            imageRedirectUrl: payload.imageRedirectUrl
          });
        }
      } else if (!img_popup_disable) {
        _this.setState({ show_overlay: true });
      }
    }, _this.closeOverlay = function () {
      _this.setState({ show_overlay: false });
      var video_iframe_loading = _this.state.video_iframe_loading;

      if (!video_iframe_loading) _this.setState({ video_iframe_loading: true });
    }, _this.handleEndVideoLoading = function () {
      _this.setState({ video_iframe_loading: false });
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(TextWithMediaBody, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          btn_disabled = _props.btn_disabled,
          message = _props.message,
          handleMsgBtnClick = _props.handleMsgBtnClick,
          btn_hidden = _props.btn_hidden,
          default_btn_display_count = _props.default_btn_display_count,
          img_popup_disable = _props.img_popup_disable,
          payload = _props.payload,
          showless = _props.showless,
          image_preview = _props.image_preview,
          showmore = _props.showmore;
      var _state = this.state,
          selectedIndex = _state.selectedIndex,
          show_overlay = _state.show_overlay,
          video_iframe_loading = _state.video_iframe_loading;


      return React.createElement(
        'div',
        {
          className: styles$1.textWithMediaContainer + ' ' + styles$1.ie10upTextWithMediaContainer
        },
        !img_popup_disable && show_overlay && React.createElement(
          'div',
          {
            className: 'ori-flex-row ori-flex-jc ori-flex-ac ori-align-full ' + styles$1.previewOverlayContainer
          },
          React.createElement(
            'div',
            { className: 'ori-bg-white ori-relative' },
            payload.imageUrl && React.createElement('img', {
              src: payload.imageUrl,
              alt: '',
              style: { maxWidth: '100%', maxHeight: '70vh' }
            }),
            payload.url && React.createElement(
              'div',
              { className: 'ori-relative ori-display-grid' },
              React.createElement('iframe', {
                onLoad: this.handleEndVideoLoading,
                title: 'video-message',
                src: payload.url,
                frameBorder: '0',
                allow: 'autoplay; encrypted-media',
                allowFullScreen: true,
                style: _extends({}, payload.overlayIframeStyle)
              }),
              video_iframe_loading && React.createElement(
                'div',
                { className: styles$1.overlayIframeLoading },
                React.createElement(Spin, { dotSize: 40 })
              )
            ),
            React.createElement(
              'div',
              { className: 'ori-lr-pad-10' },
              !image_preview.hidePreviewContent && payload.title && payload.title.trim().length > 0 && React.createElement(
                'p',
                {
                  className: styles$1.title + ' ori-font-default ori-mt-title'
                },
                payload.title
              ),
              image_preview.showPreviewCrossIcon ? React.createElement(Button, { size: 'small', className: styles$1.previewClose + ' ori-image-preview-icon', icon: React.createElement(CloseIcon, null), onClick: this.closeOverlay }) : React.createElement(
                'div',
                { className: 'ori-flex-row ori-flex-jc ori-pad-10' },
                React.createElement(
                  Button,
                  { type: 'danger', size: 'small', className: 'ori-image-preview-btn', onClick: this.closeOverlay },
                  'Close'
                )
              )
            )
          )
        ),
        payload.url && payload.url.trim().length > 0 && React.createElement(
          'div',
          { className: 'videoContainer ori-relative' },
          React.createElement('iframe', {
            title: 'video-message',
            className: 'ori-full-width',
            src: payload.url,
            frameBorder: '0',
            allow: 'autoplay; encrypted-media',
            allowFullScreen: true
          }),
          payload.showOverlayButton && React.createElement(
            'div',
            { onClick: this.showOverlay, className: 'ori-absolute ori-align-top ori-align-right ori-r-pad-5 ori-t-pad-5 ori-cursor-ptr' },
            payload.overlayButtonIcon ? React.createElement(payload.overlayButtonIcon, null) : React.createElement(FullScreen, { className: styles$1.overlayButton })
          )
        ),
        payload.imageUrl && payload.imageUrl.trim().length > 0 && React.createElement('img', {
          src: payload.imageUrl,
          alt: '',
          className: 'ori-b-mrgn-5 ori-cursor-ptr ori-full-width oriTextWithMediaImage',
          onClick: this.showOverlay
        }),
        payload.title && React.createElement(HtmlText, {
          textClass: styles$1.title + ' ori-mt-title',
          text: payload.title,
          isHtml: payload.containsHtmlTitle
        }),
        payload.subtitle && React.createElement(HtmlText, {
          text: payload.subtitle,
          isHtml: payload.containsHtmlSubtitle
        }),
        payload.accordian && payload.accordian.map(function (item, index) {
          return React.createElement(
            'div',
            {
              className: 'ori-border-light ori-border-radius-3 ori-b-mrgn-5',
              key: index
            },
            React.createElement(
              'div',
              {
                className: 'ori-tb-pad-5 ori-lr-pad-10 ori-bg-card ori-cursor-ptr ori-font-bold',
                onClick: function onClick() {
                  return _this2.setState({
                    selectedIndex: selectedIndex === index ? -1 : index
                  });
                }
              },
              React.createElement(HtmlText, { text: item.title, isHtml: item.containsHtmlTitle })
            ),
            index === selectedIndex && React.createElement(
              'div',
              { className: 'ori-animated ori-fade-in ori-lr-pad-10 ori-tb-pad-5' },
              React.createElement(HtmlText, {
                text: item.description,
                isHtml: item.containsHtmlDescription
              })
            )
          );
        }),
        !btn_hidden && payload.buttons && payload.buttons.length > 0 && React.createElement(Buttons, {
          buttons: payload.buttons,
          display_count: payload.btnDisplayCount ? payload.btnDisplayCount : default_btn_display_count,
          message: message,
          btn_disabled: btn_disabled,
          handleMsgBtnClick: handleMsgBtnClick,
          showmore: showmore,
          showless: showless
        }),
        payload.footer && React.createElement('div', { dangerouslySetInnerHTML: { __html: payload.footer } })
      );
    }
  }]);
  return TextWithMediaBody;
}(React.PureComponent);

TextWithMediaBody.propTypes = {
  payload: PropTypes.object.isRequired,
  message: PropTypes.object.isRequired,
  handleMsgBtnClick: PropTypes.func,
  img_popup_disable: PropTypes.bool,
  btn_disabled: PropTypes.bool,
  btn_hidden: PropTypes.bool,
  default_btn_display_count: PropTypes.number,
  onImageRedirect: PropTypes.func,
  showmore: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  showless: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  image_preview: PropTypes.object
};

TextWithMediaBody.defaultProps = {
  btn_disabled: false,
  btn_hidden: false,
  img_popup_disable: false,
  default_btn_display_count: 4,
  image_preview: {}
};

/* eslint-disable camelcase */

var TextWithMedia = function TextWithMedia(props) {
  return React.createElement(MessageWrapper, _extends({ component: TextWithMediaBody }, props));
};

TextWithMedia.propTypes = {
  message: PropTypes.object.isRequired,
  handleMsgBtnClick: PropTypes.func,
  img_popup_disable: PropTypes.bool,
  btn_disabled: PropTypes.bool,
  btn_hidden: PropTypes.bool,
  default_btn_display_count: PropTypes.number,
  onImageRedirect: PropTypes.func,
  preferLang: PropTypes.string,
  image_preview: PropTypes.object
};

TextWithMedia.defaultProps = {
  btn_disabled: false,
  btn_hidden: false,
  img_popup_disable: false,
  default_btn_display_count: 4,
  image_preview: {}
};

var ListMessageBody = function ListMessageBody(_ref) {
  var payload = _ref.payload;

  if (payload.submitMessage) {
    return React.createElement(HtmlText, {
      text: payload.submitMessage.message,
      isHtml: payload.submitMessage.containsHtmlMessage
    });
  }

  return React.createElement(
    React.Fragment,
    null,
    payload.list && payload.list.length > 0 && payload.list.map(function (item, index) {
      if (payload.showLabelOnly) {
        return React.createElement(
          'p',
          { key: index },
          item.label
        );
      }
      if (item.value !== undefined) {
        var renderedValue = void 0;
        if (Array.isArray(item.value)) {
          renderedValue = item.value.filter(function (_, i) {
            return !item.hiddenIndexes || !item.hiddenIndexes.includes(i);
          }).join(', ');
        } else {
          renderedValue = item.value;
        }
        return React.createElement(
          'p',
          { key: index },
          item.label && React.createElement(
            'span',
            null,
            item.label,
            ' '
          ),
          renderedValue
        );
      }
      return React.createElement(
        'p',
        { key: index },
        item.label
      );
    })
  );
};

ListMessageBody.propTypes = {
  payload: PropTypes.object.isRequired
};

var ListMessage = function ListMessage(props) {
  return React.createElement(MessageWrapper, _extends({ component: ListMessageBody }, props));
};

ListMessage.propTypes = {
  message: PropTypes.object.isRequired
};

var css$3 = ".CarouselWithButtonsBody-module_carouselItem__243wm {\n  width: 100%;\n  background-color: rgba(239, 239, 244, 0.3); }\n\n.CarouselWithButtonsBody-module_imageContainer__2G8Y_ {\n  height: 200px;\n  background-color: #000;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center; }\n\n.CarouselWithButtonsBody-module_carouselContainer__KnHV5 {\n  margin-bottom: 30px; }\n\n.CarouselWithButtonsBody-module_previewOverlayContainer__1SKPQ {\n  z-index: 9999999;\n  position: fixed;\n  flex: 1;\n  padding: 30px;\n  background-color: rgba(0, 0, 0, 0.2); }\n\n.CarouselWithButtonsBody-module_slideNumberContainer__2Ol84 {\n  display: flex;\n  justify-content: center; }\n\n.CarouselWithButtonsBody-module_previewClose__1rDxN {\n  position: absolute !important;\n  top: -25px !important;\n  right: -25px !important;\n  border-radius: 50% !important; }\n";
var styles$3 = { "carouselItem": "CarouselWithButtonsBody-module_carouselItem__243wm", "imageContainer": "CarouselWithButtonsBody-module_imageContainer__2G8Y_", "carouselContainer": "CarouselWithButtonsBody-module_carouselContainer__KnHV5", "previewOverlayContainer": "CarouselWithButtonsBody-module_previewOverlayContainer__1SKPQ", "slideNumberContainer": "CarouselWithButtonsBody-module_slideNumberContainer__2Ol84", "previewClose": "CarouselWithButtonsBody-module_previewClose__1rDxN" };
styleInject(css$3);

/* eslint-disable camelcase */

var CarouselWithButtonsBody = function (_React$PureComponent) {
  inherits(CarouselWithButtonsBody, _React$PureComponent);

  function CarouselWithButtonsBody() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, CarouselWithButtonsBody);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = CarouselWithButtonsBody.__proto__ || Object.getPrototypeOf(CarouselWithButtonsBody)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      show_overlay: false,
      selected_carousel_item: null,
      selected_option_indexes: {},
      isExpanded: false,
      currentSlide: 0
    }, _this.handleOverFlowExpansion = function () {
      _this.setState({ isExpanded: true });
    }, _this.handleSlideChange = function (current) {
      _this.setState({ currentSlide: current });
    }, _this.handleOptionSelection = function (index) {
      var payload = _this.props.payload;

      _this.setState(function (prev) {
        return {
          selected_option_indexes: payload.multiSelect ? _extends({}, prev.selected_option_indexes, defineProperty({}, index, !prev.selected_option_indexes[index])) : defineProperty({}, index, !prev.selected_option_indexes[index])
        };
      });
    }, _this.handleSubmitSelectedOptions = function () {
      var _this$props = _this.props,
          payload = _this$props.payload,
          message = _this$props.message,
          onSubmit = _this$props.onSubmit;
      var selected_option_indexes = _this.state.selected_option_indexes;

      if (payload.selectable) {
        var selectedData = [];
        var text = '';
        var updatedMessage = JSON.parse(JSON.stringify(message));
        payload.options.forEach(function (item, index) {
          if (updatedMessage.payload[0]) {
            updatedMessage.payload[0].options[index].selected = !!selected_option_indexes[index];
          } else {
            updatedMessage.payload.options[index].selected = !!selected_option_indexes[index];
          }
          if (selected_option_indexes[index]) {
            selectedData.push(item);
            var html = '<div class=\'ori-flex-row ori-pad-5\'>\n                        <img class=\'ori-box-70 ori-r-mrgn-10\' src=\'' + item.mediaUrl + '\' alt=\'item\' />\n                        <div class=\'\'>\n                          <p class=\'ori-font-bold\'>' + item.title + '</p>\n                          <p class=\'ori-font-light\'>' + item.subtitle + '</p>\n                        </div>\n                      </div>';
            text = '' + text + html;
          }
        });

        if (selectedData.length > 0) {
          var data = {
            selectedData: selectedData,
            relayData: payload.relayData,
            text: text,
            containsHTML: true
          };
          onSubmit(data, updatedMessage);
        }
      }
    }, _this.closeOverlay = function () {
      _this.setState({
        show_overlay: false,
        selected_carousel_item: null
      });
    }, _this.showCarouselItem = function (selected_carousel_item) {
      var _this$props2 = _this.props,
          img_popup_disable = _this$props2.img_popup_disable,
          onImageRedirect = _this$props2.onImageRedirect;

      if (selected_carousel_item.imageRedirectUrl) {
        window.open(selected_carousel_item.imageRedirectUrl);
        if (onImageRedirect) {
          onImageRedirect({
            type: _this.props.message.type,
            imageRedirectUrl: selected_carousel_item.imageRedirectUrl
          });
        }
      } else if (!img_popup_disable) {
        _this.setState({
          show_overlay: true,
          selected_carousel_item: selected_carousel_item
        });
      }
    }, _this.handleGetOuterButtons = function () {
      var payload = _this.props.payload;
      var currentSlide = _this.state.currentSlide;

      return payload.options && payload.options[currentSlide] && payload.options[currentSlide].outerButtons || [];
    }, _this.renderPreviewOverlay = function () {
      var _this$state = _this.state,
          show_overlay = _this$state.show_overlay,
          selected_carousel_item = _this$state.selected_carousel_item;
      var _this$props3 = _this.props,
          img_popup_disable = _this$props3.img_popup_disable,
          image_preview = _this$props3.image_preview;

      if (!img_popup_disable && show_overlay && selected_carousel_item) {
        return React.createElement(
          'div',
          {
            className: 'ori-flex-row ori-flex-jc ori-flex-ac ori-align-full ' + styles$3.previewOverlayContainer
          },
          React.createElement(
            'div',
            { className: 'ori-bg-white ori-relative' },
            React.createElement('img', {
              src: selected_carousel_item.mediaUrl,
              alt: '',
              style: { width: '100%', maxHeight: '70vh' }
            }),
            !image_preview.hidePreviewContent && React.createElement(
              'div',
              { className: 'ori-l-mrgn-5 ori-t-mrgn-5' },
              selected_carousel_item.title && selected_carousel_item.title.trim().length > 0 && React.createElement(HtmlText, {
                textClass: 'ori-no-b-mrgn ori-font-bold ori-lr-pad-10 ori-capitalize ori-word-wrap ori-word-break',
                text: selected_carousel_item.title,
                isHtml: selected_carousel_item.containsHtmlTitle
              }),
              selected_carousel_item.subtitle && selected_carousel_item.subtitle.trim().length > 0 && React.createElement(HtmlText, {
                textClass: 'ori-t-mrgn-3 ori-no-b-mrgn ori-lr-pad-10 ori-capitalize ori-word-wrap ori-word-break',
                text: selected_carousel_item.subtitle,
                isHtml: selected_carousel_item.containsHtmlSubtitle
              })
            ),
            image_preview.showPreviewCrossIcon ? React.createElement(Button, { size: 'small', className: styles$3.previewClose + ' ori-image-preview-icon', icon: React.createElement(CloseIcon, null), onClick: _this.closeOverlay }) : React.createElement(
              'div',
              { className: 'ori-flex-row ori-flex-jc ori-pad-10' },
              React.createElement(
                Button,
                { type: 'danger', size: 'small', className: 'ori-image-preview-btn', onClick: _this.closeOverlay },
                'Close'
              )
            )
          )
        );
      }
    }, _this.renderCarouselImage = function (carousel_item) {
      var display_type = _this.props.display_type;

      if (display_type === 'fixed') {
        return React.createElement('div', {
          className: styles$3.imageContainer,
          style: {
            backgroundImage: 'url(' + carousel_item.mediaUrl + ')'
          },
          onClick: function onClick() {
            return _this.showCarouselItem(carousel_item);
          }
        });
      }
      if (display_type === 'actual') {
        return React.createElement(
          'div',
          { className: 'ori-carousel-img-container' },
          React.createElement('img', {
            src: carousel_item.mediaUrl,
            alt: '',
            className: 'ori-cursor-ptr ori-full-width',
            onClick: function onClick() {
              return _this.showCarouselItem(carousel_item);
            }
          })
        );
      }
      return React.createElement('img', {
        src: carousel_item.mediaUrl,
        alt: '',
        className: 'ori-cursor-ptr ori-full-width',
        style: { height: '200px' },
        onClick: function onClick() {
          return _this.showCarouselItem(carousel_item);
        }
      });
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(CarouselWithButtonsBody, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var payload = this.props.payload;

      if (payload.selectable) {
        var indexes = {};
        payload.options.forEach(function (item, index) {
          indexes[index] = !!item.selected;
        });
        this.setState({ selected_option_indexes: indexes });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          btn_disabled = _props.btn_disabled,
          handleMsgBtnClick = _props.handleMsgBtnClick,
          message = _props.message,
          btn_hidden = _props.btn_hidden,
          default_btn_display_count = _props.default_btn_display_count,
          payload = _props.payload,
          showmore = _props.showmore,
          showless = _props.showless;
      var _state = this.state,
          selected_option_indexes = _state.selected_option_indexes,
          isExpanded = _state.isExpanded;


      return React.createElement(
        'div',
        { className: 'ori-relative ori-word-break ori-mt-carouselWithButtonsContainer' },
        this.renderPreviewOverlay(),
        payload && payload.title && React.createElement(HtmlText, {
          textClass: 'ori-no-t-mrgn ori-no-b-mrgn ori-font-bold ori-capitalize-first ori-mt-title',
          text: payload.title,
          isHtml: payload.containsHtmlTitle
        }),
        payload && payload.subtitle && React.createElement(HtmlText, {
          textClass: 'ori-no-b-mrgn ori-no-t-mrgn ori-mt-subtitle',
          text: payload.subtitle,
          isHtml: payload.containsHtmlSubtitle
        }),
        payload && payload.options && payload.options.length > 0 && React.createElement(
          Carousel,
          {
            className: 'ori-mt-CarouselContainer ' + styles$3.carouselContainer,
            arrows: true,
            infinite: !payload.disableLoop,
            dots: !payload.disableSliderDots,
            afterChange: this.handleSlideChange
          },
          payload.options.map(function (carousel_item, index) {
            return React.createElement(
              OverflowWrapper,
              _extends({ key: index }, payload.overflowWrapperProps, { isExpanded: isExpanded, handleExpand: _this2.handleOverFlowExpansion }),
              React.createElement(
                'div',
                {
                  className: 'carouselItem ' + styles$3.carouselItem + ' ' + (selected_option_indexes[index] ? 'carouselItemSelected' : ''),
                  style: payload.carouselStyle,
                  key: index
                },
                carousel_item.mediaType && carousel_item.mediaUrl && carousel_item.mediaType === 'video' && carousel_item.mediaUrl.trim().length > 0 && React.createElement(
                  'div',
                  { className: 'videoContainer' },
                  React.createElement('iframe', {
                    title: 'video-message',
                    className: 'ori-full-width',
                    src: carousel_item.mediaUrl,
                    frameBorder: '0',
                    allow: 'autoplay; encrypted-media',
                    allowFullScreen: true
                  })
                ),
                carousel_item.mediaType && carousel_item.mediaUrl && carousel_item.mediaType === 'image' && carousel_item.mediaUrl.trim().length > 0 && _this2.renderCarouselImage(carousel_item),
                carousel_item.title && React.createElement(HtmlText, {
                  text: carousel_item.title,
                  isHtml: carousel_item.containsHtmlTitle,
                  textClass: 'ori-t-mrgn-3 ori-no-b-mrgn ori-font-bold ori-lr-pad-10 ori-word-wrap ori-word-break ori-mt-title ' + (payload.selectable ? 'ori-carousel-selectable-title' : 'ori-carousel-title')
                }),
                carousel_item.subtitle && React.createElement(HtmlText, {
                  text: carousel_item.subtitle,
                  isHtml: carousel_item.containsHtmlSubtitle,
                  textClass: 'ori-no-b-mrgn ori-lr-pad-10 ' + (payload.selectable ? 'ori-carousel-selectable-subtitle' : 'ori-carousel-subtitle')
                }),
                payload.selectable && React.createElement(
                  Button,
                  {
                    size: 'small',
                    className: 'ori-btn-carousel-select-option ' + (selected_option_indexes[index] ? 'ori-btn-carousel-item-selected' : 'ori-btn-carousel-item'),
                    btn_disabled: btn_disabled,
                    onClick: function onClick(e) {
                      _this2.handleOptionSelection(index);
                      blurButtonAfterClick(e);
                    }
                  },
                  selected_option_indexes[index] ? 'Selected' : 'Select'
                ),
                carousel_item.buttons && carousel_item.buttons.length > 0 && React.createElement(Buttons
                // className='ori-lr-pad-10'
                , { buttons: carousel_item.buttons,
                  display_count: carousel_item.btnDisplayCount ? carousel_item.btnDisplayCount : default_btn_display_count,
                  message: message,
                  handleMsgBtnClick: handleMsgBtnClick,
                  btn_disabled: btn_disabled,
                  showmore: showmore,
                  showless: showless
                }),
                carousel_item.tag && carousel_item.tag.text && React.createElement(
                  Tag,
                  _extends({ className: 'oriCarouselTagContainer' }, carousel_item.tag.props),
                  carousel_item.tag.text
                )
              )
            );
          })
        ),
        payload.showSlideNumbers && React.createElement(
          'div',
          { className: 'ori-carousel-slide-number-container ' + styles$3.slideNumberContainer },
          React.createElement(
            'span',
            { className: 'ori-slide-number-numerator' },
            this.state.currentSlide + 1,
            '/'
          ),
          React.createElement(
            'span',
            { className: 'ori-slide-number-denominator' },
            payload.options.length
          )
        ),
        React.createElement(Buttons, {
          className: 'carouselCommonBtnContainer',
          buttons: this.handleGetOuterButtons(),
          display_count: payload.options && payload.options[this.state.currentSlide] && payload.options[this.state.currentSlide].outerBtnDisplayCount ? payload.options[this.state.currentSlide].outerBtnDisplayCount : default_btn_display_count,
          message: message,
          handleMsgBtnClick: handleMsgBtnClick,
          btn_disabled: btn_disabled,
          showmore: showmore,
          showless: showless
        }),
        payload.selectable && React.createElement(
          Button,
          {
            size: 'small',
            className: 'ori-carousel-btn-submit',
            disabled: btn_disabled,
            onClick: function onClick(e) {
              _this2.handleSubmitSelectedOptions(e);
              blurButtonAfterClick(e);
            }
          },
          payload.submitText ? payload.submitText : 'Submit'
        ),
        !btn_hidden && payload.buttons && payload.buttons.length > 0 && React.createElement(Buttons, {
          buttons: payload.buttons,
          display_count: payload.btnDisplayCount ? payload.btnDisplayCount : default_btn_display_count,
          message: message,
          btn_disabled: btn_disabled,
          handleMsgBtnClick: handleMsgBtnClick,
          showmore: showmore,
          showless: showless
        })
      );
    }
  }]);
  return CarouselWithButtonsBody;
}(React.PureComponent);

CarouselWithButtonsBody.propTypes = defineProperty({
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
  showmore: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  showless: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
}, 'image_preview', PropTypes.object);

CarouselWithButtonsBody.defaultProps = {
  btn_disabled: false,
  btn_hidden: false,
  img_popup_disable: false,
  default_btn_display_count: 4,
  image_preview: {}
};

/* eslint-disable camelcase */

var CarouselWithButtons = function CarouselWithButtons(props) {
  return React.createElement(MessageWrapper, _extends({ component: CarouselWithButtonsBody }, props));
};

CarouselWithButtons.propTypes = {
  message: PropTypes.object.isRequired,
  handleMsgBtnClick: PropTypes.func,
  btn_disabled: PropTypes.bool,
  btn_hidden: PropTypes.bool,
  display_type: PropTypes.string,
  img_popup_disable: PropTypes.bool,
  default_btn_display_count: PropTypes.number,
  onImageRedirect: PropTypes.func,
  preferLang: PropTypes.string,
  image_preview: PropTypes.object
};

CarouselWithButtons.defaultProps = {
  btn_disabled: false,
  btn_hidden: false,
  img_popup_disable: false,
  default_btn_display_count: 4,
  image_preview: {}
};

var css$4 = ".CheckboxWithMediaBody-module_imageContainer__3jb_2 {\n  max-height: 200px;\n  overflow: hidden;\n  margin-bottom: 5px; }\n\n.CheckboxWithMediaBody-module_checkboxGroupContainer__3fbmt {\n  background-color: rgba(239, 239, 244, 0.3);\n  border: 1px solid #efeff4;\n  margin-top: 3px;\n  margin-bottom: 3px;\n  border-radius: 3px;\n  padding: 10px; }\n\n.CheckboxWithMediaBody-module_checkboxFooterContainer__YOn6g {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  flex-wrap: wrap-reverse;\n  padding-top: 10px; }\n";
var styles$4 = { "imageContainer": "CheckboxWithMediaBody-module_imageContainer__3jb_2", "checkboxGroupContainer": "CheckboxWithMediaBody-module_checkboxGroupContainer__3fbmt", "checkboxFooterContainer": "CheckboxWithMediaBody-module_checkboxFooterContainer__YOn6g" };
styleInject(css$4);

var css$5 = ".CustomPagination-module_customPaginationContainer__3b9db {\n  box-sizing: border-box;\n  margin: 0 !important;\n  padding: 0;\n  list-style: none;\n  overflow: hidden;\n  display: block; }\n\n.CustomPagination-module_paginationItem__xgC4m {\n  height: 24px;\n  width: 24px;\n  line-height: 22px;\n  list-style: none;\n  display: inline-block;\n  text-align: center;\n  vertical-align: middle;\n  border-radius: 4px;\n  margin-right: 5px;\n  font-size: 12px;\n  cursor: pointer; }\n";
var styles$5 = { "customPaginationContainer": "CustomPagination-module_customPaginationContainer__3b9db", "paginationItem": "CustomPagination-module_paginationItem__xgC4m" };
styleInject(css$5);

/* eslint-disable camelcase */

var CustomPagination = function CustomPagination(_ref) {
  var next_disabled = _ref.next_disabled,
      current = _ref.current,
      onChange = _ref.onChange;

  var onClickPrev = function onClickPrev() {
    if (current - 1 > 0) {
      onChange(current - 1);
    }
  };

  var onClickNext = function onClickNext() {
    if (!next_disabled && current) {
      onChange(current + 1);
    }
  };

  return React.createElement(
    'ul',
    { className: styles$5.customPaginationContainer },
    React.createElement(
      'li',
      {
        className: styles$5.paginationItem + ' ' + (current === 1 ? 'ori-font-light ori-cursor-not-allowed' : ''),
        onClick: onClickPrev
      },
      '<'
    ),
    current >= 2 && React.createElement(
      'li',
      {
        className: styles$5.paginationItem + ' ori-border-default',
        onClick: onClickPrev
      },
      current - 1
    ),
    React.createElement(
      'li',
      { className: styles$5.paginationItem + ' ori-border-primary ori-font-primary ori-font-bold' },
      current
    ),
    !next_disabled && React.createElement(
      'li',
      {
        className: styles$5.paginationItem + ' ori-border-default',
        onClick: onClickNext
      },
      current + 1
    ),
    React.createElement(
      'li',
      {
        className: styles$5.paginationItem + ' ' + (next_disabled ? 'ori-font-light ori-cursor-not-allowed' : ''),
        onClick: onClickNext
      },
      '>'
    )
  );
};

CustomPagination.propTypes = {
  current: PropTypes.number.isRequired,
  next_disabled: PropTypes.bool,
  onChange: PropTypes.func
};

CustomPagination.defaultProps = {
  current: 1,
  next_disabled: false,
  onChange: function onChange() {}
};

/* eslint-disable camelcase */

var LIMIT = 8;

var CheckboxWithMediaBody = function (_React$PureComponent) {
  inherits(CheckboxWithMediaBody, _React$PureComponent);

  function CheckboxWithMediaBody(props) {
    classCallCheck(this, CheckboxWithMediaBody);

    var _this = possibleConstructorReturn(this, (CheckboxWithMediaBody.__proto__ || Object.getPrototypeOf(CheckboxWithMediaBody)).call(this, props));

    _this.check_all_value = [];

    _this.onCheckAllChange = function (e) {
      var payload = _this.props.payload;

      _this.setState({
        checked: e.target.checked ? _this.check_all_value : payload.selectedValue || [],
        indeterminate: !!(payload.selectedValue && payload.selectedValue.length && !e.target.checked),
        check_all: e.target.checked
      });
    };

    _this.onChange = function (e) {
      var checked = _this.state.checked;

      var updatedChecked = [].concat(toConsumableArray(checked));
      var searchedIndex = updatedChecked.indexOf(e.target.value);
      if (e.target.checked && searchedIndex === -1) {
        updatedChecked.push(e.target.value);
      } else if (!e.target.checked && searchedIndex !== -1) {
        updatedChecked.splice(searchedIndex, 1);
      }
      var payload = _this.props.payload;

      if (payload.maxSelectionLimit && payload.maxSelectionLimit > 0 && payload.maxSelectionLimit < payload.options.length) {
        if (updatedChecked.length === payload.maxSelectionLimit) {
          _this.setState(function (prev) {
            return {
              filter_options: prev.filter_options.map(function (item) {
                if (!updatedChecked.includes(item.value)) item.disabled = true;
                return item;
              })
            };
          });
        } else {
          _this.setState(function (prev) {
            return {
              filter_options: prev.filter_options.map(function (item) {
                if (item.disabled && !updatedChecked.includes(item.value)) item.disabled = false;
                return item;
              })
            };
          });
        }
      }
      _this.setState({
        checked: updatedChecked,
        indeterminate: !!updatedChecked.length && updatedChecked.length < payload.options.length,
        check_all: updatedChecked.length === payload.options.length
      });
    };

    _this.onClickSubmit = function () {
      var payload = _this.props.payload;
      var checked = _this.state.checked;

      var selected_list = payload.options.filter(function (item) {
        return checked.findIndex(function (value) {
          return value === item.value;
        }) !== -1;
      });

      var data = {
        list: selected_list,
        showLabelOnly: true,
        relayData: payload.relayData
      };
      _this.props.onSubmitCheckbox(data);
    };

    _this.onChangePagination = function (current) {
      var payload = _this.props.payload;
      var checked = _this.state.checked;

      var filterOptions = payload.options.slice((current - 1) * LIMIT, current * LIMIT);
      if (payload.maxSelectionLimit && payload.maxSelectionLimit > 0 && payload.maxSelectionLimit < payload.options.length && checked.length > 0) {
        if (checked.length === payload.maxSelectionLimit) {
          _this.setState({
            filter_options: filterOptions.map(function (item) {
              if (!checked.includes(item.value)) item.disabled = true;
              return item;
            })
          });
        } else {
          _this.setState({
            filter_options: filterOptions.map(function (item) {
              if (item.disabled) item.disabled = false;
              return item;
            })
          });
        }
      }

      var paginationLength = filterOptions.length + LIMIT * (current - 1);
      _this.setState({
        current: current,
        has_more: paginationLength < payload.options.length,
        filter_options: filterOptions
      });
    };

    _this.state = {
      checked: props.payload.selectedValue || [],
      indeterminate: !!(props.payload.selectedValue && props.payload.selectedValue.length && props.payload.selectedValue.length < props.payload.options.length),
      check_all: !!(props.payload.selectedValue && props.payload.selectedValue.length && props.payload.selectedValue.length === props.payload.options.length),
      has_more: props.payload.options && props.payload.options.length > LIMIT,
      current: 1,
      filter_options: props.payload.options && props.payload.options.length > LIMIT ? props.payload.options.slice(0, LIMIT) : props.payload.options
    };
    return _this;
  }

  createClass(CheckboxWithMediaBody, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var payload = this.props.payload;

      if (payload.options && payload.options.length > 0) {
        payload.options.forEach(function (item) {
          if (!item.disabled) _this2.check_all_value.push(item.value);
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _state = this.state,
          checked = _state.checked,
          indeterminate = _state.indeterminate,
          check_all = _state.check_all,
          filter_options = _state.filter_options,
          current = _state.current,
          has_more = _state.has_more;
      var _props = this.props,
          btn_disabled = _props.btn_disabled,
          message = _props.message,
          handleMsgBtnClick = _props.handleMsgBtnClick,
          btn_hidden = _props.btn_hidden,
          checkbox_disabled = _props.checkbox_disabled,
          default_btn_display_count = _props.default_btn_display_count,
          payload = _props.payload,
          showless = _props.showless,
          showmore = _props.showmore;


      return React.createElement(
        'div',
        { className: 'ori-word-break ori-mt-checkboxWithMediaContainer' },
        payload.imageUrl && React.createElement(
          'div',
          { className: styles$4.imageContainer },
          React.createElement('img', { src: payload.imageUrl, alt: '', className: 'ori-img-contain' })
        ),
        payload.title && React.createElement(HtmlText, {
          textClass: 'ori-no-t-mrgn ori-no-b-mrgn ori-font-bold ori-capitalize-first ori-mt-title',
          text: payload.title,
          isHtml: payload.containsHtmlTitle
        }),
        payload.subtitle && React.createElement(HtmlText, {
          textClass: 'ori-no-b-mrgn ori-no-t-mrgn ori-mt-subtitle',
          text: payload.subtitle,
          isHtml: payload.containsHtmlSubtitle
        }),
        payload.options && payload.options.length > 0 && React.createElement(
          'div',
          { className: styles$4.checkboxGroupContainer },
          !payload.maxSelectionLimit && React.createElement(
            'div',
            { className: 'ori-b-pad-5 ori-b-mrgn-10 ori-b-border-light' },
            React.createElement(
              Checkbox,
              {
                indeterminate: indeterminate,
                checked: check_all,
                disabled: checkbox_disabled,
                onChange: this.onCheckAllChange
              },
              'Select All'
            )
          ),
          React.createElement(
            'div',
            {
              style: { width: '100%' },
              className: 'ant-checkbox-group ori-mt-checkboxGroup ' + (payload.vertical ? 'ori-flex-column' : '')
            },
            filter_options.map(function (item, index) {
              return React.createElement(
                Checkbox,
                {
                  checked: checked.indexOf(item.value) !== -1,
                  className: 'ant-checkbox-group-item',
                  key: index,
                  value: item.value,
                  disabled: checkbox_disabled || item.disabled,
                  onChange: _this3.onChange
                },
                item.label
              );
            })
          ),
          React.createElement(
            'div',
            { className: styles$4.checkboxFooterContainer },
            React.createElement(
              Button,
              {
                size: 'small',
                className: 'ori-btn-bubble-inner',
                disabled: checkbox_disabled,
                onClick: function onClick(e) {
                  _this3.onClickSubmit(e);
                  blurButtonAfterClick(e);
                }
              },
              payload.submitBtnText ? payload.submitBtnText : 'Submit'
            ),
            payload.options.length > LIMIT && React.createElement(CustomPagination, {
              next_disabled: !has_more,
              current: current,
              onChange: this.onChangePagination
            })
          )
        ),
        !btn_hidden && payload.buttons && payload.buttons.length > 0 && React.createElement(Buttons, {
          buttons: payload.buttons,
          display_count: payload.btnDisplayCount ? payload.btnDisplayCount : default_btn_display_count,
          message: message,
          btn_disabled: btn_disabled,
          handleMsgBtnClick: handleMsgBtnClick,
          showmore: showmore,
          showless: showless
        })
      );
    }
  }]);
  return CheckboxWithMediaBody;
}(React.PureComponent);

CheckboxWithMediaBody.propTypes = {
  payload: PropTypes.object.isRequired,
  message: PropTypes.object.isRequired,
  handleMsgBtnClick: PropTypes.func,
  btn_disabled: PropTypes.bool,
  btn_hidden: PropTypes.bool,
  checkbox_disabled: PropTypes.bool,
  onSubmitCheckbox: PropTypes.func,
  default_btn_display_count: PropTypes.number,
  showmore: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  showless: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};

CheckboxWithMediaBody.defaultProps = {
  btn_disabled: false,
  btn_hidden: false,
  checkbox_disabled: false,
  default_btn_display_count: 4
};

/* eslint-disable camelcase */

var CheckboxWithMedia = function CheckboxWithMedia(props) {
  return React.createElement(MessageWrapper, _extends({ component: CheckboxWithMediaBody }, props));
};

CheckboxWithMedia.propTypes = {
  message: PropTypes.object.isRequired,
  handleMsgBtnClick: PropTypes.func,
  btn_disabled: PropTypes.bool,
  btn_hidden: PropTypes.bool,
  checkbox_disabled: PropTypes.bool,
  onSubmitCheckbox: PropTypes.func,
  default_btn_display_count: PropTypes.number,
  preferLang: PropTypes.string
};

CheckboxWithMedia.defaultProps = {
  btn_disabled: false,
  btn_hidden: false,
  checkbox_disabled: false,
  default_btn_display_count: 4
};

/* eslint-disable camelcase */

var PromptMsgBody = function PromptMsgBody(_ref) {
  var payload = _ref.payload,
      btn_disabled = _ref.btn_disabled,
      message = _ref.message,
      handleMsgBtnClick = _ref.handleMsgBtnClick,
      btn_hidden = _ref.btn_hidden,
      default_btn_display_count = _ref.default_btn_display_count,
      showless = _ref.showless,
      showmore = _ref.showmore;

  return React.createElement(
    'div',
    { className: 'ori-word-break ori-mt-promptMsgContainer' },
    payload.title && payload.title.trim().length > 0 && React.createElement(
      'p',
      { className: 'ori-no-t-mrgn ori-font-bold ori-no-b-mrgn ori-capitalize-first ori-mt-title' },
      payload.title
    ),
    payload.subtitle && payload.subtitle.trim().length > 0 && React.createElement(
      'p',
      { className: 'ori-no-b-mrgn ori-no-t-mrgn ori-mt-subtitle' },
      payload.subtitle
    ),
    !btn_hidden && payload.buttons && payload.buttons.length > 0 && React.createElement(Buttons, {
      buttons: payload.buttons,
      display_count: payload.btnDisplayCount ? payload.btnDisplayCount : default_btn_display_count,
      message: message,
      btn_disabled: btn_disabled,
      handleMsgBtnClick: handleMsgBtnClick,
      showmore: showmore,
      showless: showless
    })
  );
};

PromptMsgBody.propTypes = {
  payload: PropTypes.object.isRequired,
  message: PropTypes.object.isRequired,
  handleMsgBtnClick: PropTypes.func,
  btn_disabled: PropTypes.bool,
  btn_hidden: PropTypes.bool,
  default_btn_display_count: PropTypes.number,
  showmore: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  showless: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};

PromptMsgBody.defaultProps = {
  btn_disabled: false,
  btn_hidden: false,
  default_btn_display_count: 4
};

/* eslint-disable camelcase */

var PromptMsg = function PromptMsg(props) {
  return React.createElement(MessageWrapper, _extends({ component: PromptMsgBody }, props));
};

PromptMsg.propTypes = {
  message: PropTypes.object.isRequired,
  handleMsgBtnClick: PropTypes.func,
  btn_disabled: PropTypes.bool,
  btn_hidden: PropTypes.bool,
  default_btn_display_count: PropTypes.number
};

PromptMsg.defaultProps = {
  btn_disabled: false,
  btn_hidden: false,
  default_btn_display_count: 4
};

var css$6 = ".UploadFileBody-module_imageBg__23Dhn {\n  height: 48px;\n  width: 48px;\n  margin-right: 10px;\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat; }\n";
var styles$6 = { "imageBg": "UploadFileBody-module_imageBg__23Dhn" };
styleInject(css$6);

/* eslint-disable react/no-did-update-set-state */

var UploadFileBody = function (_React$PureComponent) {
  inherits(UploadFileBody, _React$PureComponent);

  function UploadFileBody(props) {
    var _this2 = this;

    classCallCheck(this, UploadFileBody);

    var _this = possibleConstructorReturn(this, (UploadFileBody.__proto__ || Object.getPrototypeOf(UploadFileBody)).call(this, props));

    _this.beforeUpload = function () {
      var _ref = asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(file) {
        var _this$props$payload, accept, maxAllowedSize, isAllowed, allowedSize, size, mimeType, typeError;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$props$payload = _this.props.payload, accept = _this$props$payload.accept, maxAllowedSize = _this$props$payload.maxAllowedSize; //  accept format eg. "image/png,image/jpg,image/jpeg"

                if (_this.state.error) {
                  _this.setState({ error: '' });
                }

                if (!file.name) {
                  _context.next = 14;
                  break;
                }

                isAllowed = true;
                allowedSize = maxAllowedSize || 300000;

                if (file.size > allowedSize) {
                  size = formatSizeUnits(allowedSize);

                  _this.setState({
                    error: 'file size must be less than ' + size
                  });
                  isAllowed = false;
                }

                if (!accept) {
                  _context.next = 13;
                  break;
                }

                _context.next = 9;
                return getFileMimeType(file);

              case 9:
                mimeType = _context.sent;
                typeError = accept.toLowerCase().includes(mimeType);

                if (!typeError) {
                  _this.setState({ error: 'Please upload valid file format' });
                }
                isAllowed = isAllowed && typeError;

              case 13:

                if (isAllowed) {
                  fileToBase64(file).then(function (fileUrl) {
                    _this.setState({
                      file: file,
                      fileUrl: fileUrl
                    });
                  });
                }

              case 14:
                return _context.abrupt('return', false);

              case 15:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    _this.onRemove = function (file) {
      _this.setState({
        file: null,
        fileUrl: '',
        error: ''
      });
    };

    _this.onClickFileUpload = function () {
      var _this$props = _this.props,
          handleFileUpload = _this$props.handleFileUpload,
          message = _this$props.message;
      var _this$state = _this.state,
          file = _this$state.file,
          fileUrl = _this$state.fileUrl;

      var payload = {
        file: {
          name: file.name,
          size: file.size,
          type: file.type,
          uid: file.uid
        },
        fileUrl: fileUrl
      };
      handleFileUpload(payload, message);
    };

    _this.renderImage = function () {
      var _this$state2 = _this.state,
          file = _this$state2.file,
          fileUrl = _this$state2.fileUrl;

      if (file && file.type && file.type.indexOf('image/') !== -1) {
        return React.createElement('div', {
          className: styles$6.imageBg,
          style: { backgroundImage: 'url(' + fileUrl + ')' }
        });
      } else {
        return React.createElement(
          'div',
          { className: 'ori-r-mrgn-10 ori-flex' },
          React.createElement(FileIcon, { size: 40 })
        );
      }
    };

    _this.renderFileList = function () {
      var _this$state3 = _this.state,
          file = _this$state3.file,
          fileUrl = _this$state3.fileUrl;
      var disabled = _this.props.disabled;

      if (file === null && fileUrl === '') {
        return React.createElement(
          'div',
          {
            className: 'ori-bg-card ori-pad-10 ori-flex-column ori-flex-jc ori-flex-ac ori-border-radius-3  uploaderWrapper ' + (disabled ? 'ori-cursor-not-allowed ori-border-dashed-danger' : 'ori-cursor-ptr ori-border-dashed-default')
          },
          React.createElement(UploadIcon, { size: 40 }),
          React.createElement(
            'div',
            { className: 'ori-t-pad-5' },
            'Select file to upload'
          )
        );
      } else if (file && file.name) {
        return React.createElement(
          'div',
          { className: 'ori-relative ori-flex-row ori-tb-mrgn-5 ori-pad-10 ori-border-light ori-border-radius-3' },
          !disabled && React.createElement(
            'div',
            {
              className: 'ori-absolute ori-cursor-ptr',
              style: { right: 10 },
              onClick: _this.onRemove
            },
            React.createElement(CloseIcon, { size: 14 })
          ),
          _this.renderImage(),
          file && React.createElement(
            'div',
            { className: 'ori-flex-column ori-flex-jc ori-full-flex ori-overflow-hidden' },
            React.createElement(
              'a',
              {
                className: 'ori-text-overflow-dotted ori-font-xs',
                href: fileUrl,
                target: '_blank'
              },
              file.name
            )
          )
        );
      }
    };

    _this.state = {
      file: props.payload.file ? props.payload.file : null,
      fileUrl: props.payload.fileUrl ? props.payload.fileUrl : '',
      error: ''
    };
    return _this;
  }

  createClass(UploadFileBody, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (prevProps.payload.file !== this.props.payload.file) {
        this.setState({ file: this.props.payload.file });
      }
      if (prevProps.payload.fileUrl !== this.props.payload.fileUrl) {
        this.setState({ fileUrl: this.props.payload.fileUrl });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          btn_disabled = _props.btn_disabled,
          message = _props.message,
          payload = _props.payload,
          handleMsgBtnClick = _props.handleMsgBtnClick,
          btn_hidden = _props.btn_hidden,
          disabled = _props.disabled,
          uploading = _props.uploading,
          default_btn_display_count = _props.default_btn_display_count,
          showless = _props.showless,
          showmore = _props.showmore;
      var _state = this.state,
          file = _state.file,
          fileUrl = _state.fileUrl,
          error = _state.error;

      return React.createElement(
        'div',
        { className: 'ori-word-break ori-uploadFileContainer' },
        payload.title && payload.title.trim().length > 0 && React.createElement(
          'p',
          { className: 'ori-no-t-mrgn ori-no-b-mrgn ori-font-bold ori-capitalize-first ori-word-break ori-mt-title' },
          payload.title
        ),
        payload.subtitle && payload.subtitle.trim().length > 0 && React.createElement(
          'p',
          { className: 'ori-no-b-mrgn ori-no-t-mrgn ori-word-break ori-mt-subtitle' },
          payload.subtitle
        ),
        React.createElement(
          'div',
          { className: 'ori-tb-pad-10 ori-flex-row ori-flex-jc' },
          React.createElement(
            Upload,
            {
              className: 'ori-full-width ori-mt-fileUploaderContainer',
              listType: 'picture',
              showUploadList: false,
              beforeUpload: this.beforeUpload,
              onRemove: this.onRemove,
              disabled: disabled || file !== null,
              accept: payload.accept
            },
            this.renderFileList()
          )
        ),
        error && React.createElement(
          'p',
          { className: 'ori-word-break ori-font-xxs ori-font-danger' },
          error
        ),
        file && fileUrl !== '' && !disabled && React.createElement(
          Button,
          {
            className: 'ori-full-width uploadButton',
            disabled: disabled,
            onClick: function onClick(e) {
              _this3.onClickFileUpload(e);
              blurButtonAfterClick(e);
            }
          },
          uploading ? 'Uploading' : 'Upload'
        ),
        !btn_hidden && payload.buttons && payload.buttons.length > 0 && React.createElement(Buttons, {
          buttons: payload.buttons,
          display_count: payload.btnDisplayCount ? payload.btnDisplayCount : default_btn_display_count,
          message: message,
          btn_disabled: btn_disabled,
          handleMsgBtnClick: handleMsgBtnClick,
          showless: showless,
          showmore: showmore
        })
      );
    }
  }]);
  return UploadFileBody;
}(React.PureComponent);

UploadFileBody.propTypes = {
  payload: PropTypes.object.isRequired,
  message: PropTypes.object.isRequired,
  handleMsgBtnClick: PropTypes.func,
  btn_disabled: PropTypes.bool,
  btn_hidden: PropTypes.bool,
  disabled: PropTypes.bool,
  uploading: PropTypes.bool,
  handleFileUpload: PropTypes.func,
  default_btn_display_count: PropTypes.number,
  showmore: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  showless: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};

UploadFileBody.defaultProps = {
  btn_disabled: false,
  btn_hidden: false,
  disabled: false,
  uploading: false,
  default_btn_display_count: 4,
  handleFileUpload: function handleFileUpload() {}
};

/* eslint-disable camelcase */

var UploadFile = function UploadFile(props) {
  return React.createElement(MessageWrapper, _extends({ component: UploadFileBody }, props));
};

UploadFile.propTypes = {
  message: PropTypes.object.isRequired,
  handleMsgBtnClick: PropTypes.func,
  btn_disabled: PropTypes.bool,
  btn_hidden: PropTypes.bool,
  disabled: PropTypes.bool,
  uploading: PropTypes.bool,
  handleFileUpload: PropTypes.func,
  accept: PropTypes.string,
  default_btn_display_count: PropTypes.number
};

UploadFile.defaultProps = {
  btn_disabled: false,
  btn_hidden: false,
  disabled: false,
  uploading: false,
  default_btn_display_count: 4,
  handleFileUpload: function handleFileUpload() {}
};

/* eslint-disable camelcase */

var RangePicker = DatePicker.RangePicker;


dayjs.locale("en");
dayjs.extend(customParseFormat);
dayjs.extend(advancedFormat);
dayjs.extend(localeData);
dayjs.extend(weekday);
dayjs.extend(weekOfYear);
dayjs.extend(weekYear);

var FormMessageBody = function (_React$PureComponent) {
  inherits(FormMessageBody, _React$PureComponent);

  function FormMessageBody(props) {
    classCallCheck(this, FormMessageBody);

    var _this = possibleConstructorReturn(this, (FormMessageBody.__proto__ || Object.getPrototypeOf(FormMessageBody)).call(this, props));

    _this.deleteDetectedErrors = function (key) {
      if (_this.state.detectedErrors[key]) {
        var _this$state$detectedE = _this.state.detectedErrors,
            errorKey = _this$state$detectedE[key],
            restDetectedErrors = objectWithoutProperties(_this$state$detectedE, [key]);

        _this.setState({ detectedErrors: restDetectedErrors });
      }
    };

    _this.validateSelectedField = function (item) {
      var hasError = false;
      var selectedValue = _this.state.selectedValues[item.props.name];
      var isEmpty = (typeof selectedValue === 'string' ? selectedValue.trim().length === 0 : selectedValue.length === 0) && item.props.required;
      if (item.type === 'input' && item.props.minLength) {
        if (!Array.isArray(_this.state.selectedValues[item.props.name]) && _this.state.selectedValues[item.props.name].length < item.props.minLength) {
          hasError = true;
          _this.setState(function (prevState) {
            return {
              detectedErrors: _extends({}, prevState.detectedErrors, defineProperty({}, item.props.name, 'Input must be at least ' + item.props.minLength + ' characters'))
            };
          });
        }
      }
      if (isEmpty) {
        hasError = true;
        _this.setState(function (prevState) {
          return {
            detectedErrors: _extends({}, prevState.detectedErrors, defineProperty({}, item.props.name, 'This is a required field'))
          };
        });
      } else if (item.type === 'input' && item.props.type === 'email') {
        if (!isEmail(_this.state.selectedValues[item.props.name])) {
          hasError = true;
          _this.setState(function (prevState) {
            return {
              detectedErrors: _extends({}, prevState.detectedErrors, defineProperty({}, item.props.name, 'EmailId is not valid'))
            };
          });
        }
      } else if (item.type === 'input' && item.regexPattern) {
        if (!validateField(_this.state.selectedValues[item.props.name], item.regexPattern)) {
          hasError = true;
          _this.setState(function (prevState) {
            return {
              detectedErrors: _extends({}, prevState.detectedErrors, defineProperty({}, item.props.name, 'This field is not valid'))
            };
          });
        }
      }
      return hasError;
    };

    _this.handleFormChange = function (changedValue, errorKey) {
      var payload = _this.props.payload;
      var _this$state = _this.state,
          formData = _this$state.formData,
          selectedValues = _this$state.selectedValues,
          selectedSelect = _this$state.selectedSelect;

      _this.deleteDetectedErrors(errorKey);
      var updatedSelectedValues = _extends({}, selectedValues, changedValue);
      var isNonEmptyFormData = formData && formData.length > 0;

      if (payload.multipleForm) {
        Object.keys(changedValue).forEach(function (name) {
          var item = isNonEmptyFormData && formData.find(function (formItem) {
            return formItem.props.name === name;
          });
          if (item && (item.dependentField && item.dependentField.length > 0 && selectedValues[selectedSelect] && item.dependentField.includes(selectedValues[selectedSelect]) || item.selectedSelect)) {
            updatedSelectedValues[name] = changedValue[name];
          }
        });

        var updatedFormData = isNonEmptyFormData && formData.map(function (item) {
          if (item.dependentSelectFields && item.dependentSelectFields.dependentOn === Object.keys(changedValue)[0]) {
            var dependentFieldValue = updatedSelectedValues[item.dependentSelectFields.dependentOn];
            var dependentOptions = [];
            if (item.dependentSelectFields.options && item.dependentSelectFields.options[dependentFieldValue] && item.dependentSelectFields.options[dependentFieldValue].length > 0) {
              dependentOptions = item.dependentSelectFields.options[dependentFieldValue];
            }
            var updatedItem = _extends({}, item, { props: _extends({}, item.props, { options: dependentOptions }) });

            if (dependentOptions && dependentOptions.length > 0 && !dependentOptions.map(function (option) {
              return option.value;
            }).includes(updatedSelectedValues[item.props.name])) {
              updatedSelectedValues[item.props.name] = undefined;
            }
            return updatedItem;
          }
          return item;
        });

        var changableItem = isNonEmptyFormData && formData.find(function (item) {
          return item.isChangableKey;
        });
        if (changableItem.props.name === Object.keys(changedValue)[0]) {
          var changableKeyName = changableItem.isChangableKey;
          var dependentSelectItem = isNonEmptyFormData && formData.find(function (item) {
            return item.props.name === changableKeyName;
          });
          if (dependentSelectItem) {
            updatedSelectedValues[dependentSelectItem.props.name] = updatedSelectedValues[changableItem.props.name];
          }
        }

        _this.setState({ selectedValues: updatedSelectedValues, formData: updatedFormData }, function () {
          if (payload.autoSubmit) _this.handleSubmit();
        });
      } else {
        _this.setState({ selectedValues: updatedSelectedValues }, function () {
          if (payload.autoSubmit) _this.handleSubmit();
        });
      }
    };

    _this.handleSubmit = function () {
      var payload = _this.props.payload;
      var _this$state2 = _this.state,
          selectedValues = _this$state2.selectedValues,
          detectedErrors = _this$state2.detectedErrors,
          selectedSelect = _this$state2.selectedSelect,
          formData = _this$state2.formData;

      var list = [];
      var hasError = Object.keys(detectedErrors).length > 0;
      var isNonEmptyFormData = formData && formData.length > 0;

      isNonEmptyFormData && formData.forEach(function (item) {
        var isDependentField = item.dependentField && item.dependentField.length > 0 && selectedValues[selectedSelect] && item.dependentField.includes(selectedValues[selectedSelect]) || item.selectedSelect;
        var checkMultipleForm = payload.multipleForm ? isDependentField : true;
        if (checkMultipleForm) {
          if (selectedValues[item.props.name] !== undefined) {
            var obj = { label: item.displayLabel };
            hasError = _this.validateSelectedField(item) || hasError;
            if (item.type === 'datePicker') {
              obj.value = selectedValues[item.props.name].format(item.props.format || 'DD-MM-YYYY');
            } else if (item.type === 'dateRangePicker') {
              obj.value = selectedValues[item.props.name][0].format(item.props.format || 'DD-MM-YYYY').concat(' : ', selectedValues[item.props.name][1].format(item.props.format || 'DD-MM-YYYY'));
            } else if (item.type === 'radioGroup' || item.type === 'select') {
              if (Array.isArray(selectedValues[item.props.name])) {
                var selectedLabels = selectedValues[item.props.name].map(function (selectedValue) {
                  var option = item.props.options.find(function (opt) {
                    return opt.value === selectedValue;
                  });
                  return option.label;
                });
                obj.value = selectedLabels;
              } else {
                var option = item.props.options.find(function (opt) {
                  return opt.value === selectedValues[item.props.name];
                });
                obj.value = option.label;
              }
            } else if (item.type === 'checkbox') {
              var _selectedLabels = [];
              var hiddenLabelsIndexes = [];
              selectedValues[item.props.name].forEach(function (selectedValue, index) {
                var option = item.props.options.find(function (opt) {
                  return opt.value === selectedValue;
                });
                if (option) {
                  _selectedLabels.push(option.label);
                  if (option.hideLabel) {
                    hiddenLabelsIndexes.push(index);
                  }
                }
              });
              obj.value = _selectedLabels;
              if (hiddenLabelsIndexes.length > 0) {
                obj.hiddenIndexes = hiddenLabelsIndexes;
              }
            } else {
              obj.value = selectedValues[item.props.name];
            }
            list.push(obj);
          } else if (item.props.required && !detectedErrors[item.props.name]) {
            hasError = true;
            _this.setState(function (prevState) {
              return {
                detectedErrors: _extends({}, prevState.detectedErrors, defineProperty({}, item.props.name, 'This is required field'))
              };
            });
          }
        }
      });

      if (!hasError) {
        var selectedData = {};
        if (payload.multipleForm) {
          var selectedOption = selectedValues[_this.state.selectedSelect];
          if (selectedOption) {
            Object.keys(selectedValues).forEach(function (fieldName) {
              var formDataItem = isNonEmptyFormData && formData.find(function (item) {
                return item.props && item.props.name === fieldName;
              });
              if (formDataItem && formDataItem.dependentField && formDataItem.dependentField.length > 0 && formDataItem.dependentField.includes(selectedOption)) {
                selectedData[fieldName] = selectedValues[fieldName];
              } else if (formDataItem && formDataItem.props && formDataItem.props.name === selectedSelect) {
                selectedData[fieldName] = selectedValues[fieldName];
              }
            });
          }
        } else {
          selectedData = selectedValues;
        }
        var data = {
          list: list,
          selectedData: selectedData,
          relayData: payload.relayData
        };
        if (payload.submitMessage) {
          data.submitMessage = {
            message: payload.submitMessage,
            containsHtmlMessage: payload.containsHTMLSubmitMessage
          };
        }
        _this.props.onSubmit(data);
      }
    };

    _this.handleEdit = function () {
      _this.setState({
        defaultDisabled: false
      });
    };

    _this.state = {
      currentInput: '',
      selectedValues: props.payload.selectedValues || {},
      detectedErrors: {},
      error: false,
      defaultDisabled: props.payload.defaultDisabled,
      selectedSelect: '',
      formData: props.payload.formData || []
    };
    return _this;
  }

  createClass(FormMessageBody, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _state = this.state,
          selectedValues = _state.selectedValues,
          formData = _state.formData;
      var payload = this.props.payload;

      var updatedSelectedValues = selectedValues || {};
      var isNonEmptyFormData = formData && formData.length > 0;
      var datePayload = isNonEmptyFormData && formData.filter(function (val) {
        return val.type && (val.type === 'datePicker' || val.type === 'dateRangePicker');
      });
      var shouldUpdateState = false;
      datePayload.forEach(function (val) {
        if (val.props && val.props.name && updatedSelectedValues[val.props.name]) {
          var name = val.props.name;
          var format = val.props.format || 'DD-MM-YYYY';

          if (val.type === 'dateRangePicker') {
            var newValue = [dayjs(updatedSelectedValues[name][0], format), dayjs(updatedSelectedValues[name][1], format)];
            if (JSON.stringify(updatedSelectedValues[name]) !== JSON.stringify(newValue)) {
              updatedSelectedValues = _extends({}, updatedSelectedValues, defineProperty({}, name, newValue));
              shouldUpdateState = true;
            }
          } else {
            var _newValue = dayjs(updatedSelectedValues[name], format);
            if (JSON.stringify(updatedSelectedValues[name]) !== JSON.stringify(_newValue)) {
              updatedSelectedValues = _extends({}, updatedSelectedValues, defineProperty({}, name, _newValue));
              shouldUpdateState = true;
            }
          }
        }
      });
      if (shouldUpdateState) {
        this.setState({ selectedValues: updatedSelectedValues });
      }

      if (payload.multipleForm) {
        var selectedSelectItem = isNonEmptyFormData && formData.find(function (item) {
          return item.type === 'select' && item.selectedSelect;
        });
        if (selectedSelectItem) {
          this.setState({
            selectedSelect: selectedSelectItem.props.name
          });
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state2 = this.state,
          detectedErrors = _state2.detectedErrors,
          selectedSelect = _state2.selectedSelect,
          formData = _state2.formData;
      var _props = this.props,
          btn_disabled = _props.btn_disabled,
          message = _props.message,
          handleMsgBtnClick = _props.handleMsgBtnClick,
          btn_hidden = _props.btn_hidden,
          default_btn_display_count = _props.default_btn_display_count,
          disabled = _props.disabled,
          payload = _props.payload,
          showless = _props.showless,
          showmore = _props.showmore;


      return React.createElement(
        'div',
        { className: 'ori-word-break ori-mt-FormMessageContainer' },
        payload.title && React.createElement(HtmlText, {
          textClass: 'ori-no-t-mrgn ori-no-b-mrgn ori-font-bold ori-capitalize-first ori-mt-title',
          text: payload.title,
          isHtml: payload.containsHtmlTitle
        }),
        payload.subtitle && React.createElement(HtmlText, {
          textClass: 'ori-no-b-mrgn ori-no-t-mrgn ori-mt-subtitle',
          text: payload.subtitle,
          isHtml: payload.containsHtmlSubtitle
        }),
        formData && formData.length > 0 && React.createElement(
          React.Fragment,
          null,
          formData.map(function (item, index) {
            if (payload.multipleForm && item.dependentField && item.dependentField.length > 0 && _this2.state.selectedValues[selectedSelect] && !item.dependentField.includes(_this2.state.selectedValues[selectedSelect])) {
              return null;
            }
            switch (item.type) {
              case 'datePicker':
                return React.createElement(
                  'div',
                  { className: 'ori-b-pad-5', key: index },
                  item.title && React.createElement(
                    'p',
                    null,
                    item.containsHtmlTitle ? React.createElement('span', { dangerouslySetInnerHTML: { __html: item.title } }) : React.createElement(
                      'span',
                      { className: 'ori-word-wrap ori-word-break' },
                      item.title
                    ),
                    item.props.required && React.createElement(
                      'span',
                      { style: item.fieldRequiredStyle, className: 'ori-form-field-required' },
                      ' *'
                    )
                  ),
                  React.createElement(DatePicker, _extends({
                    size: 'small',
                    className: 'ori-full-width',
                    style: { maxWidth: '150px' },
                    disabledDate: function disabledDate(c) {
                      return c && item.disabledTimestamp && item.beforeDisabledTimestamp ? c.valueOf() > item.disabledTimestamp || item.beforeDisabledTimestamp > c.valueOf() : c.valueOf() < item.disabledTimestamp;
                    },
                    disabled: disabled || _this2.state.defaultDisabled
                  }, item.props, {
                    value: _this2.state.selectedValues[item.props.name] && dayjs(_this2.state.selectedValues[item.props.name], item.props.format || 'DD-MM-YYYY'),
                    getPopupContainer: function getPopupContainer() {
                      return document.getElementById('oriAppContainer');
                    },
                    onChange: function onChange(selectedDate) {
                      return _this2.handleFormChange(defineProperty({}, item.props.name, selectedDate || undefined), item.props.name);
                    },
                    inputReadOnly: true
                  })),
                  detectedErrors[item.props.name] && React.createElement(
                    'p',
                    { className: 'ori-font-xs ori-font-danger' },
                    detectedErrors[item.props.name]
                  )
                );
              case 'dateRangePicker':
                return React.createElement(
                  'div',
                  { className: 'ori-b-pad-5', key: index },
                  item.title && React.createElement(
                    'p',
                    null,
                    item.containsHtmlTitle ? React.createElement('span', { dangerouslySetInnerHTML: { __html: item.title } }) : React.createElement(
                      'span',
                      { className: 'ori-word-wrap ori-word-break' },
                      item.title
                    ),
                    item.props.required && React.createElement(
                      'span',
                      { style: item.fieldRequiredStyle, className: 'ori-form-field-required' },
                      ' *'
                    )
                  ),
                  React.createElement(RangePicker, _extends({
                    size: 'small',
                    className: 'ori-full-width',
                    disabled: disabled || _this2.state.defaultDisabled
                  }, item.props, {
                    disabledDate: function disabledDate(c) {
                      if (item.disabledDateRange) {
                        if (item.disabledDateRange[0] && item.disabledDateRange[1]) {
                          return !(c && c < item.disabledDateRange[1] && c > item.disabledDateRange[0]);
                        }
                        if (item.disabledDateRange[0]) {
                          return c && c < item.disabledDateRange[0];
                        }
                        if (item.disabledDateRange[1]) {
                          return c && c > item.disabledDateRange[1];
                        }
                      }
                      return false;
                    },
                    value: _this2.state.selectedValues[item.props.name] && _this2.state.selectedValues[item.props.name].length > 0 && _this2.state.selectedValues[item.props.name].map(function (val) {
                      if (val) return dayjs(val, item.props.format || 'DD-MM-YYYY');
                    }),
                    getPopupContainer: function getPopupContainer() {
                      return document.getElementById('oriAppContainer');
                    },
                    onChange: function onChange(selectedDate) {
                      return _this2.handleFormChange(defineProperty({}, item.props.name, selectedDate || undefined), item.props.name);
                    },
                    inputReadOnly: true
                  })),
                  detectedErrors[item.props.name] && React.createElement(
                    'p',
                    { className: 'ori-font-xs ori-font-danger' },
                    detectedErrors[item.props.name]
                  )
                );
              case 'radioGroup':
                return React.createElement(
                  'div',
                  { className: 'ori-b-pad-5', key: index },
                  item.title && React.createElement(
                    'p',
                    null,
                    item.containsHtmlTitle ? React.createElement('span', { dangerouslySetInnerHTML: { __html: item.title } }) : React.createElement(
                      'span',
                      { className: 'ori-word-wrap ori-word-break' },
                      item.title
                    ),
                    item.props.required && React.createElement(
                      'span',
                      { style: item.fieldRequiredStyle, className: 'ori-form-field-required' },
                      ' *'
                    )
                  ),
                  React.createElement(Radio.Group, _extends({
                    size: 'small',
                    className: 'ori-full-width ' + (item.vertical ? 'ori-flex-column' : ''),
                    disabled: disabled || _this2.state.defaultDisabled
                  }, item.props, {
                    value: _this2.state.selectedValues[item.props.name],
                    onChange: function onChange(e) {
                      return _this2.handleFormChange(defineProperty({}, item.props.name, e.target.value), item.props.name);
                    }
                  })),
                  detectedErrors[item.props.name] && React.createElement(
                    'p',
                    { className: 'ori-font-xs ori-font-danger' },
                    detectedErrors[item.props.name]
                  )
                );
              case 'select':
                return React.createElement(
                  'div',
                  { className: 'ori-b-pad-5', key: index },
                  item.title && React.createElement(
                    'p',
                    null,
                    item.containsHtmlTitle ? React.createElement('span', { dangerouslySetInnerHTML: { __html: item.title } }) : React.createElement(
                      'span',
                      { className: 'ori-word-wrap ori-word-break' },
                      item.title
                    ),
                    item.props.required && React.createElement(
                      'span',
                      { style: item.fieldRequiredStyle, className: 'ori-form-field-required' },
                      ' *'
                    )
                  ),
                  React.createElement(Select, _extends({
                    size: 'small',
                    className: 'ori-full-width',
                    getPopupContainer: function getPopupContainer(triggerNode) {
                      return triggerNode.parentNode;
                    },
                    listHeight: 215,
                    disabled: disabled || _this2.state.defaultDisabled
                  }, item.props, {
                    filterOption: function filterOption(input, option) {
                      return option.label.toLowerCase().includes(input.toLowerCase());
                    },
                    filterSort: function filterSort(optionA, optionB) {
                      var currentInput = _this2.state.currentInput.toLowerCase();
                      var firstOptionInitial = optionA.label.toLowerCase().startsWith(currentInput);
                      var secondOptionInitial = optionB.label.toLowerCase().startsWith(currentInput);
                      return firstOptionInitial && !secondOptionInitial ? -1 : !firstOptionInitial && secondOptionInitial ? 1 : optionA.label.toLowerCase().localeCompare(optionB.label.toLowerCase());
                    },
                    onSearch: function onSearch(input) {
                      return _this2.setState({ currentInput: input });
                    },
                    value: _this2.state.selectedValues[item.props.name],
                    onChange: function onChange(value) {
                      return _this2.handleFormChange(defineProperty({}, item.props.name, value), item.props.name);
                    }
                  })),
                  detectedErrors[item.props.name] && React.createElement(
                    'p',
                    { className: 'ori-font-xs ori-font-danger' },
                    detectedErrors[item.props.name]
                  )
                );
              case 'input':
                return React.createElement(
                  'div',
                  { className: 'ori-b-pad-5', key: index },
                  item.title && React.createElement(
                    'p',
                    null,
                    item.containsHtmlTitle ? React.createElement('span', { dangerouslySetInnerHTML: { __html: item.title } }) : React.createElement(
                      'span',
                      { className: 'ori-word-wrap ori-word-break' },
                      item.title
                    ),
                    item.props.required && React.createElement(
                      'span',
                      { style: item.fieldRequiredStyle, className: 'ori-form-field-required' },
                      ' *'
                    )
                  ),
                  React.createElement(Input, _extends({
                    size: 'small',
                    className: 'ori-full-width',
                    disabled: disabled || _this2.state.defaultDisabled
                  }, item.props, {
                    value: _this2.state.selectedValues[item.props.name],
                    onChange: function onChange(e) {
                      if (item.props.maxLength) {
                        if (e.target.value.length <= item.props.maxLength) {
                          _this2.handleFormChange(defineProperty({}, item.props.name, e.target.value), item.props.name);
                        }
                      } else {
                        _this2.handleFormChange(defineProperty({}, item.props.name, e.target.value), item.props.name);
                      }
                    }
                  })),
                  detectedErrors[item.props.name] && React.createElement(
                    'p',
                    { className: 'ori-font-xs ori-font-danger' },
                    detectedErrors[item.props.name]
                  )
                );
              case 'rating':
                return React.createElement(
                  'div',
                  { className: 'ori-b-pad-5', key: index },
                  item.title && React.createElement(
                    'p',
                    null,
                    item.containsHtmlTitle ? React.createElement('span', { dangerouslySetInnerHTML: { __html: item.title } }) : React.createElement(
                      'span',
                      { className: 'ori-word-wrap ori-word-break' },
                      item.title
                    ),
                    item.props.required && React.createElement(
                      'span',
                      { style: item.fieldRequiredStyle, className: 'ori-form-field-required' },
                      ' *'
                    )
                  ),
                  item.showImage && item.showImage.enable && item.showImage.images && Array.isArray(item.showImage.images) && item.showImage.images.length > 0 && React.createElement(
                    'div',
                    { className: 'ori-rating-image-container', style: { minWidth: '250px', display: 'flex', justifyContent: 'center' } },
                    item.showImage.images.map(function (imageData, index) {
                      return React.createElement(
                        'div',
                        {
                          key: index,
                          style: {
                            width: '40%',
                            verticalAlign: 'middle',
                            pointerEvents: _this2.props.disabled || _this2.state.defaultDisabled ? 'none' : 'auto',
                            opacity: _this2.props.disabled || _this2.state.defaultDisabled ? '0.4' : '1'
                          },
                          className: 'ori-cursor-ptr ori-text-center ori-overflow-hidden ori-flex-column ori-flex-ac ori-font-xs ' + (_this2.state.selectedValues[item.props.name] === imageData.rating ? 'ori-font-primary ori-emoji-container-selected' : 'ori-font-light ori-emoji-container'),
                          onClick: function onClick() {
                            _this2.handleFormChange(defineProperty({}, item.props.name, imageData.rating), item.props.name);
                          }
                        },
                        imageData.image && React.createElement(
                          'div',
                          { style: { height: '45px', opacity: 0.8 }, className: 'ori-flex-ac ori-flex ' + (_this2.state.selectedValues[item.props.name] === imageData.rating ? 'ori-selected-emoji-rating' : 'ori-unselected-emoji-rating') },
                          React.createElement('img', { alt: 'rating', height: _this2.state.selectedValues[item.props.name] === imageData.rating ? '30px' : '24px', src: imageData.image })
                        ),
                        imageData.text && React.createElement('p', { dangerouslySetInnerHTML: { __html: imageData.text } })
                      );
                    })
                  ),
                  (item.showImage === undefined || item.showImage.enable === false) && React.createElement(Rate, _extends({
                    disabled: disabled || _this2.state.defaultDisabled
                  }, item.props, {
                    onChange: function onChange(value) {
                      return _this2.handleFormChange(defineProperty({}, item.props.name, value), item.props.name);
                    }
                  })),
                  detectedErrors[item.props.name] && React.createElement(
                    'p',
                    { className: 'ori-font-xs ori-font-danger' },
                    detectedErrors[item.props.name]
                  )
                );
              case 'checkbox':
                return React.createElement(
                  'div',
                  { className: 'ori-b-pad-5 ori-full-width', key: index },
                  item.title && React.createElement(
                    'p',
                    null,
                    item.containsHtmlTitle ? React.createElement('span', { dangerouslySetInnerHTML: { __html: item.title } }) : React.createElement(
                      'span',
                      { className: 'ori-word-wrap ori-word-break' },
                      item.title
                    ),
                    item.props.required && React.createElement(
                      'span',
                      { style: item.fieldRequiredStyle, className: 'ori-form-field-required' },
                      ' *'
                    )
                  ),
                  item.props.options && item.props.options.length > 0 && React.createElement(
                    'div',
                    { className: 'ori-mt-checkboxWithMediaContainer' },
                    React.createElement(Checkbox.Group, {
                      className: 'ori-full-width',
                      disabled: disabled || _this2.state.defaultDisabled,
                      value: _this2.state.selectedValues[item.props.name],
                      options: item.props.options.map(function (option) {
                        return _extends({}, option, {
                          label: React.createElement('span', { dangerouslySetInnerHTML: { __html: option.label } })
                        });
                      }),
                      onChange: function onChange(checked) {
                        return _this2.handleFormChange(defineProperty({}, item.props.name, checked), item.props.name);
                      }
                    })
                  ),
                  detectedErrors[item.props.name] && React.createElement(
                    'p',
                    { className: 'ori-font-xs ori-font-danger' },
                    detectedErrors[item.props.name]
                  )
                );
              default:
                return null;
            }
          }),
          this.state.error && React.createElement(
            'p',
            { className: 'ori-font-xs ori-font-danger' },
            'Required field are missing'
          ),
          !payload.autoSubmit && React.createElement(
            Button,
            {
              size: 'small',
              className: 'ori-btn-submit',
              disabled: disabled,
              onClick: function onClick(e) {
                _this2.handleSubmit(e);
                blurButtonAfterClick(e);
              }
            },
            payload.submitBtnText ? payload.submitBtnText : 'Submit'
          ),
          payload.defaultDisabled && React.createElement(
            Button,
            {
              size: 'small',
              className: 'ori-btn-edit',
              disabled: disabled,
              onClick: function onClick(e) {
                _this2.handleEdit(e);
                blurButtonAfterClick(e);
              }
            },
            payload.editBtnText ? payload.editBtnText : 'Edit'
          )
        ),
        !btn_hidden && payload.buttons && payload.buttons.length > 0 && React.createElement(Buttons, {
          buttons: payload.buttons,
          display_count: payload.btnDisplayCount ? payload.btnDisplayCount : default_btn_display_count,
          message: message,
          btn_disabled: btn_disabled,
          handleMsgBtnClick: handleMsgBtnClick,
          showmore: showmore,
          showless: showless
        })
      );
    }
  }]);
  return FormMessageBody;
}(React.PureComponent);

FormMessageBody.propTypes = {
  payload: PropTypes.object.isRequired,
  message: PropTypes.object.isRequired,
  handleMsgBtnClick: PropTypes.func,
  btn_disabled: PropTypes.bool,
  disabled: PropTypes.bool,
  btn_hidden: PropTypes.bool,
  default_btn_display_count: PropTypes.number,
  onSubmit: PropTypes.func,
  showmore: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  showless: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};

FormMessageBody.defaultProps = {
  btn_disabled: false,
  btn_hidden: false,
  disabled: false,
  checkbox_disabled: false,
  default_btn_display_count: 4
};

/* eslint-disable camelcase */

var FormMessage = function FormMessage(props) {
  return React.createElement(MessageWrapper, _extends({ component: FormMessageBody }, props));
};

FormMessage.propTypes = {
  message: PropTypes.object.isRequired,
  handleMsgBtnClick: PropTypes.func,
  btn_disabled: PropTypes.bool,
  disabled: PropTypes.bool,
  btn_hidden: PropTypes.bool,
  default_btn_display_count: PropTypes.number,
  onSubmit: PropTypes.func,
  preferLang: PropTypes.string
};

FormMessage.defaultProps = {
  btn_disabled: false,
  btn_hidden: false,
  disabled: false,
  checkbox_disabled: false,
  default_btn_display_count: 4
};

/* eslint-disable camelcase */

var SeatMapBody = function (_React$PureComponent) {
  inherits(SeatMapBody, _React$PureComponent);

  function SeatMapBody(props) {
    classCallCheck(this, SeatMapBody);

    var _this = possibleConstructorReturn(this, (SeatMapBody.__proto__ || Object.getPrototypeOf(SeatMapBody)).call(this, props));

    _this.handleSeatSelection = function (seat, passenger) {
      var disabled = _this.props.disabled;

      var reserved = false;
      if (seat.isAllowed && !disabled) {
        _this.state.selectedSeats.map(function (rseat) {
          if (seat.name === rseat.seatNo) {
            reserved = true;
          }
        });
        _this.state.selectedSeats.map(function (rseat) {
          if (rseat.name === passenger && !reserved) {
            rseat.seatNo = seat.name;
            rseat.cost = seat.cost;
            rseat.type = seat.type;
            rseat.color = seat.color;
            rseat.isAllowed = seat.isAllowed;
            rseat.status = seat.status;
          }
        });
        _this.setState(function (prevState) {
          return {
            selectedSeats: [].concat(toConsumableArray(prevState.selectedSeats)),
            submitButtonText: 'Proceed for all',
            randomChecked: false
          };
        });
      }
    };

    _this.handleSubmit = function () {
      var _this$props = _this.props,
          message = _this$props.message,
          onSubmit = _this$props.onSubmit;
      var selectedSeats = _this.state.selectedSeats;

      var list = [];
      selectedSeats.map(function (item) {
        var obj = {};
        obj.label = item.name;
        obj.value = item.seatNo + ' ' + item.cost;
        list.push(obj);
      });
      if (selectedSeats.length > 0) {
        var data = {
          relayData: message.payload.relayData,
          selectedData: _this.state.selectedSeats,
          list: list
        };
        onSubmit(data, message);
      }
    };

    _this.getInitials = function (name) {
      var parts = name.split(' ');
      var initials = '';
      for (var i = 0; i < parts.length; i++) {
        if (parts[i].length > 0 && parts[i] !== '') {
          initials += parts[i][0];
        }
      }
      return initials;
    };

    _this.randomOnChange = function (e) {
      _this.setState({
        randomChecked: e.target.checked,
        submitButtonText: 'Proceed to All'
      });
      if (e.target.checked === true) {
        _this.state.selectedSeats.map(function (rseat) {
          if (rseat.name === _this.state.selectedPassenger) {
            rseat.seatNo = '';
            rseat.cost = '';
            rseat.random = true;
            rseat.type = '';
            rseat.color = '';
            rseat.isAllowed = '';
            rseat.status = '';
          }
        });
      } else {
        _this.state.selectedSeats.map(function (rseat) {
          if (rseat.name === _this.state.selectedPassenger) {
            rseat.random = false;
          }
        });
      }
    };

    _this.handleClear = function () {
      _this.state.selectedSeats.map(function (rseat) {
        if (rseat.name === _this.state.selectedPassenger) {
          rseat.seatNo = '';
          rseat.cost = '';
          rseat.type = '';
          rseat.color = '';
          rseat.isAllowed = '';
          rseat.status = '';
        }
        _this.setState(function (prevState) {
          return {
            selectedSeats: [].concat(toConsumableArray(prevState.selectedSeats))
          };
        });
      });
    };

    _this.handleChange = function (value) {
      _this.setState({
        selectedPassenger: value,
        randomChecked: false
      });
      _this.state.selectedSeats.map(function (rseat) {
        if (rseat.name === value && rseat.random === true) {
          _this.setState({
            randomChecked: true
          });
        }
      });
    };

    _this.renderSeats = function (rseats, seat) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = rseats[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var rseat = _step.value;

          if (rseat.seatNo === seat.name) {
            return React.createElement(
              'div',
              {
                style: {
                  width: 25,
                  height: 25
                },
                className: 'ori-flex ori-flex-center ori-border-radius-3 ' + (rseat.name === _this.state.selectedPassenger ? 'ori-seat-selected' : 'ori-seat-default')
              },
              React.createElement(
                'p',
                { className: 'ori-font-default ori-font-xxs ori-font-bold' },
                _this.getInitials(rseat.name)
              )
            );
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      if (seat.isAllowed === true) {
        return React.createElement(SeatIcon, null);
      } else {
        return React.createElement(CloseIcon, null);
      }
    };

    _this.state = {
      selectedPassenger: '',
      selectedSeats: props.payload.selectedSeats,
      randomChecked: '',
      submitButtonText: props.payload.submitButtonText
    };
    return _this;
  }

  createClass(SeatMapBody, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          btn_disabled = _props.btn_disabled,
          message = _props.message,
          handleMsgBtnClick = _props.handleMsgBtnClick,
          btn_hidden = _props.btn_hidden,
          default_btn_display_count = _props.default_btn_display_count,
          payload = _props.payload,
          disabled = _props.disabled,
          showless = _props.showless,
          showmore = _props.showmore;


      return React.createElement(
        'div',
        { className: 'ori-word-break ori-mt-SeatMapContainer' },
        payload.title && React.createElement('div', {
          className: 'ori-font-bold ori-no-b-mrgn ori-font-sm ori-word-break-all',
          dangerouslySetInnerHTML: { __html: payload.title }
        }),
        payload.subtitle && React.createElement('div', {
          className: 'ori-font-13 ori-no-b-mrgn ori-word-break-all',
          dangerouslySetInnerHTML: { __html: payload.subtitle }
        }),
        React.createElement(
          'div',
          { className: 'ori-flex-row ori-b-mrgn-10' },
          payload.passengerSelect && payload.passengerSelect.options.length > 0 && React.createElement(Select, _extends({
            className: 'ori-full-width',
            size: 'small'
          }, payload.passengerSelect, {
            getPopupContainer: function getPopupContainer(triggerNode) {
              return triggerNode.parentNode;
            },
            onChange: this.handleChange
          })),
          payload.clearSelection && React.createElement(
            Button,
            {
              onClick: this.handleClear,
              size: 'small',
              className: 'ori-l-mrgn-5 ori-btn-clear'
            },
            'Clear'
          )
        ),
        payload.seatArrangement && payload.seatArrangement.length > 0 && React.createElement(
          React.Fragment,
          null,
          React.createElement(
            'p',
            { className: 'ori-text-center ori-font-xxs ori-b-mrgn-5 ori-t-mrgn-3' },
            React.createElement(
              'span',
              { className: 'ori-bg-default ori-font-bold ori-lr-pad-10 ori-border-radius-10 ori-tb-pad-3' },
              'FRONT'
            )
          ),
          payload.seatArrangement.map(function (row, index) {
            return React.createElement(
              'div',
              { key: index, className: 'ori-b-pad-5 ori-flex-row' },
              React.createElement(
                'div',
                {
                  className: 'ori-flex ori-flex-center',
                  style: {
                    height: 25,
                    width: 25
                  } },
                row.rowName
              ),
              row.seats.map(function (seat, cindex) {
                return React.createElement(
                  React.Fragment,
                  { key: cindex },
                  React.createElement(
                    Tooltip,
                    {
                      placement: 'top',
                      mouseEnterDelay: 1,
                      title: React.createElement(
                        React.Fragment,
                        null,
                        React.createElement(
                          'span',
                          null,
                          'Type: ',
                          seat.type
                        ),
                        ' ',
                        React.createElement('br', null),
                        React.createElement(
                          'span',
                          null,
                          'Seat Number: ',
                          seat.name,
                          ' '
                        ),
                        React.createElement('br', null),
                        React.createElement(
                          'span',
                          null,
                          'Status: ',
                          seat.status
                        ),
                        ' ',
                        React.createElement('br', null),
                        seat.isAllowed && React.createElement(
                          'span',
                          null,
                          'Cost: ',
                          seat.cost
                        )
                      ),
                      destroyTooltipOnHide: true
                    },
                    React.createElement(
                      'div',
                      {
                        style: {
                          backgroundColor: seat.color,
                          opacity: seat.isAllowed && !disabled ? '' : '0.5',
                          marginRight: 3,
                          height: 25,
                          width: 25
                        },
                        className: 'ori-flex ori-flex-center ori-border-radius-3 ori-font-white ' + (seat.isAllowed && !disabled ? 'ori-cursor-ptr' : 'ori-cursor-not-allowed'),
                        onClick: function onClick() {
                          return _this2.handleSeatSelection(seat, _this2.state.selectedPassenger);
                        }
                      },
                      _this2.renderSeats(_this2.state.selectedSeats, seat)
                    )
                  ),
                  seat.isNextGap && React.createElement('div', {
                    className: 'ori-full-flex',
                    style: {
                      height: 25,
                      width: 30
                    }
                  })
                );
              })
            );
          }),
          payload.randomSelection && React.createElement(
            'div',
            null,
            React.createElement(Checkbox, {
              onChange: this.randomOnChange,
              checked: this.state.randomChecked,
              className: 'ori-r-mrgn-5'
            }),
            React.createElement(
              'span',
              null,
              'Randomly assign a seat'
            )
          ),
          React.createElement(
            Button,
            {
              size: 'small',
              className: 'ori-t-mrgn-5 ori-btn-submit',
              style: { width: '270px' },
              onClick: function onClick(e) {
                _this2.handleSubmit(e);
                blurButtonAfterClick(e);
              },
              block: true
            },
            this.state.submitButtonText
          )
        ),
        !btn_hidden && payload.buttons && payload.buttons.length > 0 && React.createElement(Buttons, {
          buttons: payload.buttons,
          display_count: payload.btnDisplayCount ? payload.btnDisplayCount : default_btn_display_count,
          message: message,
          btn_disabled: btn_disabled,
          handleMsgBtnClick: handleMsgBtnClick,
          showmore: showmore,
          showless: showless
        })
      );
    }
  }]);
  return SeatMapBody;
}(React.PureComponent);

SeatMapBody.propTypes = {
  payload: PropTypes.object.isRequired,
  message: PropTypes.object.isRequired,
  handleMsgBtnClick: PropTypes.func,
  btn_disabled: PropTypes.bool,
  disabled: PropTypes.bool,
  btn_hidden: PropTypes.bool,
  default_btn_display_count: PropTypes.number,
  onSubmit: PropTypes.func,
  showmore: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  showless: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};

SeatMapBody.defaultProps = {
  btn_disabled: false,
  btn_hidden: false,
  disabled: false,
  checkbox_disabled: false,
  default_btn_display_count: 4
};

/* eslint-disable camelcase */

var SeatMap = function SeatMap(props) {
  return React.createElement(MessageWrapper, _extends({ component: SeatMapBody }, props));
};

SeatMap.propTypes = {
  message: PropTypes.object.isRequired,
  handleMsgBtnClick: PropTypes.func,
  btn_disabled: PropTypes.bool,
  disabled: PropTypes.bool,
  btn_hidden: PropTypes.bool,
  default_btn_display_count: PropTypes.number,
  onSubmit: PropTypes.func,
  preferLang: PropTypes.string
};

SeatMap.defaultProps = {
  btn_disabled: false,
  btn_hidden: false,
  disabled: false,
  checkbox_disabled: false,
  default_btn_display_count: 4
};

var css$7 = ".UploadedDocumentBody-module_previewOverlayContainer__3Gp_F {\n  z-index: 9999999;\n  position: fixed;\n  flex: 1;\n  padding: 30px;\n  background-color: rgba(0, 0, 0, 0.2); }\n\n.UploadedDocumentBody-module_previewClose__1Uim9 {\n  position: absolute !important;\n  top: -25px !important;\n  right: -25px !important;\n  border-radius: 50% !important; }\n";
var styles$7 = { "previewOverlayContainer": "UploadedDocumentBody-module_previewOverlayContainer__3Gp_F", "previewClose": "UploadedDocumentBody-module_previewClose__1Uim9" };
styleInject(css$7);

/* eslint-disable react/self-closing-comp */

var UploadedDocumentBody = function (_React$PureComponent) {
  inherits(UploadedDocumentBody, _React$PureComponent);

  function UploadedDocumentBody() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, UploadedDocumentBody);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = UploadedDocumentBody.__proto__ || Object.getPrototypeOf(UploadedDocumentBody)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      showPreview: false
    }, _this.renderIcon = function () {
      var message = _this.props.message;

      var fileSplit = message.payload.fileName.split('.');
      var fileType = fileSplit[fileSplit.length - 1].toLowerCase();
      if (fileType === 'pdf') return React.createElement(PdfIcon, { size: 25 });else if (fileType === 'xlsx') return React.createElement(ExcelIcon, { size: 25 });else if (fileType === 'docx') return React.createElement(TextIcon, { size: 25 });else if (message.payload.fileType.indexOf('image/') !== -1) return React.createElement(ImageIcon, { size: 25 });else return React.createElement(FileIcon$1, { size: 25 });
    }, _this.handlePreviewFile = function () {
      _this.setState({ showPreview: true });
    }, _this.closePreview = function (e) {
      _this.setState({ showPreview: false });
    }, _this.renderFile = function () {
      var _this$props = _this.props,
          message = _this$props.message,
          image_preview = _this$props.image_preview;

      if (message.payload.fileType.indexOf('image/') !== -1) {
        return React.createElement(
          'div',
          { className: 'ori-bg-white ori-border-radius-3 ori-relative ori-upload-preview' },
          React.createElement('img', {
            src: message.payload.fileUrl,
            alt: 'No Preview found',
            style: { width: '100%', maxHeight: '70vh' }
          }),
          !image_preview.hidePreviewContent && React.createElement(
            'div',
            { className: 'ori-flex-row ori-flex-ac ori-pad-10' },
            React.createElement(
              'p',
              { className: 'ori-font-bold ori-line-height-1 ori-font-default' },
              message.payload.fileName
            ),
            message.payload.fileSize && React.createElement(
              'span',
              { className: 'ori-font-xs ori-lr-pad-10 ori-font-light' },
              formatSizeUnits(message.payload.fileSize)
            )
          ),
          image_preview.showPreviewCrossIcon ? React.createElement(Button, { size: 'small', className: styles$7.previewClose + ' ori-image-preview-icon', icon: React.createElement(CloseIcon, null), onClick: _this.closePreview }) : React.createElement(
            'div',
            { className: 'ori-flex-row ori-flex-jc ori-pad-10' },
            ' ',
            React.createElement(
              Button,
              { type: 'danger', size: 'small', className: 'ori-image-preview-btn', onClick: _this.closePreview },
              'Close'
            )
          )
        );
      }
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(UploadedDocumentBody, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          message = _props.message,
          handleDocxFileUpload = _props.handleDocxFileUpload,
          downloadFile = _props.downloadFile;

      return React.createElement(
        React.Fragment,
        null,
        message.payload.fileType.indexOf('image/') !== -1 && !message.payload.isDownloadable && message.payload.fileUrl && React.createElement('img', {
          className: 'ori-cursor-ptr ori-b-mrgn-5 ori-thumnail',
          src: message.payload.fileUrl,
          style: { width: '100%', maxHeight: '70vh' },
          alt: 'No preview found',
          onClick: this.handlePreviewFile
        }),
        React.createElement(
          'div',
          { className: 'ori-flex ori-downloadfileContainer' },
          React.createElement(
            'div',
            { className: 'ori-t-mrgn-3' },
            this.renderIcon()
          ),
          React.createElement(
            'div',
            { className: 'ori-lr-mrgn-10' },
            React.createElement(
              'p',
              null,
              message.payload.fileName
            ),
            message.payload.pages > 0 && React.createElement(
              'span',
              { className: 'ori-r-mrgn-5 ori-font-xs ori-font-header-light' },
              message.payload.pages,
              ' pages'
            ),
            React.createElement(
              'span',
              { className: 'ori-font-xs ori-font-header-light' },
              formatSizeUnits(message.payload.fileSize)
            )
          ),
          React.createElement(
            'div',
            { className: 'ori-text-center ori-t-mrgn-3' },
            message.status === 'pending' ? React.createElement(LoadingIcon, { className: 'ori-rotate ori-infinite', size: 25 }) : message.status === 'failed' ? React.createElement(
              React.Fragment,
              null,
              React.createElement(LoadingIcon, {
                className: 'ori-cursor-ptr ori-file-loader',
                size: 25,
                onClick: function onClick() {
                  return handleDocxFileUpload({
                    cmid: message.cmid,
                    payload: message.payload
                  }, 'retry');
                }
              }),
              React.createElement(
                'p',
                { className: 'ori-font-xs' },
                'Retry'
              )
            ) : message.payload.fileType.indexOf('image/') === -1 || message.payload.isDownloadable ? React.createElement(DownloadIcon, {
              className: 'ori-cursor-ptr ori-file-loader',
              size: 25,
              onClick: function onClick() {
                return downloadFile(message.payload);
              }
            }) : null
          )
        ),
        this.state.showPreview && React.createElement(
          'div',
          {
            className: 'ori-flex-row ori-flex-center ori-align-full ori-fixed ' + styles$7.previewOverlayContainer
          },
          this.renderFile()
        )
      );
    }
  }]);
  return UploadedDocumentBody;
}(React.PureComponent);

UploadedDocumentBody.propTypes = {
  message: PropTypes.object.isRequired,
  handleDocxFileUpload: PropTypes.func,
  downloadFile: PropTypes.func,
  image_preview: PropTypes.object
};
UploadedDocumentBody.defaultProps = {
  handleDocxFileUpload: function handleDocxFileUpload() {},
  downloadFile: function downloadFile() {},
  image_preview: {}
};

/* eslint-disable camelcase */

var UploadedDocument = function UploadedDocument(props) {
  return React.createElement(MessageWrapper, _extends({ component: UploadedDocumentBody }, props));
};

UploadedDocument.propTypes = {
  message: PropTypes.object.isRequired,
  image_preview: PropTypes.object
};

UploadedDocument.defaultProps = {
  image_preview: {}
};

// export * from './messagetypes/dishtv/Recharge'
// export * from './messagetypes/dishtv/RechargeDetails'
// export * from './messagetypes/dishtv/Offers'
// export * from './messagetypes/dishtv/RechargeHistory'

exports.OverflowWrapper = OverflowWrapper;
exports.TextMessage = TextMessage;
exports.TextWithMedia = TextWithMedia;
exports.ListMessage = ListMessage;
exports.CarouselWithButtons = CarouselWithButtons;
exports.CheckboxWithMedia = CheckboxWithMedia;
exports.PromptMsg = PromptMsg;
exports.UploadFile = UploadFile;
exports.FormMessage = FormMessage;
exports.SeatMap = SeatMap;
exports.UploadedDocument = UploadedDocument;
//# sourceMappingURL=index.js.map
