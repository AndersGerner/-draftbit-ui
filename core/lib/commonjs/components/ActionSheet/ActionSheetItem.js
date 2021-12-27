"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _utilities = require("../../utilities");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ActionSheetItem = _ref => {
  let {
    label,
    style,
    color,
    onPress
  } = _ref;
  const {
    textStyles,
    viewStyles
  } = (0, _utilities.extractStyles)(style);
  return /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    activeOpacity: 0.7,
    style: [styles.wrapper, viewStyles],
    onPress: onPress
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: [styles.label, textStyles, {
      color
    }]
  }, label));
};

const styles = _reactNative.StyleSheet.create({
  wrapper: {
    borderBottomWidth: _reactNative.StyleSheet.hairlineWidth,
    borderBottomColor: "#CCCCCC",
    backgroundColor: "#F1F1F1",
    minHeight: 50,
    overflow: "hidden",
    display: "flex",
    justifyContent: "center"
  },
  label: {
    fontSize: 16,
    textAlign: "center",
    color: "#0A84FF",
    fontWeight: "500",
    overflow: "hidden",
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignSelf: "center"
  }
});

var _default = ActionSheetItem;
exports.default = _default;
//# sourceMappingURL=ActionSheetItem.js.map