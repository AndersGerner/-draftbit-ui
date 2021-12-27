import * as React from "react";
import { Animated, EasingFunction } from "react-native";
import { Props as CircularProgressProps } from "./CircularProgress";
declare type Props = {
    duration?: number;
    easing?: EasingFunction;
    prefill?: number;
    useNativeDriver?: boolean;
    tintColorSecondary?: string;
    onAnimationComplete?: Animated.EndCallback | undefined;
} & CircularProgressProps;
declare const AnimatedCircularProgress: React.FC<Props>;
export default AnimatedCircularProgress;
