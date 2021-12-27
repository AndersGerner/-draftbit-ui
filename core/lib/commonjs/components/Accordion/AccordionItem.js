"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _Text = _interopRequireDefault(require("../Text"));

var _utilities = require("../../utilities");

var _theming = require("../../theming");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const AccordionItem = _ref => {
  let {
    Icon,
    icon,
    label,
    style,
    iconColor,
    theme,
    ...rest
  } = _ref;
  const {
    textStyles,
    viewStyles
  } = (0, _utilities.extractStyles)(style);
  return /*#__PURE__*/React.createElement(_reactNative.Pressable, _extends({
    style: [styles.container, viewStyles]
  }, rest), /*#__PURE__*/React.createElement(_reactNative.View, {
    style: styles.row
  }, icon ? /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 24,
    color: iconColor || theme.colors.primary
  }) : null, /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [styles.item, styles.content]
  }, /*#__PURE__*/React.createElement(_Text.default, {
    selectable: false,
    style: textStyles
  }, label))));
};

const styles = _reactNative.StyleSheet.create({
  container: {
    padding: 8
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 8
  },
  item: {
    marginVertical: 6,
    paddingLeft: 8
  },
  content: {
    flex: 1,
    justifyContent: "center"
  }
});

var _default = (0, _theming.withTheme)(AccordionItem);

exports.default = _default;
//# sourceMappingURL=AccordionItem.js.map