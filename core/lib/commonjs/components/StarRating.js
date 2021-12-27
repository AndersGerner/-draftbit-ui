"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _theming = require("../theming");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const StarRating = _ref => {
  let {
    Icon,
    starSize = 16,
    maxStars = 5,
    rating = 0,
    defaultValue,
    isEditable = false,
    activeColor,
    inactiveColor,
    style,
    onPress,
    ...rest
  } = _ref;
  const [localRating, setLocalRating] = React.useState(rating || defaultValue || 0);
  React.useEffect(() => {
    if (rating != null) {
      setLocalRating(rating);
    }
  }, [rating]);
  React.useEffect(() => {
    if (defaultValue != null) {
      setLocalRating(defaultValue);
    }
  }, [defaultValue]);
  const ratingHandler = React.useCallback(r => {
    setLocalRating(r);
    !!onPress && onPress(r);
  }, [onPress]);
  const ratingRounded = Math.round(localRating * 2) / 2;
  return /*#__PURE__*/React.createElement(_reactNative.View, _extends({
    style: [styles.container, style]
  }, rest), [...Array(maxStars)].map((_, i) => /*#__PURE__*/React.createElement(_reactNative.View, {
    key: i,
    style: {
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ratingRounded - i === 0.5 ? "MaterialIcons/star-half" : "MaterialIcons/star",
    size: starSize,
    color: ratingRounded > i ? activeColor : inactiveColor
  }), isEditable && /*#__PURE__*/React.createElement(_reactNative.View, {
    style: styles.touchContainer
  }, /*#__PURE__*/React.createElement(_reactNative.Pressable, {
    style: styles.pressable,
    onPress: () => ratingHandler(i + 0.5)
  }), /*#__PURE__*/React.createElement(_reactNative.Pressable, {
    style: styles.pressable,
    onPress: () => ratingHandler(i + 1)
  })))));
};

const styles = _reactNative.StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center"
  },
  touchContainer: {
    display: "flex",
    flexDirection: "row",
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    zIndex: 1
  },
  pressable: {
    flex: 1,
    height: "100%",
    width: "50%"
  }
});

var _default = (0, _theming.withTheme)(StarRating);

exports.default = _default;
//# sourceMappingURL=StarRating.js.map