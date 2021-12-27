import * as React from "react";
import { StyleProp, ViewStyle } from "react-native";
import type { ViewStyleProp } from "react-native/Libraries/StyleSheet/StyleSheet";
export declare function Center({ width, height, children, bgColor, style, ...rest }: {
    width: number;
    height: number;
    bgColor: string;
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
}): JSX.Element;
export declare function Circle({ size, bgColor, children, style, ...rest }: {
    size: number;
    bgColor: string;
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
}): JSX.Element;
export declare function Square({ size, bgColor, children, style, ...rest }: {
    size: number;
    bgColor: string;
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
}): JSX.Element;
export declare function Row({ justifyContent, alignItems, children, style, ...rest }: {
    alignItems: ViewStyleProp.alignItems;
    justifyContent: ViewStyleProp.justifyContent;
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
}): JSX.Element;
export declare function Spacer({ top, right, bottom, left, children, style, ...rest }: {
    top?: number;
    right?: number;
    left?: number;
    bottom?: number;
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
}): JSX.Element;
export declare function Stack({ children, justifyContent, alignItems, style, ...rest }: {
    justifyContent: ViewStyleProp.justifyContent;
    alignItems: ViewStyleProp.alignItems;
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
}): JSX.Element;
