function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";
import { Animated, Easing } from "react-native";
import CircularProgress from "./CircularProgress";
const AnimatedProgress = Animated.createAnimatedComponent(CircularProgress);

const AnimatedCircularProgress = _ref => {
  let {
    duration = 500,
    easing = Easing.out(Easing.ease),
    fill,
    prefill = 0,
    useNativeDriver = false,
    tintColorSecondary,
    onAnimationComplete,
    tintColor = "black",
    ...other
  } = _ref;
  const [fillAnimation] = React.useState(new Animated.Value(prefill));
  const animate = React.useCallback(function () {
    let toVal = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;
    let dur = arguments.length > 1 ? arguments[1] : undefined;
    let ease = arguments.length > 2 ? arguments[2] : undefined;
    const toValue = toVal >= 0 ? toVal : fill;
    const dura = dur || duration;
    const eas = ease || easing;
    const useNative = useNativeDriver;
    const anim = Animated.timing(fillAnimation, {
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

export default AnimatedCircularProgress;
//# sourceMappingURL=AnimatedCircularProgress.js.map