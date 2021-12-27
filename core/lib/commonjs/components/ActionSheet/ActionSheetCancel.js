"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ActionSheetItem = _interopRequireDefault(require("./ActionSheetItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ActionSheetCancel = _ref => {
  let {
    label = "Cancel",
    color,
    style,
    onPress
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_ActionSheetItem.default, {
    label: label,
    color: color || "#FF453A",
    style: [style],
    onPress: onPress
  });
};

var _default = ActionSheetCancel;
exports.default = _default;
//# sourceMappingURL=ActionSheetCancel.js.map