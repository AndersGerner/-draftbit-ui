"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _theming = require("../theming");

var _Touchable = _interopRequireDefault(require("./Touchable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const getWidth = numColumns => {
  switch (numColumns) {
    case 1:
      return "33%";

    case 2:
      return "50%";

    default:
      return "100%";
  }
};

const Card = _ref => {
  let {
    numColumns = 3,
    children,
    onPress,
    style,
    ...rest
  } = _ref;
  const width = getWidth(numColumns);
  return /*#__PURE__*/_react.default.createElement(_Touchable.default, _extends({
    disabled: !onPress,
    onPress: onPress,
    style: [style, {
      width
    }]
  }, rest), children);
};

var _default = (0, _theming.withTheme)(Card);

exports.default = _default;
//# sourceMappingURL=DeprecatedCardWrapper.js.map