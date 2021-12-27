"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Direction = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _RadioButton = _interopRequireDefault(require("./RadioButton"));

var _Text = _interopRequireDefault(require("../Text"));

var _context = require("./context");

var _Touchable = _interopRequireDefault(require("../Touchable"));

var _utilities = require("../../utilities");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

let Direction;
exports.Direction = Direction;

(function (Direction) {
  Direction["Row"] = "row";
  Direction["RowReverse"] = "row-reverse";
})(Direction || (exports.Direction = Direction = {}));

const getRadioButtonAlignment = (parentDirection, direction) => {
  if (parentDirection === _context.Direction.Horizontal) {
    return direction === Direction.Row ? "flex-start" : "flex-end";
  } else if (direction === Direction.RowReverse) {
    return "flex-start";
  } else {
    return "flex-end";
  }
};

const renderLabel = (value, labelStyle, textStyle) => {
  if (typeof value === "string") {
    return /*#__PURE__*/React.createElement(_Text.default, {
      style: [labelStyle, textStyle]
    }, value);
  } else {
    return /*#__PURE__*/React.createElement(React.Fragment, null, value);
  }
};

const RadioButtonRow = _ref => {
  let {
    Icon,
    label,
    value,
    color,
    unselectedColor,
    onPress = () => {},
    labelContainerStyle,
    labelStyle,
    radioButtonStyle,
    direction = Direction.Row,
    selected,
    disabled,
    style,
    ...rest
  } = _ref;
  const {
    value: contextValue,
    onValueChange,
    direction: parentDirection
  } = (0, _context.useRadioButtonGroupContext)();

  const handlePress = () => {
    onPress(value);
    onValueChange && onValueChange(value);
  };

  const {
    textStyles,
    viewStyles
  } = (0, _utilities.extractStyles)(style);
  return /*#__PURE__*/React.createElement(_Touchable.default, _extends({
    onPress: handlePress,
    style: [styles.mainParent, {
      flexDirection: direction
    }, viewStyles],
    disabled: disabled
  }, rest), /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [styles.label, {
      alignItems: direction === Direction.Row ? "flex-start" : "flex-end"
    }, labelContainerStyle]
  }, renderLabel(label, labelStyle, textStyles)), /*#__PURE__*/React.createElement(_reactNative.View, {
    style: {
      flex: 1,
      alignItems: getRadioButtonAlignment(parentDirection, direction)
    }
  }, /*#__PURE__*/React.createElement(_RadioButton.default, {
    Icon: Icon,
    selected: selected || contextValue != null && contextValue === value,
    color: color,
    unselectedColor: unselectedColor,
    onPress: handlePress,
    style: radioButtonStyle
  })));
};

const styles = _reactNative.StyleSheet.create({
  mainParent: {
    alignItems: "center",
    justifyContent: "space-around",
    paddingStart: 20,
    minHeight: 50,
    paddingEnd: 20,
    flex: 1,
    ..._reactNative.Platform.select({
      web: {
        cursor: "pointer",
        userSelect: "none"
      }
    })
  },
  label: {
    flex: 3
  }
});

var _default = RadioButtonRow;
exports.default = _default;
//# sourceMappingURL=RadioButtonRow.js.map