import React from "react";
import { StyleProp, ViewStyle } from "react-native";
export declare type Props = {
    size: number;
    width: number;
    backgroundWidth?: number;
    tintColor?: string;
    tintTransparency?: boolean;
    backgroundColor?: string;
    style?: StyleProp<ViewStyle>;
    rotation?: string | number | undefined;
    lineCap?: "butt" | "square" | "round" | undefined;
    arcSweepAngle?: number;
    fill: number;
    children?: (fill: number) => React.ReactNode;
    childrenContainerStyle?: StyleProp<ViewStyle>;
    padding?: number;
    renderCap?: (obj: {
        center: {
            x: number;
            y: number;
        };
    }) => React.ReactNode;
    dashedBackground?: {
        width: number;
        gap: number;
    };
    dashedTint?: {
        width: number;
        gap: number;
    };
};
declare class CircularProgress extends React.Component<Props> {
    polarToCartesian: (centerX: number, centerY: number, radius: number, angleInDegrees: number) => {
        x: number;
        y: number;
    };
    circlePath: (x: number, y: number, radius: number, startAngle: number, endAngle: number) => string;
    clampFill: (fill: number) => number;
    render(): JSX.Element;
}
export default CircularProgress;
