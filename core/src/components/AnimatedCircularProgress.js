import * as React from "react";
import { Animated, Easing, } from "react-native";
import CircularProgress from "./CircularProgress";
const AnimatedProgress = Animated.createAnimatedComponent(CircularProgress);
const AnimatedCircularProgress = ({ duration = 500, easing = Easing.out(Easing.ease), fill, prefill = 0, useNativeDriver = false, tintColorSecondary, onAnimationComplete, tintColor = "black", ...other }) => {
    const [fillAnimation] = React.useState(new Animated.Value(prefill));
    const animate = React.useCallback((toVal = -1, dur, ease) => {
        const toValue = toVal >= 0 ? toVal : fill;
        const dura = dur || duration;
        const eas = ease || easing;
        const useNative = useNativeDriver;
        const anim = Animated.timing(fillAnimation, {
            useNativeDriver: useNative,
            toValue,
            easing: eas,
            duration: dura,
        });
        anim.start(onAnimationComplete);
        return anim;
    }, [
        duration,
        easing,
        fill,
        useNativeDriver,
        fillAnimation,
        onAnimationComplete,
    ]);
    const animateColor = () => {
        if (!tintColorSecondary) {
            return tintColor;
        }
        const tintAnimation = fillAnimation.interpolate({
            inputRange: [0, 100],
            outputRange: [tintColor, tintColorSecondary],
        });
        return tintAnimation;
    };
    React.useEffect(() => {
        animate();
    }, [fill, animate]);
    return (React.createElement(AnimatedProgress, { ...other, style: other.style, childrenContainerStyle: other.childrenContainerStyle, fill: fillAnimation, tintColor: animateColor() }));
};
export default AnimatedCircularProgress;
