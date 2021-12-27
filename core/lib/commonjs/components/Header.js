"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _theming = require("../theming");

var _Divider = _interopRequireDefault(require("./Divider"));

var _Touchable = _interopRequireDefault(require("./Touchable"));

var _Config = _interopRequireDefault(require("./Config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Header = _ref => {
  let {
    Icon,
    titleTypeStyle,
    titleColor,
    title,
    buttonText,
    dividerTopMargin,
    icon,
    onPress,
    style,
    theme: {
      colors,
      typography
    }
  } = _ref;
  return /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [styles.container, style]
  }, /*#__PURE__*/React.createElement(_reactNative.View, {
    style: styles.topContainer
  }, /*#__PURE__*/React.createElement(_reactNative.Text, {
    style: [titleTypeStyle, {
      color: titleColor,
      flex: 1
    }],
    numberOfLines: 1
  }, title), onPress && /*#__PURE__*/React.createElement(_Touchable.default, {
    style: {
      alignSelf: "center",
      marginLeft: 12
    },
    onPress: onPress
  }, /*#__PURE__*/React.createElement(_reactNative.View, {
    style: styles.buttonContainer
  }, /*#__PURE__*/React.createElement(_reactNative.Text, {
    style: [typography.subtitle2, {
      color: colors.light,
      marginRight: 8
    }],
    numberOfLines: 1
  }, buttonText), /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: _Config.default.headerIconSize,
    color: colors.light
  })))), /*#__PURE__*/React.createElement(_Divider.default, {
    style: {
      marginTop: dividerTopMargin || 16
    }
  }));
};

const styles = _reactNative.StyleSheet.create({
  container: {
    alignSelf: "stretch"
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  }
});

var _default = (0, _theming.withTheme)(Header);

exports.default = _default;
//# sourceMappingURL=Header.js.map