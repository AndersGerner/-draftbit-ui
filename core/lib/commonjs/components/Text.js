"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Link = exports.BaseLink = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _theming = require("../theming");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Text extends React.Component {
  constructor() {
    super(...arguments);

    _defineProperty(this, "_root", void 0);
  }

  setNativeProps(args) {
    return this._root && this._root.setNativeProps(args);
  }

  render() {
    const {
      style,
      ...rest
    } = this.props;
    const writingDirection = _reactNative.I18nManager.isRTL ? "rtl" : "ltr";
    return /*#__PURE__*/React.createElement(_reactNative.Text, _extends({}, rest, {
      ref: c => {
        this._root = c;
      },
      style: [{
        textAlign: "left",
        writingDirection
      }, style]
    }));
  }

}

const BaseLink = _ref => {
  let {
    style,
    theme,
    title,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement(Text, _extends({
    hitSlop: 8,
    style: [{
      color: theme.colors.primary,
      alignSelf: "baseline"
    }, style],
    theme: theme
  }, props), title);
};

exports.BaseLink = BaseLink;
const Link = (0, _theming.withTheme)(BaseLink);
exports.Link = Link;

var _default = (0, _theming.withTheme)(Text);

exports.default = _default;
//# sourceMappingURL=Text.js.map