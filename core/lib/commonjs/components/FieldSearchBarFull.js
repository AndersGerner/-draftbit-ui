"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _theming = require("../theming");

var _Config = _interopRequireDefault(require("./Config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const FieldSearchBarFull = _ref => {
  let {
    showIcon,
    Icon,
    icon = "search",
    placeholder = "",
    style,
    theme: {
      colors,
      typography
    },
    onChange: changeOverride,
    onSubmit: submitOverride,
    value,
    defaultValue
  } = _ref;
  const [focused, setIsFocused] = React.useState(false);

  const onBlur = () => {
    setIsFocused(false);
  };

  const [internalValue, setInternalValue] = React.useState(value || defaultValue);
  React.useEffect(() => {
    if (value != null) {
      setInternalValue(value);
    }
  }, [value]);
  React.useEffect(() => {
    if (defaultValue != null) {
      setInternalValue(defaultValue);
    }
  }, [defaultValue]);
  const onChange = React.useCallback(text => {
    changeOverride && changeOverride(text);
  }, [changeOverride]);

  const onFocus = () => {
    setIsFocused(true);
  };

  const onSubmit = e => {
    submitOverride && submitOverride(e);
  };

  const {
    lineHeight,
    ...typeStyles
  } = typography.body2; // eslint-disable-line @typescript-eslint/no-unused-vars

  const handleChangeText = newValue => {
    setInternalValue(newValue);

    if (onChange) {
      onChange(newValue);
    }
  };

  return /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [styles.container, style]
  }, showIcon && /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: _Config.default.fieldSearchBarFullIconSize,
    color: focused ? colors.primary : colors.light
  }), /*#__PURE__*/React.createElement(_reactNative.View, {
    style: {
      marginLeft: showIcon ? 12 : 0,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(_reactNative.TextInput, {
    clearButtonMode: "while-editing",
    placeholder: placeholder,
    value: internalValue,
    onBlur: onBlur,
    onFocus: onFocus,
    onChangeText: handleChangeText,
    onSubmitEditing: onSubmit,
    placeholderTextColor: colors.light,
    style: [{
      color: colors.medium
    }, typeStyles]
  })));
};

const styles = _reactNative.StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center"
  }
});

var _default = (0, _theming.withTheme)(FieldSearchBarFull);

exports.default = _default;
//# sourceMappingURL=FieldSearchBarFull.js.map