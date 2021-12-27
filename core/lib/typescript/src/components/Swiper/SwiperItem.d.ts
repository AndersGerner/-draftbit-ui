import React from "react";
import { StyleProp, ViewStyle } from "react-native";
export interface SwiperProps {
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
}
declare const SwiperItem: ({ children, style }: SwiperProps) => JSX.Element;
export default SwiperItem;
