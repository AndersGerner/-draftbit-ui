"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _Portal = _interopRequireDefault(require("../Portal/Portal"));

var _Touchable = _interopRequireDefault(require("../Touchable"));

var _ActionSheetCancel = _interopRequireDefault(require("./ActionSheetCancel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ActionSheet = _ref => {
  let {
    visible = false,
    onClose,
    children
  } = _ref;
  return visible ? /*#__PURE__*/_react.default.createElement(_Portal.default, null, /*#__PURE__*/_react.default.createElement(_Touchable.default, {
    style: styles.wrapper,
    onPress: onClose
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.overlay
  }), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.groupWrapper
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.group
  }, _react.default.Children.toArray(children).filter(child => (child === null || child === void 0 ? void 0 : child.type) !== _ActionSheetCancel.default)), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.group
  }, _react.default.Children.toArray(children).filter(child => child.type === _ActionSheetCancel.default))))) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null);
};

const styles = _reactNative.StyleSheet.create({
  wrapper: {
    flex: 1,
    display: "flex",
    flexDirection: "column"
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#000000",
    opacity: 0.3
  },
  groupWrapper: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    display: "flex",
    marginBottom: 25
  },
  group: {
    display: "flex",
    flexDirection: "column",
    borderRadius: 10,
    marginHorizontal: 7,
    marginVertical: 2.5,
    overflow: "hidden"
  }
});

var _default = ActionSheet;
exports.default = _default;
//# sourceMappingURL=ActionSheet.js.map