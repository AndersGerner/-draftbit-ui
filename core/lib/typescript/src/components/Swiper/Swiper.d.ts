import React from "react";
import { StyleProp, ViewStyle } from "react-native";
export interface SwiperProps {
    vertical?: boolean;
    loop?: boolean;
    from?: number;
    timeout?: number;
    prevTitle?: string;
    nextTitle?: string;
    dotsTouchable?: boolean;
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
}
declare const Swiper: ({ vertical, loop, timeout, from, prevTitle, nextTitle, dotsTouchable, children, style, }: SwiperProps) => JSX.Element;
export default Swiper;
