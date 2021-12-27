"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _CircularProgress = _interopRequireDefault(require("./CircularProgress"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const AnimatedProgress = _reactNative.Animated.createAnimatedComponent(_CircularProgress.default);

const AnimatedCircularProgress = _ref => {
  let {
    duration = 500,
    easing = _reactNative.Easing.out(_reactNative.Easing.ease),
    fill,
    prefill = 0,
    useNativeDriver = false,
    tintColorSecondary,
    onAnimationComplete,
    tintColor = "black",
    ...other
  } = _ref;
  const [fillAnimation] = React.useState(new _reactNative.Animated.Value(prefill));
  const animate = React.useCallback(function () {
    let toVal = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;
    let dur = arguments.length > 1 ? arguments[1] : undefined;
    let ease = arguments.length > 2 ? arguments[2] : undefined;
    const toValue = toVal >= 0 ? toVal : fill;
    const dura = dur || duration;
    const eas = ease || easing;
    const useNative = useNativeDriver;

    const anim = _reactNative.Animated.timing(fillAnimation, {
      useNativeDriver: useNative,
      toValue,
      easing: eas,
      duration: dura
    });

    anim.start(onAnimationComplete);
    return anim;
  }, [duration, easing, fill, useNativeDriver, fillAnimation, onAnimationComplete]);

  const animateColor = () => {
    if (!tintColorSecondary) {
      return tintColor;
    }

    const tintAnimation = fillAnimation.interpolate({
      inputRange: [0, 100],
      outputRange: [tintColor, tintColorSecondary]
    });
    return tintAnimation;
  };

  React.useEffect(() => {
    animate();
  }, [fill, animate]);
  return /*#__PURE__*/React.createElement(AnimatedProgress, _extends({}, other, {
    style: other.style,
    childrenContainerStyle: other.childrenContainerStyle,
    fill: fillAnimation,
    tintColor: animateColor()
  }));
};

var _default = AnimatedCircularProgress;
exports.default = _default;
//# sourceMappingURL=AnimatedCircularProgress.js.map