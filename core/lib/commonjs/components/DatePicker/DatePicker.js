"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _reactNativeSafeAreaContext = require("react-native-safe-area-context");

var _dateformat = _interopRequireDefault(require("dateformat"));

var _theming = require("../../theming");

var _Portal = _interopRequireDefault(require("../Portal/Portal"));

var _DeprecatedButton = _interopRequireDefault(require("../DeprecatedButton"));

var _Touchable = _interopRequireDefault(require("../Touchable"));

var _DatePickerComponent = _interopRequireDefault(require("./DatePickerComponent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const AnimatedText = _reactNative.Animated.createAnimatedComponent(_reactNative.Text);

const FOCUS_ANIMATION_DURATION = 150;
const BLUR_ANIMATION_DURATION = 180;
const ICON_SIZE = 24;
const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const DatePicker = _ref => {
  let {
    Icon,
    style,
    theme: {
      colors,
      typography,
      roundness,
      disabledOpacity
    },
    date,
    onDateChange = () => {},
    defaultValue,
    disabled = false,
    mode = "date",
    format,
    type = "underline",
    leftIconName,
    rightIconName,
    leftIconMode = "inset",
    label,
    placeholder,
    ...props
  } = _ref;
  const [value, setValue] = React.useState(date || defaultValue);
  React.useEffect(() => {
    if (defaultValue != null) {
      setValue(defaultValue);
    }
  }, [defaultValue]);
  const [pickerVisible, setPickerVisible] = React.useState(false);
  const [labeled] = React.useState(new _reactNative.Animated.Value(date ? 0 : 1));
  const [placeholder1, setPlaceholder1] = React.useState("");
  const [focused, setFocused] = React.useState(false);
  const [labelLayout, setLabelLayout] = React.useState({
    measured: false,
    width: 0
  });

  const getValidDate = () => {
    if (!value) {
      return new Date();
    }

    return typeof (value === null || value === void 0 ? void 0 : value.getMonth) === "function" ? value : new Date();
  };

  const formatDate = () => {
    if (!value) return "";
    let newDate = getValidDate();
    if (format) return (0, _dateformat.default)(newDate, format);

    if (mode === "time") {
      return `${newDate.toLocaleTimeString()}`;
    }

    if (mode === "datetime") {
      return `${newDate.toLocaleString()}`;
    }

    return `${MONTHS[newDate.getMonth()]} ${newDate.getDate()}, ${newDate.getFullYear()}`;
  };

  const toggleVisibility = async () => {
    setPickerVisible(!pickerVisible);
    focused ? _handleBlur() : _handleFocus();
  };

  const insets = (0, _reactNativeSafeAreaContext.useSafeAreaInsets)(); // const _restoreLabel = () =>
  //   Animated.timing(labeled, {
  //     toValue: 1,
  //     duration: FOCUS_ANIMATION_DURATION,
  //     useNativeDriver: true,
  //   }).start();
  // const _minmizeLabel = () =>
  //   Animated.timing(labeled, {
  //     toValue: 0,
  //     duration: BLUR_ANIMATION_DURATION,
  //     useNativeDriver: true,
  //   }).start();
  // const _showPlaceholder = () =>
  //   setTimeout(() => setPlaceholder1(placeholder || ""), 50);

  const _hidePlaceholder = () => {
    setPlaceholder1("");
  };

  React.useEffect(() => {
    setValue(date);
  }, [date]);
  React.useEffect(() => {
    if (value || focused || placeholder1) {
      // _minmizeLabel();
      _reactNative.Animated.timing(labeled, {
        toValue: 0,
        duration: BLUR_ANIMATION_DURATION,
        useNativeDriver: true
      }).start();
    } else {
      // _restoreLabel();
      _reactNative.Animated.timing(labeled, {
        toValue: 1,
        duration: FOCUS_ANIMATION_DURATION,
        useNativeDriver: true
      }).start();
    }
  }, [value, focused, placeholder1, labeled]);
  React.useEffect(() => {
    const _showPlaceholder = () => setTimeout(() => setPlaceholder1(placeholder || ""), 50);

    if (focused || !label) {
      _showPlaceholder();
    } else {
      _hidePlaceholder();
    }

    return () => {
      clearTimeout(_showPlaceholder());
    };
  }, [focused, label, placeholder]);

  const _handleFocus = () => {
    if (disabled) {
      return;
    }

    setFocused(true);
  };

  const _handleBlur = () => {
    if (disabled) {
      return;
    }

    setFocused(false);
  };

  const MINIMIZED_LABEL_Y_OFFSET = -(typography.caption.lineHeight + 4);
  const OUTLINE_MINIMIZED_LABEL_Y_OFFSET = -(16 * 0.5 + 4);
  const MAXIMIZED_LABEL_FONT_SIZE = typography.subtitle1.fontSize;
  const MINIMIZED_LABEL_FONT_SIZE = typography.caption.fontSize;
  const hasActiveOutline = focused;
  let inputTextColor, activeColor, underlineColor, borderColor, placeholderColor, containerStyle, backgroundColor, inputStyle;
  inputTextColor = colors.strong;

  if (disabled) {
    activeColor = colors.light;
    placeholderColor = colors.light;
    borderColor = "transparent";
    underlineColor = "transparent";
    backgroundColor = colors.divider;
  } else {
    activeColor = colors.primary;
    placeholderColor = borderColor = colors.light;
    underlineColor = colors.light;
    backgroundColor = colors.background;
  }

  const {
    lineHeight,
    ...subtitle1
  } = typography.subtitle1;
  inputStyle = {
    paddingVertical: 0,
    color: inputTextColor,
    paddingLeft: leftIconName && leftIconMode === "inset" ? ICON_SIZE + (type === "solid" ? 16 : 12) : 0,
    paddingRight: rightIconName ? ICON_SIZE + 16 + 4 : 12,
    ...subtitle1,
    height: lineHeight
  };

  if (type === "underline") {
    containerStyle = {
      borderTopLeftRadius: roundness,
      borderTopRightRadius: roundness,
      paddingBottom: 12,
      marginTop: 16
    };
  } else {
    containerStyle = {
      borderRadius: roundness,
      borderColor: hasActiveOutline ? activeColor : borderColor,
      borderWidth: 1,
      paddingTop: labeled ? 16 * 1.5 : 16,
      paddingBottom: labeled ? 16 * 0.5 : 16,
      opacity: disabled ? disabledOpacity : 1,
      backgroundColor
    };
    inputStyle.paddingHorizontal = 12;
  }

  if (leftIconName && leftIconMode === "outset") {
    containerStyle.marginLeft = ICON_SIZE + 8;
  }

  let leftIconColor;

  if (focused) {
    leftIconColor = colors.primary;
  } else {
    leftIconColor = colors.light;
  }

  const leftIconProps = {
    size: 24,
    color: leftIconColor,
    name: leftIconName || ""
  };
  const leftIconStyle = {
    position: "absolute",
    marginTop: type === "solid" ? leftIconMode === "inset" ? MINIMIZED_LABEL_FONT_SIZE + 4 : 16 : leftIconMode === "outset" ? 16 : 0
  };
  const labelStyle = { ...typography.subtitle1,
    top: type === "solid" ? 16 : 0,
    left: leftIconName && leftIconMode === "inset" ? ICON_SIZE + (type === "solid" ? 16 : 12) : 0,
    transform: [{
      // Move label to top
      translateY: labeled.interpolate({
        inputRange: [0, 1],
        outputRange: [type === "solid" ? OUTLINE_MINIMIZED_LABEL_Y_OFFSET : MINIMIZED_LABEL_Y_OFFSET, 0]
      })
    }, {
      // Make label smaller
      scale: labeled.interpolate({
        inputRange: [0, 1],
        outputRange: [MINIMIZED_LABEL_FONT_SIZE / MAXIMIZED_LABEL_FONT_SIZE, 1]
      })
    }, {
      // Offset label scale since RN doesn't support transform origin
      translateX: labeled.interpolate({
        inputRange: [0, 1],
        outputRange: [-(1 - MINIMIZED_LABEL_FONT_SIZE / MAXIMIZED_LABEL_FONT_SIZE) * (labelLayout.width / 2), 0]
      })
    }]
  };
  const inputStyles = [styles.input, inputStyle, type === "solid" ? {
    marginHorizontal: 12
  } : {}]; // const render = (props) => <NativeTextInput {...props} />;

  return /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [styles.container, style]
  }, /*#__PURE__*/React.createElement(_Touchable.default, {
    disabled: disabled,
    onPress: toggleVisibility
  }, /*#__PURE__*/React.createElement(_reactNative.View, {
    pointerEvents: "none"
  }, /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [styles.container, style]
  }, leftIconName && leftIconMode === "outset" ? /*#__PURE__*/React.createElement(Icon, _extends({}, leftIconProps, {
    style: leftIconStyle
  })) : null, /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [containerStyle, style ? {
      height: style.height
    } : {}]
  }, type === "underline" ?
  /*#__PURE__*/
  // When type === 'flat', render an underline
  React.createElement(_reactNative.Animated.View, {
    style: [styles.underline, {
      backgroundColor: focused ? activeColor : underlineColor,
      // Underlines is thinner when input is not focused
      transform: [{
        scaleY: focused ? 1 : 0.5
      }]
    }]
  }) : null, label ?
  /*#__PURE__*/
  // Position colored placeholder and gray placeholder on top of each other and crossfade them
  // This gives the effect of animating the color, but allows us to use native driver
  React.createElement(_reactNative.View, {
    pointerEvents: "none",
    style: [_reactNative.StyleSheet.absoluteFill, {
      opacity: // Hide the label in minimized state until we measure its width
      date || focused ? labelLayout.measured ? 1 : 0 : 1
    }]
  }, /*#__PURE__*/React.createElement(AnimatedText, {
    onLayout: e => setLabelLayout({
      width: e.nativeEvent.layout.width,
      measured: true
    }),
    style: [styles.placeholder, type === "solid" ? {
      paddingHorizontal: 12
    } : {}, labelStyle, {
      color: colors.light,
      opacity: labeled.interpolate({
        inputRange: [0, 1],
        outputRange: [hasActiveOutline ? 1 : 0, 0]
      })
    }],
    numberOfLines: 1
  }, label), /*#__PURE__*/React.createElement(AnimatedText, {
    style: [styles.placeholder, type === "solid" ? {
      paddingHorizontal: 12
    } : {}, labelStyle, {
      color: placeholderColor,
      opacity: hasActiveOutline ? labeled : 1
    }],
    numberOfLines: 1
  }, label)) : null, leftIconName && leftIconMode === "inset" ? /*#__PURE__*/React.createElement(Icon, _extends({}, leftIconProps, {
    style: { ...leftIconStyle,
      marginLeft: type === "solid" ? 16 : 0
    }
  })) : null, /*#__PURE__*/React.createElement(_reactNative.TextInput, _extends({
    value: formatDate(),
    placeholder: label ? placeholder1 : placeholder,
    editable: !disabled,
    placeholderTextColor: placeholderColor,
    selectionColor: activeColor,
    onFocus: _handleFocus,
    onBlur: _handleBlur,
    underlineColorAndroid: "transparent",
    style: inputStyles
  }, props))), rightIconName ? /*#__PURE__*/React.createElement(Icon, {
    name: rightIconName,
    size: ICON_SIZE,
    color: colors.light,
    style: {
      position: "absolute",
      right: 16,
      marginTop: type === "solid" ? MINIMIZED_LABEL_FONT_SIZE + 4 : 16
    }
  }) : null))), pickerVisible && /*#__PURE__*/React.createElement(_Portal.default, null, /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [styles.picker, {
      backgroundColor: colors.divider
    }]
  }, /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [styles.pickerContainer, {
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
      paddingLeft: insets.left,
      paddingRight: insets.right
    }]
  }, _reactNative.Platform.OS === "ios" && /*#__PURE__*/React.createElement(_DeprecatedButton.default, {
    Icon: Icon,
    type: "text",
    onPress: toggleVisibility,
    style: styles.closeButton
  }, "Close"), /*#__PURE__*/React.createElement(_DatePickerComponent.default, {
    value: getValidDate(),
    mode: mode,
    isVisible: pickerVisible,
    toggleVisibility: toggleVisibility,
    onChange: (_event, data) => {
      _reactNative.Platform.OS === "ios" ? null : toggleVisibility();
      setValue(data);
      onDateChange(data);
    }
  })))));
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
  underline: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 2
  },
  input: {
    flexGrow: 1,
    justifyContent: "center",
    textAlignVertical: "center",
    margin: 0,
    textAlign: _reactNative.I18nManager.isRTL ? "right" : "left"
  },
  placeholder: {
    position: "absolute",
    left: 0
  },
  pickerContainer: {
    flexDirection: "column",
    width: "100%"
  },
  closeButton: {
    alignSelf: "flex-end"
  }
});

var _default = (0, _theming.withTheme)(DatePicker);

exports.default = _default;
//# sourceMappingURL=DatePicker.js.map