"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _reactNativeSafeAreaContext = require("react-native-safe-area-context");

var _lodash = _interopRequireDefault(require("lodash.omit"));

var _picker = require("@react-native-picker/picker");

var _theming = require("../../theming");

var _Portal = _interopRequireDefault(require("../Portal/Portal"));

var _DeprecatedButton = _interopRequireDefault(require("../DeprecatedButton"));

var _TextField = _interopRequireDefault(require("../TextField"));

var _Touchable = _interopRequireDefault(require("../Touchable"));

var _utilities = require("../../utilities");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const Picker = _ref => {
  var _options$find$label, _options$find;

  let {
    Icon,
    style,
    options,
    placeholder,
    selectedValue,
    disabled = false,
    onValueChange = () => {},
    theme: {
      colors
    },
    ...props
  } = _ref;
  const {
    viewStyles: {
      borderRadius,
      // eslint-disable-line @typescript-eslint/no-unused-vars
      borderWidth,
      // eslint-disable-line @typescript-eslint/no-unused-vars
      borderTopWidth,
      // eslint-disable-line @typescript-eslint/no-unused-vars
      borderRightWidth,
      // eslint-disable-line @typescript-eslint/no-unused-vars
      borderBottomWidth,
      // eslint-disable-line @typescript-eslint/no-unused-vars
      borderLeftWidth,
      // eslint-disable-line @typescript-eslint/no-unused-vars
      borderColor,
      // eslint-disable-line @typescript-eslint/no-unused-vars
      backgroundColor,
      // eslint-disable-line @typescript-eslint/no-unused-vars
      padding,
      // eslint-disable-line @typescript-eslint/no-unused-vars
      paddingTop,
      // eslint-disable-line @typescript-eslint/no-unused-vars
      paddingRight,
      // eslint-disable-line @typescript-eslint/no-unused-vars
      paddingBottom,
      // eslint-disable-line @typescript-eslint/no-unused-vars
      paddingLeft,
      // eslint-disable-line @typescript-eslint/no-unused-vars
      ...viewStyles
    }
  } = (0, _utilities.extractStyles)(style);
  const textField = React.useRef(undefined);
  const [pickerVisible, setIsPickerVisible] = React.useState(false);

  const toggleVisibility = () => {
    setIsPickerVisible(!pickerVisible); // @ts-ignore

    textField.current.toggleFocus(); // cannot determine if method exists due to component being wrapped in a withTheme()
  };

  const stylesWithoutMargin = style && (0, _lodash.default)(_reactNative.StyleSheet.flatten(style), ["margin", "marginTop", "marginRight", "marginBottom", "marginLeft"]);
  const selectedLabel = selectedValue && ((_options$find$label = (_options$find = options.find(o => o.value === selectedValue)) === null || _options$find === void 0 ? void 0 : _options$find.label) !== null && _options$find$label !== void 0 ? _options$find$label : selectedValue);
  return /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [styles.container, viewStyles]
  }, /*#__PURE__*/React.createElement(_Touchable.default, {
    disabled: disabled,
    onPress: toggleVisibility
  }, /*#__PURE__*/React.createElement(_TextField.default, _extends({}, props, {
    value: String(selectedLabel),
    placeholder: placeholder // @ts-ignore
    ,
    ref: textField // cannot determine if ref is of correct type due to component being wrapped in a withTheme()
    ,
    disabled: disabled,
    pointerEvents: "none" // @ts-expect-error
    ,
    style: stylesWithoutMargin,
    Icon: Icon
  }))), pickerVisible && /*#__PURE__*/React.createElement(_Portal.default, null, /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [styles.picker, {
      backgroundColor: colors.divider
    }]
  }, /*#__PURE__*/React.createElement(_reactNativeSafeAreaContext.SafeAreaView, {
    style: styles.pickerContainer
  }, /*#__PURE__*/React.createElement(_DeprecatedButton.default, {
    Icon: Icon,
    type: "text",
    onPress: toggleVisibility,
    style: styles.closeButton
  }, "Close"), /*#__PURE__*/React.createElement(_picker.Picker, {
    style: {
      backgroundColor: "white"
    },
    selectedValue: selectedValue,
    onValueChange: onValueChange
  }, options.map(o => /*#__PURE__*/React.createElement(_picker.Picker.Item, {
    label: o.label,
    value: o.value,
    key: o.value
  })))))));
};

const styles = _reactNative.StyleSheet.create({
  container: {
    alignSelf: "stretch"
  },
  picker: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "center"
  },
  pickerContainer: {
    backgroundColor: "white",
    flexDirection: "column",
    width: "100%"
  },
  closeButton: {
    alignSelf: "flex-end"
  }
});

var _default = (0, _theming.withTheme)(Picker);

exports.default = _default;
//# sourceMappingURL=PickerComponent.ios.js.map