"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _Touchable = _interopRequireDefault(require("./Touchable"));

var _CircleImage = _interopRequireDefault(require("./CircleImage"));

var _theming = require("../theming");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const AvatarEdit = _ref => {
  let {
    Icon,
    image,
    size = 80,
    onPress = () => {},
    style,
    theme,
    ...rest
  } = _ref;
  const colorStyles = {
    editBackgroundColor: theme.colors.primary,
    editIconColor: theme.colors.surface,
    editBorderColor: theme.colors.surface
  };
  const dimensions = {
    width: size,
    height: size
  };
  return /*#__PURE__*/React.createElement(_reactNative.View, _extends({
    style: [style, dimensions]
  }, rest), /*#__PURE__*/React.createElement(_Touchable.default, {
    onPress: onPress
  }, /*#__PURE__*/React.createElement(_CircleImage.default, {
    source: image,
    size: size
  }), /*#__PURE__*/React.createElement(_reactNative.View, {
    style: {
      position: "absolute",
      top: -3,
      right: -3,
      borderColor: colorStyles.editBorderColor,
      backgroundColor: colorStyles.editBackgroundColor,
      borderRadius: size * (3 / 16),
      padding: size * (3 / 32)
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "MaterialIcons/edit",
    color: colorStyles.editIconColor,
    size: size * (3 / 16)
  }))));
};

var _default = (0, _theming.withTheme)(AvatarEdit);

exports.default = _default;
//# sourceMappingURL=AvatarEdit.js.map