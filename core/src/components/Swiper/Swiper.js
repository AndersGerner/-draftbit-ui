import React from "react";
import { View } from "react-native";
import SwiperComponent from "react-native-web-swiper";
const Swiper = ({ vertical = false, loop = false, timeout = 0, from = 0, prevTitle = "", nextTitle = "", dotsTouchable = true, children, style, }) => (React.createElement(View, { style: style },
    React.createElement(SwiperComponent, { from: from, loop: loop, timeout: timeout, vertical: vertical, controlsProps: {
            prevTitle,
            nextTitle,
            dotsTouchable,
        } }, children)));
export default Swiper;
