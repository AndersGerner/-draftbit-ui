import React, { Component } from "react";
import { Animated, ViewProps, StyleProp, ViewStyle, LayoutChangeEvent } from "react-native";
declare type Props = {
    borderColor?: string;
    borderRadius?: number;
    borderWidth?: number;
    children?: React.ReactNode;
    color?: string;
    height?: number;
    style?: StyleProp<ViewStyle>;
    unfilledColor?: string;
    width?: number;
    animated?: boolean;
    indeterminate?: boolean;
    indeterminateAnimationDuration?: number;
    progress?: number;
    useNativeDriver?: boolean;
    animationConfig?: Animated.AnimationConfig;
    animationType?: "decay" | "timing" | "spring";
} & ViewProps;
interface State {
    width: number;
    progress: Animated.Value;
    animationValue: Animated.Value;
}
export default class ProgressBar extends Component<Props, State> {
    constructor(props: Props);
    componentDidMount(): void;
    componentDidUpdate(prevProps: Props): void;
    handleLayout: (event: LayoutChangeEvent) => void;
    animate(): void;
    render(): JSX.Element;
}
export {};
